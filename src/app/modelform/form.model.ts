import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ageRangeValidator } from "src/app/customval/vowel.formvalidator";

export class UserFormControl extends FormControl {

    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validatior: any) {

        super(value, validatior);

        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessage() {
        let messages: string[] = [];

        if (this.errors) {

            for (let element in this.errors) {

                switch (element) {

                    case "required":
                        messages.push(`You must enter the ${this.label}`);
                        break;

                        case "ageRange":
                        messages.push(`A ${this.label} must be between 18 and 45`);
                        break;

                    case "minlength":
                        messages.push(`A  ${this.label} must be atleast ${this.errors.minlength.requiredLength} `);
                        break;

                    case "maxlength":
                        messages.push(`A  ${this.label} not more than ${this.errors.maxlength.requiredLength} `);
                        break;
                }
            }
        }
        return messages;
    }
}

export class UserFormGroup extends FormGroup {

    constructor() {
        super({

            // This below name : is formControlName
            name: new UserFormControl("Name", "name", "",
                Validators.compose(
                    [
                        Validators.required,
                       // Validators.minLength(5),
                        ageRangeValidator
                    ])

            ),

            dob: new UserFormControl("DOB", "dob", "",
                Validators.compose([Validators.required,
                Validators.pattern("/^(\d{1,2})-(\d{1,2})-(\d{4})$/")])),

            mobile: new UserFormControl("Mobile", "mobile", "",
                Validators.compose([Validators.required,
                Validators.maxLength(9)]))

        });
    }


    get userControls(): UserFormControl[] {
        return Object.keys(this.controls).map(x => this.controls[x] as UserFormControl)
    }


    getFormValidationMessage(form: any): string[] {

        let messages: string[] = [];

        this.userControls.forEach(x => {

            x.getValidationMessage().forEach(m => {

                messages.push(m)
            })
        });

        return messages;
    }
}
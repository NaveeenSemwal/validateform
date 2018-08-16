
import { AbstractControl } from "@angular/forms";

//  https://dzone.com/articles/how-to-create-custom-validators-in-angular


  export function  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

        if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {

            return { 'ageRange': true };
        }
        return null;
    }

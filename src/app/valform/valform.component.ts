import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/register.user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-valform',
  templateUrl: './valform.component.html',
  styleUrls: ['./valform.component.css']
})
export class ValformComponent implements OnInit {

  constructor() { }

  newUser: User = new User;

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {

    this.formSubmitted = true;

  }

  getFormValidationMessage(form: NgForm): string[] {
    
    let messages: string[] = [];

    Object.keys(form.controls).forEach(x => {
    
      this.getValidationMessage(form.controls[x],x).forEach(m => {

        messages.push(m);
      })

    });

    return messages;
  }

  getValidationMessage(state: any, thingName?: string) {

    let thing: string;

    thing = state.path || thingName;

    let messages: string[] = [];

    if (state.errors) {

      for (let element in state.errors) {

        switch (element) {

          case "required":
            messages.push(`You must enter the ${thing}`);
            break;

          case "minlength":
            messages.push(`A  ${thing} must be atleast ${state.errors.minlength.requiredLength} `);
            break;

        }
      }


    }

    return messages

  }

  ngOnInit() {
  }

}

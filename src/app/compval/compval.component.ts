import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/register.user';

@Component({
  selector: 'app-compval',
  templateUrl: './compval.component.html',
  styleUrls: ['./compval.component.css']
})
export class CompvalComponent implements OnInit {

  constructor() { }

  newUser: User = new User;

  ngOnInit() {
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

}

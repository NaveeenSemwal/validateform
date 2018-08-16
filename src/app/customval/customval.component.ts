import { Component, OnInit } from '@angular/core';
import { UserFormGroup } from 'src/app/modelform/form.model';
import { User } from 'src/app/register.user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customval',
  templateUrl: './customval.component.html',
  styleUrls: ['./customval.component.css']
})
export class CustomvalComponent implements OnInit {

  constructor() { }

  // Enable model based form.
  form: UserFormGroup = new UserFormGroup();

  newUser: User = new User();

  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submitForm(form: NgForm) {

    console.log("hi");
    this.formSubmitted = true;
    // form.reset();
  }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFormGroup } from 'src/app/modelform/form.model';
import { User } from 'src/app/register.user';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

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

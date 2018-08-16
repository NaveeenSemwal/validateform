import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/register.user';

@Component({
  selector: 'app-tempvar',
  templateUrl: './tempvar.component.html',
  styleUrls: ['./tempvar.component.css']
})
export class TempvarComponent implements OnInit {

  constructor() { }

  newUser: User = new User;
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }
  loginForm: FormGroup ;
  ngOnInit(): void {
    this.buildLoginForm();
  }
  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
       email: ["", Validators.required],
       password: ["", Validators.required]
 
     })
   }
   login(){}
}

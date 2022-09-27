import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { LoginForm, RegisterForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form_register :  RegisterForm = {
    email:'',
    password:'',
    confirm_password:''
  };

  passwordMatched :boolean = true;

  submit_register(){
    if(this.form_register.password != this.form_register.confirm_password){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form_register.email, this.form_register.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });  }


  }

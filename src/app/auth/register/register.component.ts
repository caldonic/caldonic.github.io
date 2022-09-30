import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { LoginForm, RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  form_register :  RegisterForm = {
    email:'',
    password:'',
    confirm_password:''
  };


  submit_register(){

    this.authService.register(this.form_register,)
    }

    isLoading(){
      return this.authService.isLoading;
    }


  }

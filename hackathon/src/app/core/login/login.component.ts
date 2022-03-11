import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { OrganirouteService } from 'src/app/shared/services/Organiroute/organiroute.service';


/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform:FormGroup = this.createFromGroup();
  message:string='';


  createFromGroup(){
    return new FormGroup({
      usernameFormControl: new FormControl('',
        Validators.required,
      ),
      passwordFormControl: new FormControl('',
        Validators.required,
      ),
    })
  }

 

  constructor(private auth:OrganirouteService, private router:Router) { }

  ngOnInit(): void {
    //this.myform = this.createFromGroup();
  }

  onSubmit() {
    
    if (!this.myform.valid){
      
      this.message="Please verify entered details!!!";
      //this.blogService.addBlog(this.form.value);
    }
    else {
      
      this.auth.logIn();
      
      if ((this.myform.controls['usernameFormControl'].value ==='admin')&&(this.myform.controls['passwordFormControl'].value ==='password')){
        
        this.router.navigate(['dashboard']);
      }
      else
      {
        this.router.navigate(['productlist']);
      }
      
    }
    
    
  }
  // clearForm method is to reset the form after submitting
  clearForm() {

    this.myform.reset();
    
  }

}

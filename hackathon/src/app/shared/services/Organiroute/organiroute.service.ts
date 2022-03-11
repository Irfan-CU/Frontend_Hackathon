import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganirouteService {

  constructor(private router:Router) { }
  isLogged:boolean=false;
  get isLoggedIn(){
   return this.isLogged;
  }
  logIn(){
    this.isLogged=true;
    console.log(this.isLogged);
  }
logOut(){
  this.isLogged=false;
  this.router.navigate(['/login']);
}

}

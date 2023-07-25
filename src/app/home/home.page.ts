import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// exports all values that are going to be used in the template
export class HomePage {
  // text: string = 'hasdfasdf';

  users = [
    {
      userName: 'amouasd',
      userEmail: 'amo@mail.com'
    }
  ]

  username: string = '';
  email: string = '';
  manualModified: boolean = false;
  emailOk:boolean = false;
  onChange(){
    this.email = this.username!='' && !this.manualModified ? this.username+'@mail.com':this.email;
  }
  
  checkEmailFormat(email: string){
    return email.endsWith('@mail.com')
  }
  onChangeEmail(){
    this.manualModified = true;
    // console.log(this.checkEmailFormat(this.email));
    // console.log(this.manualModified);
    // console.log(!this.checkEmailFormat(this.email) && this.manualModified);
    this.emailOk = (!this.checkEmailFormat(this.email) && this.manualModified);
  }

  findUser(){
    return this.users.find(user => user.userName == this.username && user.userEmail == this.email)
  }

  checkData(){
    const re = '[0-9]? ';
    return this.checkEmailFormat(this.email) && !this.username.match(re)
  }

  regUser(){
    if (!this.findUser() && this.checkData()) {
      this.users.push({
        userName: this.username,
        userEmail: this.email
      })      
    }
    console.log(this.users) 
  }
  constructor() {}

}

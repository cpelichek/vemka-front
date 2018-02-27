import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { UserData } from '../../providers/user-data';
import { NgModule } from '@angular/core';
import { LoginPage } from '../login/login';

@NgModule({
  providers: [
    UserData
  ]
})


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phoneNumber: '',
    adress: '',
    birthDate: '',
    cep: '',
    agreementContract: false };
submitted = false;


  constructor(public navCtrl: NavController, public userData: UserData) {}

  irParaLogin(){
    this.navCtrl.setRoot(LoginPage);
    }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);     
      this.navCtrl.push(TabsPage);
    }
  }
}

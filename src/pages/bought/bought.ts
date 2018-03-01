import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the BoughtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bought',
  templateUrl: 'bought.html',
})
export class BoughtPage {

  constructor(
    public navParams: NavParams,
    public navController: NavController,
    public http: HttpClient,
    public app: App,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoughtPage');
  }

}

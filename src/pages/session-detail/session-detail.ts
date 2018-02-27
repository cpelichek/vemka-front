import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import { NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
import { ConferenceData } from '../../providers/conference-data';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})


export class SessionDetailPage {
  session: any;
  @ViewChild(TimerComponent) timer: TimerComponent;
  appName = 'Ionic App';
 

  constructor(
    public dataProvider: ConferenceData,
    public navParams: NavParams,
    public navController: NavController
  ) {}

 
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.timer.startTimer();
  //   }, 1000)
  // }
 
YourFancyButton(){
  this.navController.setRoot(SignupPage);
  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (
        data &&
        data.schedule &&
        data.schedule[0] &&
        data.schedule[0].groups
      ) {
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === this.navParams.data.sessionId) {
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }
}

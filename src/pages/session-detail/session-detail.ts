import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { App, NavController } from 'ionic-angular';
//import { NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
import { ConferenceData } from '../../providers/conference-data';
import { SignupPage } from '../signup/signup';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})


export class SessionDetailPage {
  session: any;
  @ViewChild(TimerComponent) timer: TimerComponent;
  appName = 'Ionic App';
  schedule: any;
 

  constructor(
    public dataProvider: ConferenceData,
    public navParams: NavParams,
    public navController: NavController,
    public http: HttpClient,
    public app: App,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('sessionDetail');
    let id = this.navParams.get('id');

    this.http.get(`http://159.65.237.0:8080/scheduleDetail/${id}`).subscribe((data) => {
      this.schedule = data;
      console.log(this.schedule);
    });
    // this.updateSchedule();
  }

    updateSchedule() {
    // // Close any open sliding items when the schedule updates
    // this.scheduleList && this.scheduleList.closeSlidingItems();

    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;
    // });
  }

 
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.timer.startTimer();
  //   }, 1000)
  // }
 
YourFancyButton(){
  this.navController.setRoot(SignupPage);
  }

  ionViewWillEnter() {
  //   this.dataProvider.load().subscribe((data: any) => {
  //     if (
  //       data &&
  //       data.schedule &&
  //       data.schedule[0] &&
  //       data.schedule[0].groups
  //     ) {
  //       for (const group of data.schedule[0].groups) {
  //         if (group && group.sessions) {
  //           for (const session of group.sessions) {
  //             if (session && session.id === this.navParams.data.sessionId) {
  //               this.session = session;
  //               break;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  }
}

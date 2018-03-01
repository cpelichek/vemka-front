import {Component, Input} from '@angular/core';
import {ITimer} from './itimer';



@Component({
    selector: 'timer',
    templateUrl: './timer.html'
})
export class TimerComponent {
    //    dateone = Date.parse("2016-08-21T07:00:00.000Z");
    
    dateone = Date.now();
    
    @Input() datetwo;
    
    dayDif;
    ligar= false;
    
    public timer: ITimer;   
    
    constructor() {
    }
    
    
    ngOnInit() {
        this.initTimer();
        this.startTimer();
    }
    
    hasFinished() {
        return this.timer.hasFinished;
    }
    
    
    initTimer() {
        this.dayDif = (this.datetwo - this.dateone)  / 1000; 
        //     this.timer = <ITimer>{
        //         seconds: this.timeInSeconds,
        //         runTimer: false,
        //         hasStarted: false,
        //         hasFinished: false,
        //         secondsRemaining: this.timeInSeconds
        //     };
        
        //     this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        // } 
        this.timer = <ITimer>{
            seconds: this.dayDif,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.dayDif
        };
        
        console.log(this.timer.secondsRemaining);
        
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
    
    
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    
    finishTimer() {
        this.timer.runTimer = false;
    }
    
    resumeTimer() {
        this.startTimer();
    }
    
    
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
    
    getSecondsAsDigitalClock(inputSeconds: number) {
        let sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        let days = Math.floor(sec_num / 86400);
        let hours   = Math.floor((sec_num - (days * 86400))/ 3600);
        let minutes = Math.floor((sec_num - (hours * 3600) - (days * 86400)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60) - (days * 86400);
        
        let daysString = '';
        
        let hoursString = '';
        let minutesString = '';
        let secondsString = '';
        daysString= (days <10 ) ? "0" + days : days.toString();
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        
        if (this.timer.secondsRemaining <= 0){
            this.finishTimer();
            
        }
        
        return  daysString + ' dias ' + hoursString + ':' + minutesString + ':' + secondsString;
      
    }
    
}

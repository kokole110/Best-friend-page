import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public displayTimer!: string;
  public time!: number;
  public birthday!: Date
  subscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.birthday = new Date('March 3, 2021 08:25');
    this.time = Date.now() - this.birthday.getTime();
    
    this.subscription = timer(0, 1000).subscribe(data=> {
      this.time += 1000;
      this.getDisplayTimer(new Date(this.time), this.birthday);
    })    
  }

  getDisplayTimer(time: Date, birthday: Date) {
    let today = new Date(Date.now())
    let months = (today.getFullYear() - birthday.getFullYear()) * 12;
    months -= birthday.getMonth();
    months += today.getMonth();
    let years = Math.floor(months / 12);
    let daysCount: number = 0;
    switch (months) {
      case 1: 
        daysCount = 31;
        break;
      case 2: 
        daysCount = 61;
        break;
      case 3: 
        daysCount = 92;
        break;
      case 4: 
        daysCount = 122;
        break;
      case 5: 
        daysCount = 153;
        break;
      case 6: 
        daysCount = 184;
        break;
      case 7: 
        daysCount = 214;
        break;
      case 8: 
        daysCount = 245;
        break;
      case 9: 
        daysCount = 275;
        break;  
      case 10: 
        daysCount = 306;
        break;
      case 11: 
        daysCount = 336;
        break;
    }
    
    let days = '' + Math.floor(time.getTime() / (1000 * 60 * 60 * 24));
    let daysLeft = +days - daysCount;
    let hoursLeft = time.getTime() - (+days * 24 * 3600000); 
    let hours = '' + Math.floor(hoursLeft / 3600000);
    let minutesLeft = hoursLeft - (+hours * 3600000)
    let minutes = '' + Math.floor(minutesLeft / 60000);
    let secondsLeft = minutesLeft - (+minutes * 60000);
    let seconds = '' + Math.floor(secondsLeft / 1000);

    if (Number(hours) < 10) {
      hours = '0' + hours;
    } else {
      hours = '' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    } else {
      minutes = '' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    } else {
      seconds = '' + seconds;
    }

    this.displayTimer = years + ' y ' + (months - 12) + ' m ' + (daysLeft - 365) + ' d ' + hours + ' h ' + minutes + ' min ' + seconds + ' sec';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

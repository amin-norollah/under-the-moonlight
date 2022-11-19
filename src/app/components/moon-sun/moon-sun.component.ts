import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-moon-sun',
  templateUrl: './moon-sun.component.html',
  styleUrls: ['./moon-sun.component.css'],
})
export class MoonSunComponent implements OnInit {
  constructor() {}

  @HostBinding('style.--moon-x.%') moonX: string = '15vw';
  @HostBinding('style.--moon-y.%') moonY: string = '10vh';
  @HostBinding('style.--sun-x.%') sunX: string = '-15vw';
  @HostBinding('style.--sun-y.%') sunY: string = '30vh';

  moonStyle: string = 'opacity: 1';
  sunStyle: string = 'opacity: 1';

  ////////////////////////////////////////////////////////
  // receive propagated events
  @Input() changeModeEvent: Observable<boolean> | any;

  private changeModeEventSubscription: Subscription | any;

  ngOnInit() {
    this.changeModeEventSubscription = this.changeModeEvent.subscribe(
      (isDay: boolean) => this.changeMode(isDay)
    );
  }

  ngOnDestroy() {
    this.changeModeEventSubscription.unsubscribe();
  }

  //change colors
  changeMode(isDay: boolean) {
    if (isDay) {
      //sunrise coming
      //disappear
      this.moonX = '45vw';
      this.moonY = '-30vh';
      setTimeout(() => {
        this.moonStyle = 'opacity: 0';
        this.moonX = '-15vw';
        this.moonY = '30vh';
      }, 1500);

      //show
      this.sunStyle = 'opacity: 1';
      this.sunX = '15vw';
      this.sunY = '10vh';
    } else {
      //sunset coming
      //show
      this.moonStyle = 'opacity: 1';
      this.moonX = '15vw';
      this.moonY = '10vh';

      //disappear
      this.sunX = '45vw';
      this.sunY = '-30vh';
      setTimeout(() => {
        this.sunStyle = 'opacity: 0';
        this.sunX = '-15vw';
        this.sunY = '30vh';
      }, 1500);
    }
  }
}

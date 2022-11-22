import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IStars } from '../../shared/Interfaces';

@Component({
  selector: 'app-skys',
  templateUrl: './skys.component.html',
  styleUrls: ['./skys.component.css'],
})
export class SkysComponent implements OnInit {
  constructor() {}

  @HostBinding('style.--moon-x.%') moonX: string = '20vw';
  @HostBinding('style.--moon-y.%') moonY: string = '20vh';
  @HostBinding('style.--sun-x.%') sunX: string = '-40vw';
  @HostBinding('style.--sun-y.%') sunY: string = '60vh';

  moonStyle: string = 'opacity: 1';
  sunStyle: string = 'opacity: 1';
  starsParameters: IStars[] = [];

  ////////////////////////////////////////////////////////
  // receive propagated events
  @Input() changeModeEvent: Observable<boolean> | any;

  private changeModeEventSubscription: Subscription | any;

  ngOnInit() {
    this.changeModeEventSubscription = this.changeModeEvent.subscribe(
      (isDay: boolean) => this.changeMode(isDay)
    );

    //generate stars
    this.starsParameters = this.calculateStars(12);
  }

  ngOnDestroy() {
    this.changeModeEventSubscription.unsubscribe();
  }

  //change colors
  changeMode(isDay: boolean) {
    if (isDay) {
      //sunrise coming
      //disappear
      this.moonX = '100vw';
      this.moonY = '-40vh';
      setTimeout(() => {
        this.moonStyle = 'opacity: 0';
        this.moonX = '-40vw';
        this.moonY = '40vh';
      }, 1500);

      //remove stars
      this.starsParameters = [];

      //show
      this.sunStyle = 'opacity: 1';
      this.sunX = '20vw';
      this.sunY = '20vh';
    } else {
      //sunset coming
      //show
      this.moonStyle = 'opacity: 1';
      this.moonX = '20vw';
      this.moonY = '20vh';

      //generate stars
      this.starsParameters = this.calculateStars(12);

      //disappear
      this.sunX = '100vw';
      this.sunY = '-40vh';
      setTimeout(() => {
        this.sunStyle = 'opacity: 0';
        this.sunX = '-40vw';
        this.sunY = '40vh';
      }, 1500);
    }
  }

  // Generate stars
  calculateStars(num: number): IStars[] {
    return new Array(num).fill(0).map<IStars>(() => {
      const tmp: IStars = {
        name: 'star7',
        size: 10 * Math.random() + 9,
        delay: 5 * Math.random(),
        style: `left: ${100 * Math.random()}vw; top: ${20 * Math.random()}vh`,
      };
      return tmp;
    });
  }
}

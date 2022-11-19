import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-moon-sun',
  templateUrl: './moon-sun.component.html',
  styleUrls: ['./moon-sun.component.css'],
})
export class MoonSunComponent implements OnInit {
  constructor() {}

  @HostBinding('style.--moon-x.%') moonX: string = '20vw';
  @HostBinding('style.--moon-y.%') moonY: string = '20vh';
  @HostBinding('style.--sun-x.%') sunX: string = '-40vw';
  @HostBinding('style.--sun-y.%') sunY: string = '60vh';

  moonStyle: string = 'opacity: 1';
  sunStyle: string = 'opacity: 1';

  // @ViewChild('moon') private moonElement: ElementRef;
  // @ViewChild('sun') private sunElement: ElementRef;

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
      this.moonX = '100vw';
      this.moonY = '-40vh';
      setTimeout(() => {
        this.moonStyle = 'opacity: 0';
        this.moonX = '-40vw';
        this.moonY = '40vh';
      }, 1500);

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
}

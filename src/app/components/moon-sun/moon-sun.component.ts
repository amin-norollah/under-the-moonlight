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

  @HostBinding('style.--moon-x.%') moonX: string = '15vw';
  @HostBinding('style.--moon-y.%') moonY: string = '10vh';
  @HostBinding('style.--sun-x.%') sunX: string = '-45vw';
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
      this.moonX = '60vw';
      this.moonY = '-40vh';
      setTimeout(() => {
        this.moonStyle = 'opacity: 0';
        this.moonX = '-45vw';
        this.moonY = '60vh';
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
      this.sunX = '60vw';
      this.sunY = '-40vh';
      setTimeout(() => {
        this.sunStyle = 'opacity: 0';
        this.sunX = '-45vw';
        this.sunY = '60vh';
      }, 1500);
    }
  }
}

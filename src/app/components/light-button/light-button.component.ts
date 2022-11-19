import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.css'],
})
export class LightButtonComponent implements OnInit {
  constructor() {}

  isDay: boolean = false;
  isLock: boolean = false;
  isInfoVisible: boolean = false;

  @HostBinding('style.--left.%') left: string = '0.5vw'; // Change it to any Number at any point
  @HostBinding('style.--font-color.%') fontColor: string = '#fff';
  @HostBinding('style.--border-color.%') borderColor: string = '#232052';
  @HostBinding('style.--back-color.%') backColor: string = '#35316b';
  @HostBinding('style.--ball-color.%') ballColor: string = '#fff';

  @Output() clickEvent = new EventEmitter<boolean>();

  textInfo: string = '!';
  mouseEnterStyle: string = '';

  ngOnInit(): void {}

  click() {
    if (this.isLock) return;

    if (this.isDay) {
      //going to night
      this.isDay = false;
      this.left = '0.5vw';
      this.fontColor = '#fff';
      this.borderColor = '#232052';
      this.backColor = '#35316b';
      this.ballColor = '#fff';
    } else {
      //going to day
      this.isDay = true;
      this.left = '4.5vw';
      this.fontColor = '#057a85';
      this.borderColor = '#057a85';
      this.backColor = '#26c6d5';
      this.ballColor = '#ffc400';
    }
    this.clickEvent.emit(this.isDay);

    //lock
    this.isLock = true;
    setTimeout(() => {
      this.isLock = false;
    }, 2500);
  }

  changeInfo(isEnter: boolean) {
    if (isEnter) {
      setTimeout(() => {
        if (this.isInfoVisible)
          this.textInfo =
            'Click the toggle to change day🌞 and night🌙. Also you can move the mouse to change the viewing angle😎.';
      }, 500);
      this.isInfoVisible = true;
      this.mouseEnterStyle = ' width: 28vw;  height: 4.2vw;';
    } else {
      this.isInfoVisible = false;
      this.textInfo = '!';
      this.mouseEnterStyle = '';
    }
  }
}

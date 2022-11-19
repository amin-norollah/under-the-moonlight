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

  @HostBinding('style.--left.%') left: string = '0.5vw'; // Change it to any Number at any point
  @HostBinding('style.--back-color.%') borderColor: string = '#232052';
  @HostBinding('style.--back-color.%') backColor: string = '#35316b';
  @HostBinding('style.--ball-color.%') ballColor: string = '#ffffff';

  @Output() clickEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

  click() {
    if (this.isDay) {
      //going to night
      this.isDay = false;
      this.left = '0.5vw';
      this.borderColor = '#232052';
      this.backColor = '#35316b';
      this.ballColor = '#ffffff';
    } else {
      //going to day
      this.isDay = true;
      this.left = '4.5vw';
      this.borderColor = '#057a85';
      this.backColor = '#26c6d5';
      this.ballColor = '#ffc400';
    }
    this.clickEvent.emit(this.isDay);
  }
}

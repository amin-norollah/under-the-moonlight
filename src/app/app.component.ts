import { Component, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { Functions } from './shared/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'under the moonlight';

  @HostBinding('style.--gradient-color-1.%') backColor: string = '#211a75';

  ////////////////////////////////////////////////////////
  // send propagated events
  mouseMoveEvent: Subject<any> = new Subject<any>();
  changeModeEvent: Subject<boolean> = new Subject<boolean>();

  mouseMove(event: any) {
    this.mouseMoveEvent.next(event);
  }

  //change day and night mode
  changeMode(isDay: boolean) {
    this.changeModeEvent.next(isDay);

    if (isDay) {
      this.backColor = '#82e6ff';
      //this.gradient2 = '#ffffcc';
    } else {
      this.backColor = '#211a75';
      // this.gradient2 = '#9dbdf5';
    }
  }
}

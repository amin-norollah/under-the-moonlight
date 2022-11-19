import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'under the moonlight';

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
  }
}

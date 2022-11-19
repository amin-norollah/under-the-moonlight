import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Functions } from 'src/app/shared/functions';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  constructor() {}

  mousePositionRatio: [number, number] = [0, 0];
  styleHouse: string = 'right: 6vw; bottom: 3vh';
  styleRock2: string = 'right: 5vw; bottom: 2vh';

  FST: string = 'fill:#@color; transition: fill 2s ease;';

  backlight: string = 'fill:#ffd24a;';
  fil37: string = 'fill:#130210';
  fil36: string = 'fill:#231C4B';
  fil2: string = 'fill:#2D0F3A';
  fil34: string = 'fill:#313E88';
  fil12: string = 'fill:#3D3673';
  fil24: string = 'fill:#3E2734';
  fil35: string = 'fill:#3F386D';
  fil16: string = 'fill:#431F38';
  fil5: string = 'fill:#454087';
  fil4: string = 'fill:#462956';
  fil23: string = 'fill:#4A2943';
  fil22: string = 'fill:#4E427B';
  fil29: string = 'fill:#512039';
  fil7: string = 'fill:#542636';
  fil32: string = 'fill:#623F7A';
  fil30: string = 'fill:#634773';
  fil13: string = 'fill:#654674';
  fil6: string = 'fill:#664678';
  fil14: string = 'fill:#682824';
  fil27: string = 'fill:#6A2A21';
  fil26: string = 'fill:#6D5493';
  fil20: string = 'fill:#6F70A1';
  fil31: string = 'fill:#715EB1';
  fil8: string = 'fill:#7A4455';
  fil15: string = 'fill:#7E6B97';
  fil17: string = 'fill:#8271C4';
  fil3: string = 'fill:#966692';
  fil18: string = 'fill:#967EC4';
  fil33: string = 'fill:#A2A3DE';
  fil9: string = 'fill:#A85547';
  fil10: string = 'fill:#A95647';
  fil11: string = 'fill:#D47847';
  curtain1: string = 'fill:#eb874d';
  fil28: string = 'fill:#FAAC00';

  grad_id0_from: string = 'stop-opacity:1; stop-color:#9B88D9';
  grad_id0_to: string = 'stop-opacity:1; stop-color:#AAC7DE';

  grad_id1_from: string = 'stop-opacity:1; stop-color:#9C95DA';
  grad_id1_to: string = 'stop-opacity:1; stop-color:#C2C7DD';

  ////////////////////////////////////////////////////////
  // receive propagated events
  @Input() mouseMoveEvent: Observable<void> | any;
  @Input() changeModeEvent: Observable<boolean> | any;

  private mouseMoveEventSubscription: Subscription | any;
  private changeModeEventSubscription: Subscription | any;

  ngOnInit() {
    this.mouseMoveEventSubscription = this.mouseMoveEvent.subscribe(
      (event: any) => this.mouseMove(event)
    );
    this.changeModeEventSubscription = this.changeModeEvent.subscribe(
      (isDay: boolean) => this.changeMode(isDay)
    );
  }

  ngOnDestroy() {
    this.mouseMoveEventSubscription.unsubscribe();
    this.changeModeEventSubscription.unsubscribe();
  }

  // main mouse move event handler
  mouseMove(event: any) {
    this.mousePositionRatio = [
      event.x / window.innerWidth,
      event.y / window.innerHeight,
    ];

    this.styleHouse = `right: 
    ${Functions.mapData(this.mousePositionRatio[0], 6, 7)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1, 4)}vh;`;

    this.styleRock2 = `right: 
    ${Functions.mapData(this.mousePositionRatio[0], 4, 7)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1, 3)}vh;`;
  }

  //change colors
  changeMode(isDay: boolean) {
    if (isDay) {
      //sunrise coming

      //backlight turn off after 3 seconds
      setTimeout(() => {
        this.backlight = this.FST.replace('@color', '000');
      }, 3000);
    } else {
      //sunset coming

      //backlight turn on after 3 seconds
      setTimeout(() => {
        this.backlight = this.FST.replace('@color', 'ffd24a');
      }, 3000);
    }
  }
}

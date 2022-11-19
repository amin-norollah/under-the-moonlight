import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Functions } from 'src/app/shared/functions';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
})
export class BackgroundComponent implements OnInit {
  constructor() {}

  mousePositionRatio: [number, number] = [0, 0];
  styleBack4: string = 'left: 10vw';
  styleBack3: string = '';
  styleBack2: string = '';
  styleTree: string = 'bottom: 12vh';
  styleFront: string = '';
  stylePond: string = 'left: 5vw; bottom: 7vh';
  styleRock1: string = 'left: 6vw; bottom: 6vh';

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

    this.styleBack4 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 13, 14)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 0.5, -2)}vh;`;

    this.styleBack3 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 0, 2)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 0.85, -2)}vh;`;

    this.styleBack2 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 0, 4)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1.25, -2)}vh;`;

    this.styleTree = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], -3, 1)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 16, 12)}vh;`;

    this.styleFront = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 0, -2)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], -1, 0)}vh;`;

    this.stylePond = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 5, 4)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 5, 7)}vh;`;

    this.styleRock1 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 7, 5)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 6, 8)}vh;`;
  }

  //change colors
  changeMode(isDay: boolean) {}
}

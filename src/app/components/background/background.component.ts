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
  styleTree: string = 'bottom: 7vw';
  styleFront: string = '';
  stylePond: string = 'left: 5vw; bottom: 3vw';
  styleRock1: string = 'left: 5vw; bottom: 2.5vw';

  FST: string = 'fill:#@color; transition: fill 2s ease;';

  back4: string = 'fill: #6271e0';
  back3: string = 'fill: #7588e1';
  back2: string = 'fill: #4557e0';
  back1: string = 'fill: #5f7bd8';
  tree1: string = 'fill: #271363';
  tree2: string = 'fill: #382082';
  front: string = 'fill: #5659c0';
  pond1: string = 'fill: #5659C0';
  pond2: string = 'fill: #16112A';
  pond3: string = 'fill: #081351';
  pond4: string = 'fill: #16112A';
  pond5: string = 'fill: #718EFF';
  pond6: string = 'fill: #ABB8FF';
  rock2: string = 'fill: #04020f';
  rock3: string = 'fill: #140d3d';
  rock4: string = 'fill: #2e207f';
  rock5: string = 'fill: #332a8e';
  rock6: string = 'fill: #7a75d1';

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
    ${Functions.mapData(this.mousePositionRatio[1], 0.5, -6)}vh;`;

    this.styleBack3 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], -1, 1)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 0.85, -4)}vh;`;

    this.styleBack2 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], -1, 2)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1.25, -2)}vh;`;

    this.styleTree = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], -3, 2.5)}vw;
    bottom: ${Functions.mapData(this.mousePositionRatio[1], 8, 5)}vw
    ;`;

    this.styleFront = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 0, -2)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], -1, 0)}vh;`;

    this.stylePond = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 5.2, 3.2)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 2, 4)}vw;`;

    this.styleRock1 = `left: 
    ${Functions.mapData(this.mousePositionRatio[0], 6, 2.5)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1.5, 4)}vw;`;
  }

  //change colors
  changeMode(isDay: boolean) {
    if (isDay) {
      this.back4 = this.FST.replace('@color', '81df3c');
      this.back3 = this.FST.replace('@color', 'a4e835');
      this.back2 = this.FST.replace('@color', '6de062');
      this.back1 = this.FST.replace('@color', 'abf992');
      this.tree1 = this.FST.replace('@color', '42b648');
      this.tree2 = this.FST.replace('@color', '059347');
      this.front = this.FST.replace('@color', '6de062');
      this.pond1 = this.FST.replace('@color', '6de062');
      this.pond2 = this.FST.replace('@color', '755802');
      this.pond3 = this.FST.replace('@color', '1396c2');
      this.pond4 = this.FST.replace('@color', '755802');
      this.pond5 = this.FST.replace('@color', 'adffa6');
      this.pond6 = this.FST.replace('@color', 'abd6ff');
      this.rock2 = this.FST.replace('@color', '2b2b2b');
      this.rock3 = this.FST.replace('@color', '757575');
      this.rock4 = this.FST.replace('@color', '333333');
      this.rock5 = this.FST.replace('@color', '3aab30');
      this.rock6 = this.FST.replace('@color', 'a5a5a5');
    } else {
      this.back4 = this.FST.replace('@color', '6271e0');
      this.back3 = this.FST.replace('@color', '7588e1');
      this.back2 = this.FST.replace('@color', '4557e0');
      this.back1 = this.FST.replace('@color', '5f7bd8');
      this.tree1 = this.FST.replace('@color', '271363');
      this.tree2 = this.FST.replace('@color', '382082');
      this.front = this.FST.replace('@color', '5659c0');
      this.pond1 = this.FST.replace('@color', '5659C0');
      this.pond2 = this.FST.replace('@color', '16112A');
      this.pond3 = this.FST.replace('@color', '081351');
      this.pond4 = this.FST.replace('@color', '16112A');
      this.pond5 = this.FST.replace('@color', '718EFF');
      this.pond6 = this.FST.replace('@color', 'ABB8FF');
      this.rock2 = this.FST.replace('@color', '04020f');
      this.rock3 = this.FST.replace('@color', '140d3d');
      this.rock4 = this.FST.replace('@color', '2e207f');
      this.rock5 = this.FST.replace('@color', '332a8e');
      this.rock6 = this.FST.replace('@color', '7a75d1');
    }
  }
}

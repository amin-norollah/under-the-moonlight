import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

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
    ${Functions.mapData(this.mousePositionRatio[1], 0, -1)}vh;`;
  }
}

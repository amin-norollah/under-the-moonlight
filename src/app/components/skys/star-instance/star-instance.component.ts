import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-instance',
  templateUrl: './star-instance.component.html',
  styleUrls: ['./star-instance.component.css'],
})
export class StarInstanceComponent implements OnInit {
  constructor() {}

  @Input() size: number = 20;
  @Input() delay: number = 3;

  @HostBinding('style.--delay') delayStar: string = '3s';

  widthStar: string = '';

  ngOnInit(): void {
    this.widthStar = `width: ${this.size}%`;
    this.delayStar = `${this.delay}s`;
  }
}

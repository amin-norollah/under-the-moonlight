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
  styleHouse: string = 'right: 3vw; bottom: 3vh';
  styleRock2: string = 'right: 3vw; bottom: 2vh';

  FST: string = 'fill:#@color; transition: fill 2s ease;';

  backlight: string = 'fill:#ffd24a;';
  fil37: string = 'fill:#130210';
  fil36: string = 'fill:#332a8e';
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
  fil39: string = 'fill:transparent;';
  curtain1: string = 'fill:#eb874d';
  fil28: string = 'fill:#FAAC00';

  rock1: string = 'fill:#151028';
  rock2: string = 'fill:#26217f';
  rock3: string = 'fill:#332a8e';
  rock4: string = 'fill:#7a75d1';

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
    ${Functions.mapData(this.mousePositionRatio[0], 3, 5.5)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1, 4)}vh;`;

    this.styleRock2 = `right: 
    ${Functions.mapData(this.mousePositionRatio[0], 0.5, 4.5)}vw;
    bottom: 
    ${Functions.mapData(this.mousePositionRatio[1], 1, 3)}vh;`;
  }

  //change colors
  changeMode(isDay: boolean) {
    if (isDay) {
      //sunrise coming
      this.fil37 = this.FST.replace('@color', '2b2b2b'); // = 'fill:#130210';
      this.fil36 = this.FST.replace('@color', '3aab30'); // = 'fill:#332a8e';
      this.fil2 = this.FST.replace('@color', '3a270f'); // = 'fill:#2D0F3A';
      this.fil34 = this.FST.replace('@color', '362a1e'); // = 'fill:#313E88';
      this.fil12 = this.FST.replace('@color', '3b2e21'); // = 'fill:#3D3673';

      this.fil24 = this.FST.replace('@color', '3e3527'); // = 'fill:#3E2734';
      this.fil35 = this.FST.replace('@color', '8b622f'); // = 'fill:#3F386D';
      this.fil16 = this.FST.replace('@color', '43331f'); // = 'fill:#431F38';
      this.fil5 = this.FST.replace('@color', '543c1f'); // = 'fill:#454087';
      this.fil4 = this.FST.replace('@color', '8b622f'); // = 'fill:#462956';
      this.fil23 = this.FST.replace('@color', '4a3729'); // = 'fill:#4A2943';
      this.fil22 = this.FST.replace('@color', '7b6242'); // = 'fill:#4E427B';

      this.fil29 = this.FST.replace('@color', '513c20'); // = 'fill:#512039';
      this.fil7 = this.FST.replace('@color', '543d26'); // = 'fill:#542636';
      this.fil32 = this.FST.replace('@color', '6a5b40'); // = 'fill:#623F7A';
      this.fil30 = this.FST.replace('@color', '736547'); // = 'fill:#634773';
      this.fil13 = this.FST.replace('@color', '8f704f'); // = 'fill:#654674';
      this.fil6 = this.FST.replace('@color', '785846'); // = 'fill:#664678';
      this.fil14 = this.FST.replace('@color', '604223'); // = 'fill:#682824';
      this.fil27 = this.FST.replace('@color', '6a2a21'); // = 'fill:#6A2A21';
      this.fil26 = this.FST.replace('@color', '937b54'); // = 'fill:#6D5493';
      this.fil20 = this.FST.replace('@color', '4f3b27'); // = 'fill:#6F70A1';

      this.fil31 = 'fill:transparent; transition: fill 2s ease;'; // = 'fill:#715EB1';
      this.fil8 = this.FST.replace('@color', '5c482d'); // = 'fill:#7A4455';
      this.fil15 = this.FST.replace('@color', '97836b'); // = 'fill:#7E6B97';
      this.fil17 = this.FST.replace('@color', '8f7961'); // = 'fill:#8271C4';
      this.fil3 = this.FST.replace('@color', '594225'); // = 'fill:#966692';
      this.fil18 = this.FST.replace('@color', 'a39480'); // = 'fill:#967EC4';

      this.fil33 = this.FST.replace('@color', 'a39480'); // = 'fill:#A2A3DE';
      this.fil9 = this.FST.replace('@color', '86453a'); // = 'fill:#A85547';
      this.fil10 = this.FST.replace('@color', '86453a'); // = 'fill:#A95647';
      this.fil11 = this.FST.replace('@color', 'a56543'); // = 'fill:#D47847';
      this.curtain1 = this.FST.replace('@color', 'a16948'); // = 'fill:#eb874d';
      this.fil28 = this.FST.replace('@color', 'cb8f0a'); // = 'fill:#FAAC00';
      this.fil39 = this.FST.replace('@color', '7a572c'); // = 'fill:#FAAC00';

      //gradients
      setTimeout(() => {
        this.grad_id0_from = 'stop-opacity:1; stop-color:#F2DC8C';
        this.grad_id0_to = 'stop-opacity:1; stop-color:#CCA264';

        this.grad_id1_from = 'stop-opacity:1; stop-color:#DDD1C2';
        this.grad_id1_to = 'stop-opacity:1; stop-color:#D0A969';
      }, 400);

      //rock2
      this.rock1 = this.FST.replace('@color', '333333');
      this.rock2 = this.FST.replace('@color', '757575');
      this.rock3 = this.FST.replace('@color', '3aab30');
      this.rock4 = this.FST.replace('@color', '9a9a9a');

      //backlight turn off after 3 seconds
      setTimeout(() => {
        this.backlight = this.FST.replace('@color', '231b17');
      }, 1000);
    } else {
      //sunset coming
      this.fil37 = this.FST.replace('@color', '130210'); // = 'fill:#130210';
      this.fil36 = this.FST.replace('@color', '332a8e'); // = 'fill:#332a8e';
      this.fil2 = this.FST.replace('@color', '2D0F3A'); // = 'fill:#2D0F3A';
      this.fil34 = this.FST.replace('@color', '313E88'); // = 'fill:#313E88';
      this.fil12 = this.FST.replace('@color', '3D3673'); // = 'fill:#3D3673';

      this.fil24 = this.FST.replace('@color', '3E2734'); // = 'fill:#3E2734';
      this.fil35 = this.FST.replace('@color', '3F386D'); // = 'fill:#3F386D';
      this.fil16 = this.FST.replace('@color', '431F38'); // = 'fill:#431F38';
      this.fil5 = this.FST.replace('@color', '454087'); // = 'fill:#454087';
      this.fil4 = this.FST.replace('@color', '462956'); // = 'fill:#462956';
      this.fil23 = this.FST.replace('@color', '4A2943'); // = 'fill:#4A2943';
      this.fil22 = this.FST.replace('@color', '4E427B'); // = 'fill:#4E427B';

      this.fil29 = this.FST.replace('@color', '512039'); // = 'fill:#512039';
      this.fil7 = this.FST.replace('@color', '542636'); // = 'fill:#542636';
      this.fil32 = this.FST.replace('@color', '623F7A'); // = 'fill:#623F7A';
      this.fil30 = this.FST.replace('@color', '634773'); // = 'fill:#634773';
      this.fil13 = this.FST.replace('@color', '654674'); // = 'fill:#654674';
      this.fil6 = this.FST.replace('@color', '664678'); // = 'fill:#664678';
      this.fil14 = this.FST.replace('@color', '682824'); // = 'fill:#682824';
      this.fil27 = this.FST.replace('@color', '6A2A21'); // = 'fill:#6A2A21';
      this.fil26 = this.FST.replace('@color', '6D5493'); // = 'fill:#6D5493';
      this.fil20 = this.FST.replace('@color', '6F70A1'); // = 'fill:#6F70A1';

      this.fil31 = this.FST.replace('@color', '715EB1'); // = 'fill:#715EB1';
      this.fil8 = this.FST.replace('@color', '7A4455'); // = 'fill:#7A4455';
      this.fil15 = this.FST.replace('@color', '7E6B97'); // = 'fill:#7E6B97';
      this.fil17 = this.FST.replace('@color', '8271C4'); // = 'fill:#8271C4';
      this.fil3 = this.FST.replace('@color', '966692'); // = 'fill:#966692';
      this.fil18 = this.FST.replace('@color', '967EC4'); // = 'fill:#967EC4';

      this.fil33 = this.FST.replace('@color', 'A2A3DE'); // = 'fill:#A2A3DE';
      this.fil9 = this.FST.replace('@color', 'A85547'); // = 'fill:#A85547';
      this.fil10 = this.FST.replace('@color', 'A95647'); // = 'fill:#A95647';
      this.fil11 = this.FST.replace('@color', 'D47847'); // = 'fill:#D47847';
      this.curtain1 = this.FST.replace('@color', 'eb874d'); // = 'fill:#eb874d';
      this.fil28 = this.FST.replace('@color', 'FAAC00'); // = 'fill:#FAAC00';
      this.fil39 = 'fill:transparent; transition: fill 2s ease;';

      //gradients
      setTimeout(() => {
        this.grad_id0_from = 'stop-opacity:1; stop-color:#9B88D9';
        this.grad_id0_to = 'stop-opacity:1; stop-color:#AAC7DE';

        this.grad_id1_from = 'stop-opacity:1; stop-color:#9C95DA';
        this.grad_id1_to = 'stop-opacity:1; stop-color:#C2C7DD';
      }, 400);

      //rock2
      this.rock1 = this.FST.replace('@color', '151028');
      this.rock2 = this.FST.replace('@color', '26217f');
      this.rock3 = this.FST.replace('@color', '332a8e');
      this.rock4 = this.FST.replace('@color', '7a75d1');

      //backlight turn on after 3 seconds
      setTimeout(() => {
        this.backlight =
          this.FST.replace('@color', 'ffd24a') +
          'box-shadow: 0px 0px 35px -2px rgba(255,162,0,1);';
      }, 1000);
    }
  }
}

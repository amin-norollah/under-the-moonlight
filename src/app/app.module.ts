import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { HouseComponent } from './components/house/house.component';
import { LightButtonComponent } from './components/light-button/light-button.component';
import { SkysComponent } from './components/skys/skys.component';
import { MoonInstanceComponent } from './components/skys/moon-instance/moon-instance.component';
import { SunInstanceComponent } from './components/skys/sun-instance/sun-instance.component';
import { StarInstanceComponent } from './components/skys/star-instance/star-instance.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HouseComponent,
    LightButtonComponent,
    SkysComponent,
    MoonInstanceComponent,
    SunInstanceComponent,
    StarInstanceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

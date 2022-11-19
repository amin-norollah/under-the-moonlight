import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { HouseComponent } from './components/house/house.component';
import { LightButtonComponent } from './components/light-button/light-button.component';
import { MoonSunComponent } from './components/moon-sun/moon-sun.component';
import { MoonInstanceComponent } from './components/moon-sun/moon-instance/moon-instance.component';
import { SunInstanceComponent } from './components/moon-sun/sun-instance/sun-instance.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HouseComponent,
    LightButtonComponent,
    MoonSunComponent,
    MoonInstanceComponent,
    SunInstanceComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { HouseComponent } from './components/house/house.component';
import { LightButtonComponent } from './components/light-button/light-button.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, HouseComponent, LightButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

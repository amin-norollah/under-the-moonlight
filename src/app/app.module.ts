import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { HouseComponent } from './components/house/house.component';
import { MoonComponent } from './components/moon/moon.component';
import { PondComponent } from './components/pond/pond.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    PondComponent,
    MoonComponent,
    HouseComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

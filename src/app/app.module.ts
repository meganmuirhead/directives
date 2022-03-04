import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortyComponent } from './components/morty/morty.component';
import { AtlasComponent } from './components/atlas/atlas.component';
import { LuciferComponent } from './components/lucifer/lucifer.component';
import { DandyComponent } from './components/dandy/dandy.component';
import { AkumaComponent } from './components/akuma/akuma.component';

@NgModule({
  declarations: [
    AppComponent,
    MortyComponent,
    AtlasComponent,
    LuciferComponent,
    DandyComponent,
    AkumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

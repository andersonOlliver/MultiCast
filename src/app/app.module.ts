import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JsonpModule} from "@angular/http";
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GridModule} from "@progress/kendo-angular-grid";
import { TrackComponent } from './track/track.component';
import { PlayerComponent } from './player/player.component';
import { TrackControlComponent } from './track/track-control/track-control.component';
import { TrackVisualizationComponent } from './track/track-visualization/track-visualization.component';
import {SparklineModule} from "@progress/kendo-angular-charts";

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    PlayerComponent,
    TrackControlComponent,
    TrackVisualizationComponent
  ],
  imports: [
    BrowserModule,

    // include the JSONP module so it can be used in the application
    JsonpModule,
    BrowserAnimationsModule,
    GridModule,
    SparklineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

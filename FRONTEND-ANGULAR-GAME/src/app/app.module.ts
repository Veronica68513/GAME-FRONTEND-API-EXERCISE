import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesListComponent } from './components/game-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    GameDetailsComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

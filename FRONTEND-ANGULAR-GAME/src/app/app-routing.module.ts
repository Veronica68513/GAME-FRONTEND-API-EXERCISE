import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/game-list/games-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AddGameComponent } from './components/add-game/add-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: GamesListComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'add', component: AddGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
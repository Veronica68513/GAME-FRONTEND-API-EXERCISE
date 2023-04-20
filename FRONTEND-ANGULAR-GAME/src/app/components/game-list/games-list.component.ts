import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games?: Game[];
  currentGame: Game = {};
  currentIndex = -1;
  name = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.retrieveGames();
  }

  retrieveGames(): void {
    this.gameService.getAll()
      .subscribe({
        next: (data) => {
          this.games = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveGames();
    this.currentGame = {};
    this.currentIndex = -1;
  }

  setActiveGame(game: Game, index: number): void {
    this.currentGame = game;
    this.currentIndex = index;
  }

  removeAllGames(): void {
    this.gameService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentGame = {};
    this.currentIndex = -1;

    this.gameService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.games = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
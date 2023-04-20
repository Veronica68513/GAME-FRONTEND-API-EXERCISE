import { Component } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {

  game: Game = {
    name: '',
    description: '',
    release:  new Date(),
    published: false
  };

  submitted = false;

  constructor(private gameService: GameService) { }

  saveGame(): void {
    const data = {
      name: this.game.name,
      release: this.game.release,
      description: this.game.description
    };

    this.gameService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newGame(): void {
    this.submitted = false;
    this.game = {
      name: '',
      description: '',
      release: new Date(),
      published: false
    };
  }

}
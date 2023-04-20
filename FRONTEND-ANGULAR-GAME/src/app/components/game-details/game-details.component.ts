import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit, OnChanges {

  @Input() viewMode = false;

  @Input() currentGame: Game = {
    name: '',
    description: '',
    release: new Date(),
    published: false
  };
  
  message = '';

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getGame(this.route.snapshot.params["id"]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onChange(event: any) {
    this.currentGame.release = event.target.value;
  };

  getGame(id: string): void {
    this.gameService.get(id)
      .subscribe({
        next: (data) => {
          this.currentGame = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentGame.name,
      description: this.currentGame.description,
      release: this.currentGame.release,
      published: status
    };

    this.message = '';

    this.gameService.update(this.currentGame.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentGame.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateGame(): void {
    this.message = '';

    this.gameService.update(this.currentGame.id, this.currentGame)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This game was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteGame(): void {
    this.gameService.delete(this.currentGame.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        error: (e) => console.error(e)
      });
  }

}
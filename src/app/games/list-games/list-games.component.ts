import { Component, OnInit, OnDestroy } from "@angular/core";
import { GamesService } from "../games.service";
import { IGame } from "../../store/state/game.state";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-games",
  templateUrl: "./list-games.component.html",
  styleUrls: ["./list-games.component.css"]
})
export class ListGamesComponent implements OnInit, OnDestroy {
  games: IGame[];
  getAllGamesSubscription: Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    this.getAllGamesSubscription = this.gamesService
      .getGames()
      .subscribe(result => (this.games = result));
  }

  ngOnDestroy() {
    if (this.getAllGamesSubscription) {
      this.getAllGamesSubscription.unsubscribe();
    }
  }
}

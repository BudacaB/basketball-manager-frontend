import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { CreateGame } from "../../store/actions/game.actions";
import { selectGame } from "../../store/selectors/game.selectors";
import { GamesService } from "../games.service";

@Component({
  selector: "app-game-starter",
  templateUrl: "./game-starter.component.html",
  styleUrls: ["./game-starter.component.css"]
})
export class GameStarterComponent implements OnInit {
  game$ = this._store.pipe(select(selectGame));
  gameName: string;
  @Input() selectedTeam: string;
  stateGame: any;

  constructor(
    // tslint:disable-next-line: variable-name
    private _store: Store<IAppState>,
    private gamesService: GamesService
  ) {}

  onKey(event: any) {
    this.gameName = event.target.value;
  }

  postGame() {
    return this.gamesService.postGame(this.stateGame).subscribe();
  }

  startGame() {
    const game = {
      name: this.gameName,
      team: this.selectedTeam
    };
    this._store.dispatch(new CreateGame(game));
    this.game$.subscribe(result => (this.stateGame = result));
    this.postGame();
  }

  ngOnInit() {}
}

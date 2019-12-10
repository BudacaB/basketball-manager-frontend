import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../store/state/app.state";
import { CreateGame } from "../store/actions/game.actions";
import { selectGame } from "../store/selectors/game.selectors";

@Component({
  selector: "app-game-starter",
  templateUrl: "./game-starter.component.html",
  styleUrls: ["./game-starter.component.css"]
})
export class GameStarterComponent implements OnInit {
  game$ = this._store.pipe(select(selectGame));
  gameName: string;
  @Input() selectedTeam: string;
  stateGameName: string;
  stateTeamName: string;

  // tslint:disable-next-line: variable-name
  constructor(private _store: Store<IAppState>) {}

  onKey(event: any) {
    this.gameName = event.target.value;
  }

  startGame() {
    const game = {
      gameName: this.gameName,
      teamName: this.selectedTeam
    };
    this._store.dispatch(new CreateGame(game));

    this.game$.subscribe(result => {
      this.stateGameName = result.gameName;
      this.stateTeamName = result.teamName;
    });
  }

  ngOnInit() {}
}

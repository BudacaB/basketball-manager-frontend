import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { CreateGame } from "../../store/actions/game.actions";
import { selectGame } from "../../store/selectors/game.selectors";
import { Subscription } from "rxjs";

@Component({
  selector: "app-game-starter",
  templateUrl: "./game-starter.component.html",
  styleUrls: ["./game-starter.component.css"]
})
export class GameStarterComponent implements OnInit, OnDestroy {
  game$ = this._store.pipe(select(selectGame));
  gameName: string;
  @Input() selectedTeam: string;
  stateGame: any;
  stateSubscription: Subscription;

  constructor(
    // tslint:disable-next-line: variable-name
    private _store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.stateSubscription = this.game$.subscribe(
      result => (this.stateGame = result)
    );
  }

  onKey(event: any) {
    this.gameName = event.target.value;
  }

  startGame() {
    const game = {
      name: this.gameName,
      team: this.selectedTeam
    };
    this._store.dispatch(new CreateGame(game));
  }

  ngOnDestroy() {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }
}

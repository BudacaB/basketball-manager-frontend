import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { createGame } from "./game-starter.actions";
import { GameState } from "./game-starter.reducer";

@Component({
  selector: "app-game-starter",
  templateUrl: "./game-starter.component.html",
  styleUrls: ["./game-starter.component.css"]
})
export class GameStarterComponent implements OnInit {
  createdGame$: Observable<GameState>;
  gameName: string;
  @Input() selectedTeam: string;

  constructor(private store: Store<{ createdGame: GameState }>) {
    this.createdGame$ = store.pipe(select("createdGame"));
  }

  onKey(event: any) {
    this.gameName = event.target.value;
  }

  startGame() {
    const game = {
      gameName: this.gameName,
      teamName: this.selectedTeam
    };
    this.store.dispatch(createGame({ game }));
    console.log(this.createdGame$);
  }

  ngOnInit() {}
}

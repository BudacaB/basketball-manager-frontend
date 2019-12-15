import { RouterReducerState } from "@ngrx/router-store";
import { IGameState } from "./game.state";

export interface IAppState {
  // router?: RouterReducerState; TODO: learn what this does
  game: IGameState;
}

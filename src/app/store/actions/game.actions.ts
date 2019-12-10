import { Action } from "@ngrx/store";
import { IGame } from "../state/game.state";

export enum EGameActions {
  CreateGame = "[Game] Create-Game"
}

export class CreateGame implements Action {
  public readonly type = EGameActions.CreateGame;
  constructor(public payload: IGame) {}
}

export type GameAction = CreateGame;

import { createReducer, on } from "@ngrx/store";
import { createGame } from "./game-starter.actions";

export interface GameState {
  gameName: string;
  teamName: string;
}

export const initialState: GameState = {
  gameName: "",
  teamName: ""
};

// tslint:disable-next-line: variable-name
const _gameReducer = createReducer(
  initialState,
  on(createGame, (state, { game }) => ({
    ...state,
    gameName: game.gameName,
    teamName: game.teamName
  }))
);

export function gameReducer(state, action) {
  return _gameReducer(state, action);
}

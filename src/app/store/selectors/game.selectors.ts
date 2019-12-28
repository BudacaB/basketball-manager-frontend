import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IGameState } from "../state/game.state";

const gameState = (state: IAppState) => state.game;

export const selectGame = createSelector(
  gameState,
  (state: IGameState) => state.game
);

import { createAction, props } from "@ngrx/store";
import { GameState } from "./game-starter.reducer";

export const createGame = createAction(
  "[Game-Starter Component] Create-Game",
  props<{ game: GameState }>()
);

import { GameAction, EGameActions } from "../actions/game.actions";
import { initialGameState, IGameState } from "../state/game.state";

export const gameReducers = (
  state = initialGameState,
  action: GameAction
): IGameState => {
  switch (action.type) {
    case EGameActions.CreateGame: {
      return {
        ...state,
        game: action.payload
      };
    }
    default:
      return state;
  }
};

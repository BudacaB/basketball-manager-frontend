export interface IGame {
  name: string;
  team: string;
}

export interface IGameState {
  game: IGame;
}

export const initialGameState: IGameState = {
  game: null
};

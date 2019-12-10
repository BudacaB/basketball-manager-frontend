export interface IGame {
  gameName: string;
  teamName: string;
}

export interface IGameState {
  game: IGame;
}

export const initialGameState: IGameState = {
  game: null
};

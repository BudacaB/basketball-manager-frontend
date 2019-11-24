export class Player {
  firstName: string;
  lastName: string;
  position: PlayerPosition;
  age: number;
  height: number;
  weight: number;
  college: string;
  salary: number;
  stamina: number;
  speed: number;
  strength: number;
  injured: boolean;
  team: string;
  playing: boolean;
  photoURL: string;
}

export enum PlayerPosition {
  PG = "Point Guard",
  SG = "Shooting Guard",
  SF = "Small Forward",
  PF = "Power Forward",
  C = "Center"
}

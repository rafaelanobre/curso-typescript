export type Game = {
  id: number;
  title: string;
  platform: string;
}

export type GameCreation = Omit<Game, "id">
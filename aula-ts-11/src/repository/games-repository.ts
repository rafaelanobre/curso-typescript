import { connection } from "../database/database-connection";
import { Game, GameCreation } from "../protocols/game-protocol";

const games: Game[] = [];

async function getGames() {
  const dbGames = await connection.query<Game[]>(`SELECT * FROM games`)
  return dbGames.rows;
}

async function createGame(game: GameCreation) {
  const {title, platform} = game;
  const dbGames = await connection.query<GameCreation>(`
    INSERT INTO games (title, platform)
    VALUES ($1,$2)
    RETURNING *`,
    [title, platform])
  return dbGames.rows[0];
}

async function getGameByTitleAndPlatform(game: GameCreation): Promise<Game | null> {
  const dbGames = await connection.query<Game>(`
    SELECT * FROM games WHERE title=$1 AND platform=$2
  `, [game.title, game.platform])
  if (dbGames.rowCount > 0) {
    return dbGames.rows[0];
  }
  return;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;
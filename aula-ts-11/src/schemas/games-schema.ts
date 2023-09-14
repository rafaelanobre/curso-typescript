import Joi from "joi";
import { GameCreation } from "protocols/game-protocol";

export const gameSchema = Joi.object<GameCreation>({
    title: Joi.string().required(),
    platform: Joi.string().required()
})
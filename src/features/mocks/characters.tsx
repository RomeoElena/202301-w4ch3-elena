import { Character } from "../models/character";
import { Advisor } from "../models/advisor";
import { King } from "../models/king";

export const characters: Character[] = [
  new King("Joffrey", "Baratheon", 30, 10),
];

characters.push(new Advisor("Tyrion", "Lannister", 44, characters[2].name));

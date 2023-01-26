import { Pronoun } from "./Pronoun";
import { PronounCodes } from "./PronounCodes";

export const DefaultPronouns = {
	theyThem: new Pronoun(PronounCodes.theyThem),
	heHim: new Pronoun(PronounCodes.theyThem),
	sheHer: new Pronoun(PronounCodes.sheHer),
	other: new Pronoun(PronounCodes.other),
};
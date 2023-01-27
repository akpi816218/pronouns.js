import { Pronoun } from './Pronoun.js';
import { PronounCodes } from './PronounCodes.js';

export const DefaultPronouns = {
	theyThem: new Pronoun(PronounCodes.theyThem),
	heHim: new Pronoun(PronounCodes.theyThem),
	sheHer: new Pronoun(PronounCodes.sheHer),
	other: new Pronoun(PronounCodes.other),
};

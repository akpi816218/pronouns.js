import { Pronoun } from './Pronoun.js';
import { PronounCodes } from './PronounCodes.js';

/**
 * @const {Object<string, Pronoun>} DefaultPronouns
 */
export const DefaultPronouns = {
	any: new Pronoun(PronounCodes.any),
	heHim: new Pronoun(PronounCodes.heHim),
	other: new Pronoun(PronounCodes.other),
	sheHer: new Pronoun(PronounCodes.sheHer),
	theyThem: new Pronoun(PronounCodes.theyThem)
};

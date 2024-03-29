/* eslint-disable @typescript-eslint/no-namespace */
import { Pronoun } from './Pronoun.js';
import { PronounCodes } from './PronounCodes.js';

/**
 * @namespace DefaultPronouns
 * @description The most common pronouns
 * @example
 * new Pronoun(DefaultPronouns.theyThem)
 * @readonly
 * @property {Pronoun} any - The pronoun "any"
 * @property {Pronoun} heHim - The pronoun "he/him"
 * @property {Pronoun} other - The pronoun "other"
 * @property {Pronoun} sheHer - The pronoun "she/her"
 * @property {Pronoun} theyThem - The pronoun "they/them"
 */
export namespace DefaultPronouns {
	export const any = new Pronoun(PronounCodes.any);
	export const heHim = new Pronoun(PronounCodes.heHim);
	export const other = new Pronoun(PronounCodes.other);
	export const sheHer = new Pronoun(PronounCodes.sheHer);
	export const theyThem = new Pronoun(PronounCodes.theyThem);
}

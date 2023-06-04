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
export var DefaultPronouns;
(function (DefaultPronouns) {
    DefaultPronouns.any = new Pronoun(PronounCodes.any);
    DefaultPronouns.heHim = new Pronoun(PronounCodes.heHim);
    DefaultPronouns.other = new Pronoun(PronounCodes.other);
    DefaultPronouns.sheHer = new Pronoun(PronounCodes.sheHer);
    DefaultPronouns.theyThem = new Pronoun(PronounCodes.theyThem);
})(DefaultPronouns || (DefaultPronouns = {}));

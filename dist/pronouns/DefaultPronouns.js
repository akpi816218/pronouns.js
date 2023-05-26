/* eslint-disable @typescript-eslint/no-namespace */
import { Pronoun } from './Pronoun.js';
import { PronounCodes } from './PronounCodes.js';
/**
 * @namespace DefaultPronouns
 * @property {Pronoun} any - The pronoun "any"
 * @property {Pronoun} heHim - The pronoun "he/him"
 * @property {Pronoun} other - The pronoun "other"
 * @property {Pronoun} sheHer - The pronoun "she/her"
 * @property {Pronoun} theyThem - The pronoun "they/them"
 * @readonly
 */
export var DefaultPronouns;
(function (DefaultPronouns) {
    any: new Pronoun(PronounCodes.any);
    heHim: new Pronoun(PronounCodes.heHim);
    other: new Pronoun(PronounCodes.other);
    sheHer: new Pronoun(PronounCodes.sheHer);
    theyThem: new Pronoun(PronounCodes.theyThem);
})(DefaultPronouns || (DefaultPronouns = {}));

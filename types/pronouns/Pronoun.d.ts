import { PronounCode, PronounObject, PronounValue } from './Util.js';
/**
 * A class representing one's pronouns
 * @class Pronoun
 */
export declare class Pronoun {
	code: PronounCode;
	custom: boolean;
	value: PronounValue;
	/**
	 * Create a new Pronoun
	 * @constructor
	 * @param {PronounCode} code - A code describing the pronoun
	 * @param {PronounValue} [value] - A custom PronounValue
	 */
	constructor(code: PronounCode, value?: PronounValue);
	/**
	 * Create a new Pronoun from a PronounObject
	 * @static
	 * @param {PronounObject} pronounobject - The PronounObject to use
	 * @returns {Pronoun}
	 */
	static fromJSON(pronounobject: PronounObject): Pronoun;
	/**
	 * Serialize this Pronoun to a PronounObject
	 * @returns {PronounObject}
	 */
	toJSON(): PronounObject;
	/**
	 * Get a user-readable string representation of this Pronoun
	 * @returns {string}
	 */
	toString(): string;
}

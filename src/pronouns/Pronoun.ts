import { PronounObject, PronounValue } from './Util.js';
import { PronounCodes } from './PronounCodes.js';

/**
 * A class representing one's pronouns
 * @class Pronoun
 */
export class Pronoun {
	code: PronounCodes;
	custom: boolean;
	value: PronounValue;

	/**
	 *
	 * @param {PronounCodes} code - A code describing the pronoun
	 * @param {PronounValue} value - A custom PronounValue
	 */
	constructor(code: PronounCodes, value?: PronounValue) {
		this.code = code;
		if (value && this.code != PronounCodes.other)
			throw new Error(
				"Cannot accept 'value' parameter because 'code' parameter is not equal to 'PronounCodes.other'"
			);
		else {
			this.value = value || this.code;
		}
		this.custom = !!value;
	}

	/**
	 * Create a new Pronoun from a PronounObject
	 * @param {PronounObject} pronounobject - The PronounObject to use
	 * @returns {Pronoun}
	 */
	static fromJSON(pronounobject: PronounObject) {
		if (!pronounobject.custom) return new Pronoun(pronounobject.code);
		else if (pronounobject.code == PronounCodes.other)
			return new Pronoun(pronounobject.code, pronounobject.value);
		else throw new Error('Invalid JSON object for Pronoun class');
	}

	/**
	 * Serialize this Pronoun to a PronounObject
	 * @returns {PronounObject}
	 */
	toJSON(): PronounObject {
		return {
			code: this.code,
			custom: this.custom,
			value: this.value
		};
	}

	/**
	 * Get a user-readable string representation of this Pronoun
	 * @returns {string}
	 */
	toString(): string {
		if (this.custom) return this.value.slice(14);
		else return this.value;
	}
}

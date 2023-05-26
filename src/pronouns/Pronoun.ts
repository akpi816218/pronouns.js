/* eslint-disable indent */
import { PronounCode, PronounObject, PronounValue } from './Util.js';
import { PronounCodes } from './PronounCodes.js';

/**
 * A class representing one's pronouns
 * @class Pronoun
 */
export class Pronoun {
	/**
	 * @property {PronounCode} code - The code for this Pronoun
	 */
	code: PronounCode;
	/**
	 * @property {boolean} custom - Whether or not this Pronoun is custom
	 */
	custom: boolean;
	/**
	 * @property {PronounValue} value - The value for this Pronoun
	 */
	value: PronounValue;

	/**
	 * Create a new Pronoun
	 * @constructor
	 * @param {PronounCode} code - A code describing the pronoun
	 * @param {PronounValue} [value] - A custom PronounValue
	 */
	constructor(code: PronounCode, value?: PronounValue) {
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
	 * @static
	 * @param {PronounObject} pronounobject - The PronounObject to use
	 * @returns {Pronoun}
	 */
	static fromJSON(pronounobject: PronounObject): Pronoun {
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
		return this.custom
			? {
					code: this.code,
					custom: this.custom,
					value: this.value
			  }
			: {
					code: this.code,
					custom: this.custom
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

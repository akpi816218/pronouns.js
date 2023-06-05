/* eslint-disable indent */
import { PronounCode, PronounObject, PronounValue } from './Util.js';
import { PronounCodes } from './PronounCodes.js';

/**
 * A class representing one's pronouns
 * @class Pronoun
 */
export class Pronoun {
	code: PronounCode;
	custom: boolean;
	value: PronounValue;

	/**
	 * Create a new Pronoun
	 * @constructor
	 * @param {PronounCode} code - A code describing the pronoun
	 * @param {PronounValue} [value] - A custom PronounValue
	 */
	constructor(code: PronounCode, value?: PronounValue) {
		/**
		 * The code of this Pronoun
		 * @readonly
		 * @property {PronounCode} code
		 */
		this.code = code;
		if (value && this.code != PronounCodes.other)
			throw new Error(
				"Cannot accept 'value' parameter because 'code' parameter is not equal to 'PronounCodes.other'"
			);
		else {
			/**
			 * The value of this Pronoun
			 * @readonly
			 * @property {PronounValue} value
			 */
			this.value = value || this.code;
		}
		/**
		 * Whether this Pronoun is custom
		 * @readonly
		 * @property {boolean} custom
		 */
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
					custom: true,
					value: this.value
			  }
			: {
					code: this.code,
					custom: false
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

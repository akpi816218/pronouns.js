import { GenderBitField, GenderObject, isGenderObject, isValidGenderBitField } from './Util.js';
import { GenderCodes } from './GenderCodes.js';

/**
 * A class representing one's gender(s)
 * @class Gender
*/
export class Gender {
	bits: GenderCodes[];
	atBirth: GenderCodes.afab | GenderCodes.amab;
	agender: boolean;
	cisgender: boolean;
	demigender: boolean;
	female: boolean;
	genderfluid: boolean;
	male: boolean;
	nonbinary: boolean;
	polygender: boolean;
	queer: boolean;
	transgender: boolean;

	/**
	 * Create a Gender
	 * @constructor
	 * @param {...GenderBitField} bits - The GenderBitField to use
	*/
	constructor(...bits: GenderBitField) {
		if (!isValidGenderBitField(bits)) throw new Error('Invalid GenderBitField');

		/**
		 * The GenderBitField of this Gender
		 * @type {GenderBitField}
		*/
		this.bits = bits;

		/**
		 * Assigned gender at birth
		 * @type {GenderCodes.afab | GenderCodes.amab}
		 */
		this.atBirth = bits.includes(GenderCodes.amab)
			? GenderCodes.amab
			: GenderCodes.afab;

		/**
		 * Whether the person identifies as agender
		 * @type {boolean}
		 */
		this.agender = bits.includes(GenderCodes.agender);

		/**
		 * Whether the person identifies as cisgender
		 * @type {boolean}
		 */
		this.cisgender = bits.includes(GenderCodes.cisgender);

		/**
		 * Whether the person identifies as demigender
		 * @type {boolean}
		 */
		this.demigender = bits.includes(GenderCodes.demigender);

		/**
		 * Whether the person identifies as female
		 * @type {boolean}
		 */
		this.female = bits.includes(GenderCodes.female);

		/**
		 * Whether the person identifies as genderfluid
		 * @type {boolean}
		 */
		this.genderfluid = bits.includes(GenderCodes.genderfluid);

		/**
		 * Whether the person identifies as male
		 * @type {boolean}
		 */
		this.male = bits.includes(GenderCodes.male);

		/**
		 * Whether the person identifies as nonbinary
		 * @type {boolean}
		 */
		this.nonbinary = bits.includes(GenderCodes.nonbinary);

		/**
		 * Whether the person identifies as polygender
		 * @type {boolean}
		 */
		this.polygender = bits.includes(GenderCodes.polygender);

		/**
		 * Whether the person identifies as genderqueer
		 * @type {boolean}
		 */
		this.queer = bits.includes(GenderCodes.queer);

		/**
		 * Whether the person identifies as transgender
		 * @type {boolean}
		 */
		this.transgender = bits.includes(GenderCodes.transgender);
	}


	/**
	 * Create a new Gender from a GenderObject
	 * @param {GenderObject} object - The GenderObject to use
	 * @returns {Gender}
	*/
	static fromJSON(object: GenderObject): Gender {
		if (isGenderObject(object)) return new Gender(...object.bits);
		else throw new Error('Invalid GenderObject');
	}


	/**
	 * Serialize this Gender to a GenderObject
	 * @returns {GenderObject}
	 */
	toJSON(): GenderObject {
		return {
			bits: this.bits
		};
	}
}

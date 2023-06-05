import { GenderCodes } from './GenderCodes.js';

/**
 * A class representing one's gender(s)
 * @class Gender
 */
export class Gender {
	bits: GenderCodes[];
	agender: boolean;
	amab: boolean;
	afab: boolean;
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
	 * @param {...GenderCodes[]} bits - The GenderCodes to use
	 */
	constructor(...bits: GenderCodes[]) {
		/**
		 * The GenderCodes of this Gender
		 * @property {GenderBitField} bits
		 */
		this.bits = bits;

		/**
		 * Whether the person is AMAB
		 * @property {boolean} amab
		 */
		this.amab = bits.includes(GenderCodes.amab);

		/**
		 * Whether the person is AFAB
		 * @property {boolean} afab
		 */
		this.afab = bits.includes(GenderCodes.afab);

		/**
		 * Whether the person is agender
		 * @property {boolean} agender
		 */
		this.agender = bits.includes(GenderCodes.agender);

		/**
		 * Whether the person is cisgender
		 * @property {boolean} cisgender
		 */
		this.cisgender = bits.includes(GenderCodes.cisgender);

		/**
		 * Whether the person is demigender
		 * @property {boolean} demigender
		 */
		this.demigender = bits.includes(GenderCodes.demigender);

		/**
		 * Whether the person is female
		 * @property {boolean} female
		 */
		this.female = bits.includes(GenderCodes.female);

		/**
		 * Whether the person is genderfluid
		 * @property {boolean} genderfluid
		 */
		this.genderfluid = bits.includes(GenderCodes.genderfluid);

		/**
		 * Whether the person is male
		 * @property {boolean} male
		 */
		this.male = bits.includes(GenderCodes.male);

		/**
		 * Whether the person is nonbinary
		 * @property {boolean} nonbinary
		 */
		this.nonbinary = bits.includes(GenderCodes.nonbinary);

		/**
		 * Whether the person is polygender
		 * @property {boolean} polygender
		 */
		this.polygender = bits.includes(GenderCodes.polygender);

		/**
		 * Whether the person is genderqueer
		 * @property {boolean} queer
		 */
		this.queer = bits.includes(GenderCodes.queer);

		/**
		 * Whether the person is transgender
		 * @property {boolean} transgender
		 */
		this.transgender = bits.includes(GenderCodes.transgender);
	}

	/**
	 * Create a new Gender from a GenderObject
	 * @static
	 * @param {{ bits: GenderCodes[] }} object - The GenderObject to use
	 * @returns {Gender}
	 */
	static fromJSON(object: { bits: GenderCodes[] }): Gender {
		return new Gender(...object.bits);
	}

	/**
	 * Serialize this Gender to a GenderObject
	 * @returns {{ bits: GenderCodes[] }}
	 */
	toJSON(): { bits: GenderCodes[] } {
		return {
			bits: this.bits
		};
	}
}

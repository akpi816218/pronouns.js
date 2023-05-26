import { GenderCodes } from './GenderCodes.js';
/**
 * A class representing one's gender(s)
 * @class Gender
 */
export class Gender {
    bits;
    agender;
    amab;
    afab;
    cisgender;
    demigender;
    female;
    genderfluid;
    male;
    nonbinary;
    polygender;
    queer;
    transgender;
    /**
     * Create a Gender
     * @constructor
     * @param {...GenderCodes[]} bits - The GenderBitField to use
     */
    constructor(...bits) {
        /**
         * The GenderBitField of this Gender
         * @type {GenderBitField}
         */
        this.bits = bits;
        /**
         * Whether the person is AMAB
         * @type {boolean}
         */
        this.amab = bits.includes(GenderCodes.amab);
        /**
         * Whether the person was AFAB
         * @type {boolean}
         */
        this.afab = bits.includes(GenderCodes.afab);
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
     * @param {{ bits: GenderCodes[] }} object - The GenderObject to use
     * @returns {Gender}
     */
    static fromJSON(object) {
        return new Gender(...object.bits);
    }
    /**
     * Serialize this Gender to a GenderObject
     * @returns {{ bits: GenderCodes[] }}
     */
    toJSON() {
        return {
            bits: this.bits
        };
    }
}

import { GenderCodes } from './GenderCodes.js';
/**
 * A class representing one's gender(s)
 * @class Gender
 */
export declare class Gender {
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
     * @constructor
     * @param {...GenderCodes[]} bits - The GenderBitField to use
     */
    constructor(...bits: GenderCodes[]);
    /**
     * Create a new Gender from a GenderObject
     * @param {{ bits: GenderCodes[] }} object - The GenderObject to use
     * @returns {Gender}
     */
    static fromJSON(object: {
        bits: GenderCodes[];
    }): Gender;
    /**
     * Serialize this Gender to a GenderObject
     * @returns {{ bits: GenderCodes[] }}
     */
    toJSON(): {
        bits: GenderCodes[];
    };
}

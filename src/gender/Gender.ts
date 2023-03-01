import { GenderObject, isGenderObject } from './Util.js';
import { GenderCodes } from './GenderCodes.js';

export class Gender {
	bits: GenderCodes[];
	atBirth: GenderCodes.afab | GenderCodes.amab;
	agender: boolean;
	cisgender: boolean;
	demigender: boolean;
	female: boolean;
	genderfluid: boolean;
	male: boolean;
	polygender: boolean;
	queer: boolean;
	transgender: boolean;
	constructor(...bits: GenderCodes[]) {
		if (bits.length < 3) throw new Error('Must specify 3 bits');
		if (
			// eslint-disable-next-line no-extra-parens
			(!bits.includes(GenderCodes.afab) && !bits.includes(GenderCodes.amab)) ||
			// eslint-disable-next-line no-extra-parens
			(bits.includes(GenderCodes.afab) && bits.includes(GenderCodes.amab))
		)
			throw new Error('Bits do not include exactly one of AMAB or AFAB');
		this.bits = bits;
		this.atBirth = bits.includes(GenderCodes.amab)
			? GenderCodes.amab
			: GenderCodes.afab;
		this.agender = bits.includes(GenderCodes.agender);
		this.cisgender = bits.includes(GenderCodes.cisgender);
		this.demigender = bits.includes(GenderCodes.demigender);
		this.female = bits.includes(GenderCodes.female);
		this.genderfluid = bits.includes(GenderCodes.genderfluid);
		this.male = bits.includes(GenderCodes.male);
		this.polygender = bits.includes(GenderCodes.polygender);
		this.queer = bits.includes(GenderCodes.queer);
		this.transgender = bits.includes(GenderCodes.transgender);
	}
	fromJSON(o: GenderObject): Gender {
		if (isGenderObject(o)) return new Gender(...o.bits);
		else throw new Error('Invalid GenderObject');
	}
	toJSON(): GenderObject {
		return {
			bits: this.bits
		};
	}
}

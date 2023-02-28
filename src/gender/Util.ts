import { GenderCodes } from './GenderCodes.js';

export interface GenderObject {
	bits: GenderCodes[];
	atBirth: GenderCodes.afab | GenderCodes.amab;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderObject(o: any): o is GenderObject {
	return (
		typeof o === 'object' &&
		o.bits instanceof Array &&
		o.atBirth === (GenderCodes.amab || GenderCodes.afab) &&
		o.bits.every(
			(bit: unknown) =>
				typeof bit === 'string' && Object.keys(GenderCodes).includes(bit)
		) &&
		Object.entries(o).length === 2
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderValue(value: any): value is GenderCodes {
	return Object.values(GenderCodes).includes(value);
}

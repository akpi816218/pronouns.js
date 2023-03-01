import { GenderCodes } from './GenderCodes.js';

export interface GenderObject {
	bits: GenderCodes[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderObject(o: any): o is GenderObject {
	return (
		typeof o === 'object' &&
		Object.hasOwn(o, 'bits') &&
		o.bits instanceof Array &&
		o.bits.every(
			(bit: unknown) =>
				typeof bit === 'string' && Object.keys(GenderCodes).includes(bit)
		) &&
		Object.entries(o).length === 1
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderCode(value: any): value is GenderCodes {
	return Object.values(GenderCodes).includes(value);
}

export function areGenderCodes(values: unknown[]): values is GenderCodes[] {
	return values.every((value) => isGenderCode(value));
}

import { GenderCodes } from './GenderCodes.js';

/**
 * Interface for an Object describing a Gender
 * @interface GenderObject
 */
export interface GenderObject {
	bits: GenderBitField;
}

/**
 * A type for an Array of GenderCodes
 * @typedef {GenderCodes[]} GenderBitField
 */
export type GenderBitField = GenderCodes[];

/**
 * Determine if a value is a GenderObject
 * @function isGenderObject
 * @param {any} object - The value to check
 * @returns {object is GenderObject}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderObject(object: any): object is GenderObject {
	return (
		typeof object === 'object' &&
		object !== null &&
		Object.hasOwn(object, 'bits') &&
		isValidGenderBitField(object.bits) &&
		object.bits.every(
			(bit: unknown) =>
				typeof bit === 'string' && Object.keys(GenderCodes).includes(bit)
		) &&
		Object.entries(object).length === 1
	);
}

/**
 * Determine if a value is a GenderCode
 * @function isGenderCode
 * @param {any} value - The value to check
 * @returns {value is GenderCodes}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGenderCode(value: any): value is GenderCodes {
	return Object.values(GenderCodes).includes(value);
}

/**
 * Determine if a value is a GenderBitField
 * @function areGenderCodes
 * @param {unknown} values - The values to check
 * @returns {values is GenderCodes[]}
 */
export function areGenderCodes(values: unknown[]): values is GenderCodes[] {
	return values.every((value) => isGenderCode(value));
}

/**
 * Determine if the given Array is a valid GenderBitField
 * @function isValidGenderBitField
 * @param {unknown[]} values - The values to check
 * @returns {values is GenderBitField}
 */
export function isValidGenderBitField(
	values: unknown[]
): values is GenderBitField {
	return (
		values instanceof Array && values.every((value) => isGenderCode(value))
	);
}

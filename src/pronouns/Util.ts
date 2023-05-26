import { PronounCodes } from './PronounCodes.js';

/**
 * A type for a code that can be a PronounCode or a custom pronoun
 * @typedef {PronounCodes | string} PronounCode
 */
export type PronounCode =
	| PronounCodes
	| 'Any'
	| 'He/Him'
	| 'Other'
	| 'She/Her'
	| 'They/Them';

/**
 * A type for a value that can be a PronounCode or a custom pronoun
 * @typedef {PronounCode | string} PronounValue
 */
export type PronounValue = PronounCode | `CustomPronoun:${string}/${string}`;

/**
 * Interface for an Object describing a Pronoun
 * @interface PronounObject
 */
export interface PronounObject {
	code: PronounCode;
	custom: boolean;
	value?: PronounValue;
}

/**
 * Determine if a string is a PronounCode
 * @param {string} string - The string to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounCode(string: any): string is PronounCode {
	return Object.values(PronounCodes).includes(string);
}

/**
 * Determine if a string is a PronounValue
 * @param {string} string - The string to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounValue(string: any): string is PronounValue {
	return (
		Object.values(PronounCodes).includes(string) ||
		/^CustomPronoun\:[A-Z][a-z]+(\/[A-Z][a-z]+)+$/.test(string)
	);
}

/**
 * Determine if an object is a PronounObject
 * @param {any} object - The object to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounObject(object: any): object is PronounObject {
	return (
		typeof object === 'object' &&
		object !== null &&
		Object.hasOwn(object, 'code') &&
		Object.hasOwn(object, 'custom') &&
		isPronounValue(object.code) &&
		typeof object.custom === 'boolean' &&
		(object.custom === false ||
			// eslint-disable-next-line no-extra-parens
			(object.custom === true &&
				Object.hasOwn(object, 'value') &&
				isPronounValue(object.value))) &&
		Object.entries(object).length === (object.custom ? 3 : 2)
	);
}

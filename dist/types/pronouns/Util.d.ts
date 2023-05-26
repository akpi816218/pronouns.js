import { PronounCodes } from './PronounCodes.js';
/**
 * A type for a code that can be a PronounCode or a custom pronoun
 * @typedef {PronounCodes | string} PronounCode
 */
export type PronounCode = PronounCodes | 'Any' | 'He/Him' | 'Other' | 'She/Her' | 'They/Them';
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
export declare function isPronounCode(string: any): string is PronounCode;
/**
 * Determine if a string is a PronounValue
 * @param {string} string - The string to check
 * @returns {boolean}
 */
export declare function isPronounValue(string: any): string is PronounValue;
/**
 * Determine if an object is a PronounObject
 * @param {any} object - The object to check
 * @returns {boolean}
 */
export declare function isPronounObject(object: any): object is PronounObject;

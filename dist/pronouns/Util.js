import { PronounCodes } from './PronounCodes.js';
/**
 * Determine if a string is a PronounCode
 * @function isPronounCode
 * @param {string} string - The string to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounCode(string) {
    return Object.values(PronounCodes).includes(string);
}
/**
 * Determine if a string is a PronounValue
 * @function isPronounValue
 * @param {string} string - The string to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounValue(string) {
    return (Object.values(PronounCodes).includes(string) ||
        /^CustomPronoun\:[A-Z][a-z]+(\/[A-Z][a-z]+)+$/.test(string));
}
/**
 * Determine if an object is a PronounObject
 * @function isPronounObject
 * @param {any} object - The object to check
 * @returns {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounObject(object) {
    return (typeof object === 'object' &&
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
        Object.entries(object).length === (object.custom ? 3 : 2));
}

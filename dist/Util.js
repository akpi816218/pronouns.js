import { PronounCodes } from './PronounCodes.js';
export function isPronounValue(s) {
	return s in PronounCodes || /CustomPronoun\:[A-Z][a-z]+\/[A-Z][a-z]+/.test(s);
}
export function isPronounObject(o) {
	return 'prnnbjct' in o;
}

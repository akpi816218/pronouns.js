import { PronounCodes } from './PronounCodes.js';

export type PronounValue = PronounCodes | `CustomPronoun:${string}/${string}`;

export interface PronounObject {
	code: PronounCodes;
	prnnbjct: 'PronounObject';
	value?: PronounValue;
}

export function isPronounValue(s: string): s is PronounCodes {
	return s in PronounCodes || /^CustomPronoun\:[A-Z][a-z]+\/[A-Z][a-z]+$/.test(s);
}

export function isPronounObject(o: any): o is PronounObject {
	return 'prnnbjct' in o;
}

import { PronounCodes } from './PronounCodes.js';

export type PronounValue = PronounCodes | `CustomPronoun:${string}/${string}`;

export interface PronounObject {
	code: PronounCodes;
	custom: boolean;
	prnnbjct: 'PronounObject';
	value?: PronounValue;
}

export function isPronounValue(s: string): s is PronounCodes {
	return (
		['Any', 'He/Him', 'Other', 'She/Her', 'They/Them'].includes(s) ||
		/^CustomPronoun\:[A-Z][a-z]+(\/[A-Z][a-z]+)+$/.test(s)
	);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPronounObject(o: any): o is PronounObject {
	return 'prnnbjct' in o;
}

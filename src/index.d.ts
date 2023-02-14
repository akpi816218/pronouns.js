export enum PronounCodes {
	Any = 'Any',
	HeHim = 'He/Him',
	Other = 'Other',
	SheHer = 'She/Her',
	TheyThem = 'They/Them',
}

export type PronounValue = PronounCodes | `CustomPronoun:${string}/${string}`;

export interface PronounObject {
	code: PronounCodes;
	prnnbjct: 'PronounObject';
	value?: PronounValue;
}

export function isPronounObject(value: any): value is PronounObject;

export function isPronounValue(value: string): value is PronounCodes;

export class Pronoun {
	constructor(code: PronounCodes, value?: PronounValue);
	code: PronounCodes;
	custom: boolean;
	value?: PronounValue;
	toString(): string;
	toJSON(): PronounObject;
}

export const DefaultPronouns: Pronoun[];

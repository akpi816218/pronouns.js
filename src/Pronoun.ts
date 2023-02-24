import { PronounCodes } from './PronounCodes.js';
import { PronounValue, PronounObject } from './Util.js';

export class Pronoun {
	code: PronounCodes;
	custom: boolean;
	value: PronounValue;
	constructor(code: PronounCodes, value?: PronounValue) {
		this.code = code;
		if (value && this.code != PronounCodes.other)
			throw new Error(
				"Cannot accept 'value' parameter because 'code' parameter is not equal to 'PronounCodes.other'"
			);
		else {
			this.value = value || this.code;
		}
		this.custom = !!value;
	}
	static fromJSON(json: PronounObject) {
		if (!json.custom) return new Pronoun(json.code);
		else if ((json.code = PronounCodes.other))
			return new Pronoun(json.code, json.value);
		else throw new Error('Invalid JSON object for Pronoun class');
	}
	toJSON(): PronounObject {
		return {
			code: this.code,
			custom: this.custom,
			prnnbjct: 'PronounObject',
			value: this.value,
		};
	}
	toString() {
		if (this.custom) return this.value.slice(14);
		else return this.value;
	}
}

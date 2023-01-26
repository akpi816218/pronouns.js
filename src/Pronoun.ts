import { PronounCodes } from "./PronounCodes";
import { PronounValue, PronounObject } from "./Util";

export class Pronoun {
	code: PronounCodes;
	value: PronounValue;
	constructor(code: PronounCodes, value?: PronounValue) {
		this.code = code;
		if (value && this.code != PronounCodes.other)
			throw new Error(
				"Cannot accept 'value' parameter because 'code' parameter is not equal to 'PronounCodes.other'"
			);
		else this.value = value || this.code;
	}
	static fromJSON(json: PronounObject) {
		if (json.value) {
			return new Pronoun(json.code);
		} else return new Pronoun(json.code, json.value);
	}
	toJSON() {
		return {
			code: this.code,
			value: this.value,
		};
	}
	toString() {
		return this.value;
	}
}
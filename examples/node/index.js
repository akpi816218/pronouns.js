import { Pronoun, isPronounObject } from 'pronouns.js';

const obj = {
	code: 'They/Them',
	custom: false
};
const json = Pronoun.fromJSON(obj).toJSON();
// eslint-disable-next-line no-console
console.log(json);
// eslint-disable-next-line no-console
console.log(Pronoun.fromJSON(json).toString());

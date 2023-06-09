import { Pronoun, PronounCodes } from '../../dist/index';

const json = new Pronoun(PronounCodes.theyThem).toJSON();
// eslint-disable-next-line no-console
console.log(json);
// eslint-disable-next-line no-console
console.log(Pronoun.fromJSON(json).toString());

import { Pronoun, PronounCodes, PronounObject } from '../src/index.js';

const pronoun = new Pronoun(PronounCodes.other, 'CustomPronoun:Ze/Zir');
// OR: new Pronoun(PronounCodes.theyThem);

pronoun.toString(); // --> 'Ze/Zir' (not 'CustomPronoun:Ze/Zir')

const db = new Map<string, PronounObject>(); // Or just use some other database

db.set('<uid>', pronoun.toJSON());

db.get('<uid>'); // -> PronounObject

Pronoun.fromJSON(
	db.get('<uid>') || { code: PronounCodes.theyThem, custom: false }
); // --> Pronoun

import { Gender, GenderCodes, GenderObject } from '../src/index.js';

const gender = new Gender(
	GenderCodes.afab,
	GenderCodes.cisgender,
	GenderCodes.female
); // Or something like that

const db = new Map<string, GenderObject>(); // Or just use some other database

db.set('<uid>', gender.toJSON());

db.get('<uid>'); // -> GenderObject

Gender.fromJSON(
	db.get('<uid>') || {
		bits: [GenderCodes.afab, GenderCodes.cisgender, GenderCodes.female]
	}
); // --> Gender

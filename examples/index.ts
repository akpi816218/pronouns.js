import {
	DefaultPronouns,
	isPronounObject,
	isPronounValue,
	Pronoun,
} from '../src/index.js';
import { exit } from 'node:process';

const input = prompt('Enter a pronoun: ') || 'Other';
if (!isPronounValue(input)) {
	console.log('Invalid input');
	exit(1);
}
const pronoun = new Pronoun(input);
console.log(pronoun.toJSON(), pronoun.toString());

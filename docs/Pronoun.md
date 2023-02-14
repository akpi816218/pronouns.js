# `class Pronoun` Docs

Constructor:
`new Pronoun(code: PronounCodes, value?: PronounValue)`

---

Methods:

`static fromJSON(json: PronounObject): Pronound`:
Returns a `new Pronoun` created from the given object.

`toJSON(): object`:
Returns a `PronounObject` representing the `Pronoun`.

`toString(): string`:
Returns the string value of the `Pronoun` (i.e. `'They/Them' | 'She/Her' | 'CustomPronoun:It/It'`)

Properties:

`custom: boolean`:
Returns whether or not this is custom

# `class Pronoun` Docs

Constructor:
`new Pronoun(code: PronounCodes, value?: PronounValue)`

---

Methods:

`static fromJSON(json: PronounObject)`:
Returns a `new Pronoun` created from the given object.

`toJSON()`:
Returns a `PronounObject` representing the `Pronoun`.

`toString()`:
Returns the string value of the `Pronoun` (i.e. `'They/Them' | 'She/Her' | 'CustomPronoun:It/Its'`)

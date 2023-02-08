# Pronouns.js Docs

`DefaultPronouns`:
Returns an object of commonly used (not custom) `Pronoun`s.

`enum PronounCodes`:
Enum Members:

- heHim
- other
- sheHer
- theyThem

`type PronounValue`:
`'He/Him' | 'She/Her' | 'They/Them' | 'Other'`
In addition to these, any string that matches the following JavaScript regular expression will conform to this type: `/^CustomPronoun\:[A-Z][a-z]+\/[A-Z][a-z]+$/`

`isPronounValue(v): boolean`:
Returns whether a value is of type `PronounValue`.

interface `PronounObject`:
Properties:

```ts
code: PronounCodes;
prnnbjct: 'PronounObject';
value?: PronounValue;

```

`isPronounObject(v): boolean`:
Returns whether a value is a `PronounObject`.

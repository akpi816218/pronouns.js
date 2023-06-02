# pronouns.js

<div align="center"><img src="../files/pronouns.js_animated_banner.gif"></div>

## Classes

<dl>
<dt><a href="#Gender">Gender</a></dt>
<dd></dd>
<dt><a href="#Pronoun">Pronoun</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#DefaultPronouns">DefaultPronouns</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#isPronounCode">isPronounCode(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if a string is a PronounCode</p>
</dd>
<dt><a href="#isPronounValue">isPronounValue(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if a string is a PronounValue</p>
</dd>
<dt><a href="#isPronounObject">isPronounObject(object)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if an object is a PronounObject</p>
</dd>
</dl>

<a name="Gender"></a>

## Gender

**Kind**: global class

* [Gender](#Gender)
  * [new Gender()](#new_Gender_new)
  * _instance_
    * [.Gender](#Gender+Gender)
      * [new exports.Gender(...bits)](#new_Gender+Gender_new)
    * [.bits](#Gender+bits) : <code>GenderBitField</code>
    * [.amab](#Gender+amab) : <code>boolean</code>
    * [.afab](#Gender+afab) : <code>boolean</code>
    * [.agender](#Gender+agender) : <code>boolean</code>
    * [.cisgender](#Gender+cisgender) : <code>boolean</code>
    * [.demigender](#Gender+demigender) : <code>boolean</code>
    * [.female](#Gender+female) : <code>boolean</code>
    * [.genderfluid](#Gender+genderfluid) : <code>boolean</code>
    * [.male](#Gender+male) : <code>boolean</code>
    * [.nonbinary](#Gender+nonbinary) : <code>boolean</code>
    * [.polygender](#Gender+polygender) : <code>boolean</code>
    * [.queer](#Gender+queer) : <code>boolean</code>
    * [.transgender](#Gender+transgender) : <code>boolean</code>
    * [.toJSON()](#Gender+toJSON) ⇒ <code>Object</code>
  * _static_
    * [.fromJSON(object)](#Gender.fromJSON) ⇒ [<code>Gender</code>](#Gender)

<a name="new_Gender_new"></a>

### new Gender()

A class representing one's gender(s)

<a name="Gender+Gender"></a>

### gender.Gender

**Kind**: instance class of [<code>Gender</code>](#Gender)
<a name="new_Gender+Gender_new"></a>

#### new exports.Gender(...bits)

Create a Gender

| Param | Type | Description |
| --- | --- | --- |
| ...bits | [<code>Array.&lt;GenderCodes&gt;</code>](#GenderCodes) | The GenderBitField to use |

<a name="Gender+bits"></a>

### gender.bits : <code>GenderBitField</code>

The GenderBitField of this Gender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+amab"></a>

### gender.amab : <code>boolean</code>

Whether the person is AMAB

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+afab"></a>

### gender.afab : <code>boolean</code>

Whether the person was AFAB

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+agender"></a>

### gender.agender : <code>boolean</code>

Whether the person identifies as agender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+cisgender"></a>

### gender.cisgender : <code>boolean</code>

Whether the person identifies as cisgender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+demigender"></a>

### gender.demigender : <code>boolean</code>

Whether the person identifies as demigender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+female"></a>

### gender.female : <code>boolean</code>

Whether the person identifies as female

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+genderfluid"></a>

### gender.genderfluid : <code>boolean</code>

Whether the person identifies as genderfluid

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+male"></a>

### gender.male : <code>boolean</code>

Whether the person identifies as male

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+nonbinary"></a>

### gender.nonbinary : <code>boolean</code>

Whether the person identifies as nonbinary

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+polygender"></a>

### gender.polygender : <code>boolean</code>

Whether the person identifies as polygender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+queer"></a>

### gender.queer : <code>boolean</code>

Whether the person identifies as genderqueer

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+transgender"></a>

### gender.transgender : <code>boolean</code>

Whether the person identifies as transgender

**Kind**: instance property of [<code>Gender</code>](#Gender)
<a name="Gender+toJSON"></a>

### gender.toJSON() ⇒ <code>Object</code>

Serialize this Gender to a GenderObject

**Kind**: instance method of [<code>Gender</code>](#Gender)
<a name="Gender.fromJSON"></a>

### Gender.fromJSON(object) ⇒ [<code>Gender</code>](#Gender)

Create a new Gender from a GenderObject

**Kind**: static method of [<code>Gender</code>](#Gender)

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The GenderObject to use |

<a name="Pronoun"></a>

## Pronoun

**Kind**: global class

* [Pronoun](#Pronoun)
  * [new Pronoun()](#new_Pronoun_new)
  * _instance_
    * [.Pronoun](#Pronoun+Pronoun)
      * [new exports.Pronoun(code, [value])](#new_Pronoun+Pronoun_new)
    * [.code](#Pronoun+code)
    * [.custom](#Pronoun+custom)
    * [.value](#Pronoun+value)
    * [.toJSON()](#Pronoun+toJSON) ⇒ <code>PronounObject</code>
    * [.toString()](#Pronoun+toString) ⇒ <code>string</code>
  * _static_
    * [.fromJSON(pronounobject)](#Pronoun.fromJSON) ⇒ [<code>Pronoun</code>](#Pronoun)

<a name="new_Pronoun_new"></a>

### new Pronoun()

A class representing one's pronouns

<a name="Pronoun+Pronoun"></a>

### pronoun.Pronoun

**Kind**: instance class of [<code>Pronoun</code>](#Pronoun)
<a name="new_Pronoun+Pronoun_new"></a>

#### new exports.Pronoun(code, [value])

Create a new Pronoun

| Param | Type | Description |
| --- | --- | --- |
| code | <code>PronounCode</code> | A code describing the pronoun |
| [value] | <code>PronounValue</code> | A custom PronounValue |

<a name="Pronoun+code"></a>

### pronoun.code

**Kind**: instance property of [<code>Pronoun</code>](#Pronoun)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| code | <code>PronounCode</code> | The code for this Pronoun |

<a name="Pronoun+custom"></a>

### pronoun.custom

**Kind**: instance property of [<code>Pronoun</code>](#Pronoun)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| custom | <code>boolean</code> | Whether or not this Pronoun is custom |

<a name="Pronoun+value"></a>

### pronoun.value

**Kind**: instance property of [<code>Pronoun</code>](#Pronoun)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>PronounValue</code> | The value for this Pronoun |

<a name="Pronoun+toJSON"></a>

### pronoun.toJSON() ⇒ <code>PronounObject</code>

Serialize this Pronoun to a PronounObject

**Kind**: instance method of [<code>Pronoun</code>](#Pronoun)
<a name="Pronoun+toString"></a>

### pronoun.toString() ⇒ <code>string</code>

Get a user-readable string representation of this Pronoun

**Kind**: instance method of [<code>Pronoun</code>](#Pronoun)
<a name="Pronoun.fromJSON"></a>

### Pronoun.fromJSON(pronounobject) ⇒ [<code>Pronoun</code>](#Pronoun)

Create a new Pronoun from a PronounObject

**Kind**: static method of [<code>Pronoun</code>](#Pronoun)

| Param | Type | Description |
| --- | --- | --- |
| pronounobject | <code>PronounObject</code> | The PronounObject to use |

<a name="DefaultPronouns"></a>

## DefaultPronouns : <code>object</code>

**Kind**: global namespace
**Read only**: true
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| any | [<code>Pronoun</code>](#Pronoun) | The pronoun "any" |
| heHim | [<code>Pronoun</code>](#Pronoun) | The pronoun "he/him" |
| other | [<code>Pronoun</code>](#Pronoun) | The pronoun "other" |
| sheHer | [<code>Pronoun</code>](#Pronoun) | The pronoun "she/her" |
| theyThem | [<code>Pronoun</code>](#Pronoun) | The pronoun "they/them" |

<a name="GenderCodes"></a>

## GenderCodes : <code>enum</code>

Codes to denote gender identities

**Kind**: global enum
<a name="PronounCodes"></a>

## PronounCodes : <code>enum</code>

Codes to denote pronoun types

**Kind**: global enum
<a name="isPronounCode"></a>

## isPronounCode(string) ⇒ <code>boolean</code>

Determine if a string is a PronounCode

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to check |

<a name="isPronounValue"></a>

## isPronounValue(string) ⇒ <code>boolean</code>

Determine if a string is a PronounValue

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to check |

<a name="isPronounObject"></a>

## isPronounObject(object) ⇒ <code>boolean</code>

Determine if an object is a PronounObject

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| object | <code>any</code> | The object to check |

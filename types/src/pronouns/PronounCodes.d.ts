/**
 * Codes to denote pronoun types
 * @enum {string}
 * @readonly
 * @example
 * new Pronoun(PronounCodes.theyThem)
 */
export declare enum PronounCodes {
	/**
	 * Any pronouns
	 * @type {string}
	 */
	any = 'Any',
	/**
	 * He/Him
	 * @type {string}
	 */
	heHim = 'He/Him',
	/**
	 * Other (custom pronouns / not specified / not found here)
	 * @type {string}
	 */
	other = 'Other',
	/**
	 * She/Her
	 * @type {string}
	 */
	sheHer = 'She/Her',
	/**
	 * They/Them
	 * @type {string}
	 */
	theyThem = 'They/Them'
}

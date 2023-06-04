/* eslint-disable no-unused-vars */
/**
 * Codes to denote pronoun types
 * @enum {string}
 * @readonly
 * @example
 * new Pronoun(PronounCodes.theyThem)
 */
export var PronounCodes;
(function (PronounCodes) {
    // When changing this also change list in `type PronounCode` in `src/pronouns/Util.ts
    /**
     * Any pronouns
     * @type {string}
     */
    PronounCodes["any"] = "Any";
    /**
     * He/Him
     * @type {string}
     */
    PronounCodes["heHim"] = "He/Him";
    /**
     * Other (custom pronouns / not specified / not found here)
     * @type {string}
     */
    PronounCodes["other"] = "Other";
    /**
     * She/Her
     * @type {string}
     */
    PronounCodes["sheHer"] = "She/Her";
    /**
     * They/Them
     * @type {string}
     */
    PronounCodes["theyThem"] = "They/Them";
})(PronounCodes || (PronounCodes = {}));

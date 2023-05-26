/* eslint-disable no-unused-vars */
/**
 * Codes to denote pronoun types
 * @enum {string}
 */
export var PronounCodes;
(function (PronounCodes) {
    // When changing this also change list in `type PronounCode` in `src/pronouns/Util.ts
    PronounCodes["any"] = "Any";
    PronounCodes["heHim"] = "He/Him";
    PronounCodes["other"] = "Other";
    PronounCodes["sheHer"] = "She/Her";
    PronounCodes["theyThem"] = "They/Them";
})(PronounCodes || (PronounCodes = {}));

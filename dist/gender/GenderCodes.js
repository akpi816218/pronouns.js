/* eslint-disable no-unused-vars */
/**
 * Codes to denote gender identities
 * @enum {string}
 * @readonly
 * @example
 * new Gender(GenderCodes.afab, GenderCodes.cisgender)
 */
export var GenderCodes;
(function (GenderCodes) {
    /**
     * Assigned Female At Birth
     * @type {string}
     */
    GenderCodes["afab"] = "afab";
    /**
     * Agender
     * @type {string}
     */
    GenderCodes["agender"] = "agender";
    /**
     * Assigned Male At Birth
     * @type {string}
     */
    GenderCodes["amab"] = "amab";
    /**
     * Cisgender
     * @type {string}
     */
    GenderCodes["cisgender"] = "cisgender";
    /**
     * Demigender
     * @type {string}
     */
    GenderCodes["demigender"] = "demigender";
    /**
     * Female
     * @type {string}
     */
    GenderCodes["female"] = "female";
    /**
     * Genderfluid
     * @type {string}
     */
    GenderCodes["genderfluid"] = "genderfluid";
    /**
     * Male
     * @type {string}
     */
    GenderCodes["male"] = "male";
    /**
     * Nonbinary/Enby
     * @type {string}
     */
    GenderCodes["nonbinary"] = "nonbinary";
    /**
     * Other (not specified/not found here)
     * @type {string}
     */
    GenderCodes["other"] = "other";
    /**
     * Polygender
     * @type {string}
     */
    GenderCodes["polygender"] = "polygender";
    /**
     * Genderqueer
     * @type {string}
     */
    GenderCodes["queer"] = "queer";
    /**
     * Transgender
     * @type {string}
     */
    GenderCodes["transgender"] = "transgender";
})(GenderCodes || (GenderCodes = {}));

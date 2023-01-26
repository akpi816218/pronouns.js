import { PronounCodes } from "./PronounCodes";
export function isPronounValue(s) {
  return s in PronounCodes;
}
export function isPronounObject(o) {
  return "prnnbjct" in o;
}

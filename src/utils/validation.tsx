/**
 * Validation
 */

import Utils from ".";

/**
 * validation
 */
class Validation {
  static isExisty = (value: any) => value !== null && value !== undefined;
  static isEmpty = (value: any) => {
    if (Validation.isExisty(value)) {
      if (value.constructor.name === "Array") {
        return value.length === 0;
      } else if (value.constructor.name === "String") {
        return value.trim() === "";
      }
      return false;
    }
    return true;
  };
  static getDecimalCount = (value: any) =>
    (value.toString().split(".")[1] || "").length;
  static matchRegexp = (value: any, regexp: any) => {
    // const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
    return regexp.test(value);
  };
  static isDuplicate = (value: any, listValue: any) =>
    value &&
    listValue &&
    listValue.filter((v: any) => {
      if (v && value && v === value) return true;
      // check for duplicates of objects
      return false;
    }).lenght > 0;
  static IsMandatory = (value: any) => !Validation.isEmpty(value);
  static IsMandatoryWholeNumber = (value: any) =>
    !Validation.isEmpty(value) && value > 0;
  static MinLength = (value: any, minLength: number) =>
    Validation.isEmpty(value) || value.toString().length >= minLength;
  static MaxLength = (value: any, maxLength: number) =>
    Validation.isEmpty(value) || value.toString().length <= maxLength;
  static MinLengthArray = (value: any, minLength: number) =>
    Validation.isEmpty(value) || value.length >= minLength;
  static MaxLengthArray = (value: any, maxLength: number) =>
    Validation.isEmpty(value) || value.length <= maxLength;
  static MinValue = (value: any, minValue: number) =>
    Validation.isEmpty(value) ||
    (Validation.matchRegexp(value, Regex.DECIMAL) &&
      Utils.getFloatValue(value) >= Utils.getFloatValue(minValue));
  static MaxValue = (value: any, maxValue: number) =>
    Validation.isEmpty(value) ||
    (Validation.matchRegexp(value, Regex.DECIMAL) &&
      Utils.getFloatValue(value) <= Utils.getFloatValue(maxValue));
  static Alphanumeric = (value: any) =>
    Validation.isEmpty(value) ||
    Validation.matchRegexp(value, Regex.ALPHANUMERIC);
  static Alphabet = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.ALPHABHET);
  static Numeric = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.NUMERIC);
  static Decimal = (value: any, count: number) =>
    Validation.isEmpty(value) ||
    (Validation.matchRegexp(value, Regex.DECIMAL) &&
      Validation.getDecimalCount(value) <= count);
  static Email = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.EMAIL);
  static Pan = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.PAN);
  static Pincode = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.PINCODE);
  static Landline = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.LANDLINE);
  static MobileNo = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.MOBILENO);
  static GSTIN = (value: any) =>
    Validation.isEmpty(value) || Validation.matchRegexp(value, Regex.GSTIN);
}

const Regex = {
  ALPHANUMERIC: /^[a-zA-Z0-9()_\-/,.& /+]*$/,
  ALPHABHET: /^[a-zA-Z-,. ]*$/,
  NUMERIC: /^[-+]?[0-9]+$/,
  DECIMAL: /^[-+]?\d+(\.\d+)?$/,
  PINCODE: /^\d{6}$/,
  LANDLINE: /^[-+]?[0-9]+$/,
  MOBILENO: /^([0-9]){10}$/,
  PAN: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
  GSTIN: /^([0-9]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/,
  TIN: /^(?:\d{3}-\d{2}-\d{4})$/,
  EMAIL: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  YEAR: /^(18[0-9]\d|19[0-9]\d|20[0-9]\d|2099)$/,
  passsword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

export { Validation, Regex };

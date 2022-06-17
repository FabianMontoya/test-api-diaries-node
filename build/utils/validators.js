"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVisibility = exports.isWeather = exports.isString = void 0;
const enums_1 = require("../enums");
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};
exports.isString = isString;
const isWeather = (value) => {
    return Object.values(enums_1.Weather).includes(value);
};
exports.isWeather = isWeather;
const isVisibility = (value) => {
    return Object.values(enums_1.Visibility).includes(value);
};
exports.isVisibility = isVisibility;

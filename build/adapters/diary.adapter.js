"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = void 0;
const validators_1 = require("../utils/validators");
const parseComment = (commentFromRequest) => {
    if (!(0, validators_1.isString)(commentFromRequest)) {
        throw new Error('Invalid or missing comment.');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!(0, validators_1.isString)(dateFromRequest)) {
        throw new Error('Invalid or missing date.');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!(0, validators_1.isString)(weatherFromRequest) || !(0, validators_1.isWeather)(weatherFromRequest)) {
        throw new Error('Invalid or missing weather.');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!(0, validators_1.isString)(visibilityFromRequest) || !(0, validators_1.isVisibility)(visibilityFromRequest)) {
        throw new Error('Invalid or missing visibility.');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (entry) => {
    const newEntry = {
        comments: parseComment(entry.comments),
        date: parseDate(entry.date),
        weather: parseWeather(entry.date),
        visibility: parseVisibility(entry.date)
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;

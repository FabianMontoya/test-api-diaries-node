"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiaryEntry = exports.findById = exports.getDiariesWitOutSentiveInfo = exports.getDiaries = void 0;
const diaries_json_1 = __importDefault(require("../db/diaries.json"));
// Se hace la aserción de tipo para que TS no llore y parsee el objeto correctamente (Se debe evitar)
const diaries = diaries_json_1.default;
const getDiaries = () => diaries;
exports.getDiaries = getDiaries;
const getDiariesWitOutSentiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    }); // Debemos hacer el map pues TS no elimina data, solo lo transforma para el typeo
};
exports.getDiariesWitOutSentiveInfo = getDiariesWitOutSentiveInfo;
const findById = (id) => {
    const diary = diaries.find((diary) => diary.id === id);
    if (diary != null) {
        const { comments } = diary, nonSensitiveInfo = __rest(diary, ["comments"]);
        return nonSensitiveInfo;
    }
    return undefined;
};
exports.findById = findById;
const addDiaryEntry = (entry) => {
    const newEntry = Object.assign({ id: Math.max(...diaries_json_1.default.map((diary) => diary.id)) + 1 }, entry);
    diaries_json_1.default.push(newEntry);
    return newEntry;
};
exports.addDiaryEntry = addDiaryEntry;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const diary_adapter_1 = require("../adapters/diary.adapter");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('getDiariesWitOutSentiveInfo');
    res.json(diaryServices.getDiariesWitOutSentiveInfo());
});
router.get('/all', (_req, res) => {
    console.log('getDiariesWitAllInfo');
    res.json(diaryServices.getDiaries());
});
router.get('/:id', (req, res) => {
    console.log('getDiaries', req.params.id);
    const diary = diaryServices.findById(Number(req.params.id));
    if (diary != null) {
        res.json(diary);
    }
    else {
        res.status(404).json({ error: true, message: `Diary with id ${req.params.id} not found` });
    }
});
router.post('/', (req, res) => {
    try {
        const entry = (0, diary_adapter_1.toNewDiaryEntry)(req.body);
        const newEntry = diaryServices.addDiaryEntry(entry);
        res.status(201).json(newEntry); // 200 is for OK, 201 is for Created
    }
    catch (e) {
        res.status(400).json({ error: true, message: e.message });
    }
});
exports.default = router;

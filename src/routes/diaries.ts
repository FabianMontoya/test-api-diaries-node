import express from 'express';
import * as diaryServices from '../services/diaryServices';
import { toNewDiaryEntry } from '../adapters/diary.adapter';

const router = express.Router();

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
  } else {
    res.status(404).json({ error: true, message: `Diary with id ${req.params.id} not found` });
  }
});

router.post('/', (req, res) => {
  try {
    const entry = toNewDiaryEntry(req.body);
    const newEntry = diaryServices.addDiaryEntry(entry);
    res.status(201).json(newEntry); // 200 is for OK, 201 is for Created
  } catch (e: any) {
    res.status(400).json({ error: true, message: e.message });
  }
});

export default router;

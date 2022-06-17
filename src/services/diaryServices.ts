import diaryData from '../db/diaries.json';
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types';

// Se hace la aserción de tipo para que TS no llore y parsee el objeto correctamente (Se debe evitar)
const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getDiaries = (): DiaryEntry[] => diaries;

export const getDiariesWitOutSentiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility };
  }); // Debemos hacer el map pues TS no elimina data, solo lo transforma para el typeo
};

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const diary = diaries.find((diary) => diary.id === id);
  if (diary != null) {
    const { comments, ...nonSensitiveInfo } = diary;

    return nonSensitiveInfo;
  }

  return undefined;
};

export const addDiaryEntry = (entry: NewDiaryEntry): DiaryEntry => {
  const newEntry: DiaryEntry = {
    id: Math.max(...diaryData.map((diary) => diary.id)) + 1,
    ...entry
  };
  diaryData.push(newEntry);
  return newEntry;
};

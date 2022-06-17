import { NewDiaryEntry } from '../types';
import { Visibility, Weather } from '../enums';
import { isString, isWeather, isVisibility } from '../utils/validators';

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Invalid or missing comment.');
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest)) {
    throw new Error('Invalid or missing date.');
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Invalid or missing weather.');
  }
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Invalid or missing visibility.');
  }
  return visibilityFromRequest;
};

const toNewDiaryEntry = (entry: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comments: parseComment(entry.comments),
    date: parseDate(entry.date),
    weather: parseWeather(entry.weather),
    visibility: parseVisibility(entry.visibility)
  };

  return newEntry;
};

export { toNewDiaryEntry };

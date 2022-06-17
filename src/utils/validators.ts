import { Visibility, Weather } from '../enums';

const isString = (value: any): boolean => {
  return typeof value === 'string' || value instanceof String;
};

const isWeather = (value: any): boolean => {
  return Object.values(Weather).includes(value);
};

const isVisibility = (value: any): boolean => {
  return Object.values(Visibility).includes(value);
};

export { isString, isWeather, isVisibility };

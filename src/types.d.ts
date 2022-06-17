// types.d.ts hace referencia a las definiciones, no podemos colocar enums acá, porque no se pueden usar en el typeo, solo definir tipos
import { Weather, Visibility } from './enums';

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'; //Creamos enums para mejor control
// export type Visibility = 'none' | 'poor' | 'good' | 'great' | 'excellent';

/* *
 * Las interfaces son para ser extendidas

    interface SpecialDiaryEntry extends DiaryEntry {
        specialProperty: string; // ? Esta propiedad es especial y la clase SpecialDiaryEntry tiene los campos de DiaryEntry y esta propiedad
    }
*/
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comments: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather'>; // * Para indicar solo que campos añadir
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comments'>; // Para eliminar un campo

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

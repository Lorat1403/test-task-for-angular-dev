/** Інтерфейс для координат */
export interface ICoord {
  lon: number;
  lat: number;
}

/** Інтерфейс для опису погоди */
export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/** Інтерфейс для основних параметрів (температура, вологість, тиск) */
export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

/** Інтерфейс для вітру */
export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

/** Інтерфейс для опадів (дощ) */
export interface IRain {
  '1h': number; // Зверніть увагу на лапки, бо ключ починається з числа
}

/** Інтерфейс для хмарності */
export interface IClouds {
  all: number;
}

/** Інтерфейс для системних даних (країна, схід/захід сонця) */
export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

/** ГОЛОВНИЙ ІНТЕРФЕЙС */
export interface IWeatherResponse {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  rain: IRain;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

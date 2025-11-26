import { Component, OnInit } from '@angular/core';
import { IWeatherResponse } from '@core/models/weather.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  readonly headerLinks = ['link1', 'link1', 'link3', 'link4'];
  readonly footerLinks = ['link1', 'link1', 'link3', 'link4'];
  readonly services = [1, 2, 3, 4, 5, 6];

  // Визначаємо змінну з типом IWeatherResponse
  public weatherData: IWeatherResponse | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData() {
    const rawData = {
      coord: {
        lon: 10.99,
        lat: 44.34,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      base: 'stations',
      main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
      },
      visibility: 10000,
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      rain: {
        '1h': 3.16,
      },
      clouds: {
        all: 100,
      },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: 'IT',
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 7200,
      id: 3163858,
      name: 'Zocca',
      cod: 200,
    };

    // Присвоюємо дані
    this.weatherData = rawData as IWeatherResponse;
  }
  // Допоміжна функція для конвертації температури з Кельвіна в Цельсій
  convertToCelsius(tempK: number): string {
    return (tempK - 273.15).toFixed(1);
  }
}

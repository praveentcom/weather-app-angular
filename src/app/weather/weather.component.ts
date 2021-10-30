import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  ngOnInit(): void {
  }

  // City Input Data
  city = '';

  // Weather Data
  temperature = '';
  humidity = '';
  winds = '';
  pressure = '';
  feelsLike = '';
  visibility = '';

  // Open Weather API Data
  openApiKey = 'fcd7f376958b7b73f8bf9f3a97cbc6f5';
  openApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather() {
    axios.get(this.openApiUrl, {
      params: {
        q: this.city,
        appid: this.openApiKey,
        units: 'metric'
      }
    }).then(response => {
      console.log(response.data);
      this.visibility = response.data.visibility;
      this.temperature = response.data.main.temp;
      this.humidity = response.data.main.humidity;
      this.winds = response.data.wind.speed;
      this.pressure = response.data.main.pressure;
      this.feelsLike = response.data.main.feels_like;
    }).catch(() => {
      this.visibility = '';
      this.temperature = '';
      this.humidity = '';
      this.winds = '';
      this.pressure = '';
      this.feelsLike = '';
    });
  }
}

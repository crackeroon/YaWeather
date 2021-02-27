import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Town} from "../weather";
import {ActivatedRoute} from "@angular/router";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public status: Boolean = false;
  public weather: Town;

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private weatherService: WeatherService) { }

  getWeather(id){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd2d79d3e0dmsh5be3a270d2107c2p1d6f01jsn6957a89f4c8c',
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "useQueryString": 'true'
      })
    };
    let url = 'https://community-open-weather-map.p.rapidapi.com/weather?lang=ru&mode=&units=metric&id=' + id;
    return this.http.get(url, httpOptions);
  }

  ionViewWillEnter() {
    let id = this.route.snapshot.params['id'];
    this.getWeather(id).subscribe(data =>
    {
      this.weather = <Town>data;
      this.status = true;
    });
  }

  deleteFavorite(id) {
    delete this.weatherService._favorites[id];
    this.weatherService.saveFavorites();
  }

  addFavorite(id, name) {
    this.weatherService._favorites[id] = name;
    this.weatherService.saveFavorites();
  }

  isFavorite(id) {
    return this.weatherService.isFavorite(id);
  }
}

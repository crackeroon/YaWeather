import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { Storage } from '@ionic/storage';
import { Town } from '../weather';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public status: boolean = false;
  public towns: Array<Town>;

  constructor(private http : HttpClient,
              private router : Router,
              private route : ActivatedRoute,
              private storage: Storage) {}

  get73Towns(){
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd2d79d3e0dmsh5be3a270d2107c2p1d6f01jsn6957a89f4c8c',
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "useQueryString": 'true'
      })
    };
    let url = 'https://community-open-weather-map.p.rapidapi.com/find?q=,ru&mode=&type=link,accurate&units=metric';
    return this.http.get(url, httpOptions);
  }

  gotoTown(town) {
    this.router.navigate(['../tab3', town.id], { relativeTo: this.route });
  }

  isFavorite(town) {

  }

  ngOnInit() {
    this.get73Towns().subscribe(data =>
    {
      this.towns = data['list'];
      this.status = true;
    });
  }
}

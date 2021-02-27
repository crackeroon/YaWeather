import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private weatherService: WeatherService,
              private router: Router,
              private route: ActivatedRoute) {}

  ionViewWillEnter() {
    //this.loadFavorites();
  }

  gotoTown(id) {
    this.router.navigate(['../tab3', id], { relativeTo: this.route });
  }

  isFavorite(id) {

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public status: boolean = false;
  private _key = 'favorites';
  public _favorites: object;

  constructor(private http: HttpClient,
              private storage: Storage) {
    this.storage.get(this._key).then(
      (data: string) => {
        try{
          this._favorites = JSON.parse(data) as object;
          console.log(this._favorites);
        } catch (error) {
          console.log(error);
        }
        if (this._favorites == null || Object.keys(this._favorites).length == 0) {
          this._favorites = {
            '479123': 'Ульяновск'
          };
          this.saveFavorites();
        }
        this.status = true;
      }
    )
  }

  async saveFavorites() {
    await this.storage.set(this._key, JSON.stringify(this._favorites).toString());
  }

  isFavorite(id) {
    return this._favorites ? this._favorites[id.toString()] : false;
  }
}

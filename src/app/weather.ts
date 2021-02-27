export interface Weather {
  temp: Number;
  pressure: Number;
  humidity: Number;
}

export interface Town {
  id: Number;
  name: String;
  main: Weather;
}

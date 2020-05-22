import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  constructor() { }

  weather: any[] = [
    {
      "hour":12,
      "min":30,
      "percip": 90,
      "clouds":100,
      "temp":13,
    },
    {
      "hour":13,
      "min":0,
      "percip": 80,
      "clouds":95,
      "temp":14,
    },
    {
      "hour":13,
      "min":30,
      "percip": 60,
      "clouds":50,
      "temp":16,
    }
  ]

  TimeMessage: string = "Placeholder";
  ngOnInit(): void {
    var d = new Date();
    this.TimeMessage = "GMT+" + (-d.getTimezoneOffset()/60) + ": " + d.getHours() + ":" + d.getMinutes() + " "+d.getDay() +"/"+d.getMonth() +"/"+d.getFullYear();
    
  }

}

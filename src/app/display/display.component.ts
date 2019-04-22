import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  url:string;
  constructor() { }

  ngOnInit() {
    this.url = 'http://openweathermap.org/img/w/.png';

  }

}

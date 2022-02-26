import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertencia',
  templateUrl: './advertencia.component.html',
  styleUrls: ['./advertencia.component.scss']
})
export class AdvertenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Button_no() {
    //window.location.replace("https://www.google.com");
    window.close();
  }

}

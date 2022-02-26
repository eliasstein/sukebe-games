import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sukebe-games';

  constructor(private router: Router) {}

  bodyColor="Black"
  ngOnInit() {

    if(window.location.pathname==="/sukebe-games/eroges" || window.location.pathname==="/eroges" )
    {
      this.bodyColor = "White"
    }

  }

  isHomeRoute() {
    return this.router.url !== '/';
  }
}







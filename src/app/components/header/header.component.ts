import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  image:string="assets/header.jpg"
  ngOnInit(): void {
    //alert(window.location.pathname)
    if(window.location.pathname==="/sukebe-games/eroges" || window.location.pathname==="/eroges" )
    {
      this.image = "assets/a.jpg"
    }
  }
  caca:string="green"
}

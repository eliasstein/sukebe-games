import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disq',
  templateUrl: './disq.component.html',
  styleUrls: ['./disq.component.scss']
})
export class DisqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageId)
  }

  pageId = window.location.pathname;

}

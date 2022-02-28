import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  current_page = 1;
  records_per_page = 2;
  
  public objJson = [
      { adName: "AdName 1"},
      { adName: "AdName 2"},
      { adName: "AdName 3"},
      { adName: "AdName 4"},
      { adName: "AdName 5"},
      { adName: "AdName 6"},
      { adName: "AdName 7"},
      { adName: "AdName 8"},
      { adName: "AdName 9"},
      { adName: "AdName 10"}
  ]; // Can be obtained from another source, such as your objJson variable
  
  link=window.location.pathname;
  prevPage()
  {
    this.current_page-=1
    alert(this.current_page)

  }
  
  nextPage()
  {
    this.current_page+=1
    alert(this.current_page)
  }
  




}

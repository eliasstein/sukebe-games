import { Component, OnInit } from '@angular/core';
import { DisqusModule } from 'ngx-disqus';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageId)
  }
  pageId = window.location.href;
  
  
}

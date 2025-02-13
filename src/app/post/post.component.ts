import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title: string = "List of posts";
  messagePost: string = "List of posts";

  postParentMessage: string = 'Message coming from the post parent';

  @Input() fromParent!:string;

  constructor() {}

  ngOnInit(): void {
  }

  
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }


  @Input() fromPostParent!: string;
}

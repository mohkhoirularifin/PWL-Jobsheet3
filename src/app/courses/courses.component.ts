import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  tittle = 'Belajar Angular';
  Courses = [
    {id: 0, name: 'HTML'},
    {id: 1, name: 'PHP'},
    {id: 2, name: 'ANGULAR'},
    {id: 3, name: 'C#'},
    {id: 4, name: 'VB.NET'},
  ]

  constructor() { }

  ngOnInit() {
  }

}

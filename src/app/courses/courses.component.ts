import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // tittle = 'Belajar Angular';
  tittle = 'Angular';
  tittle2 = '3 Author';
  Courses;

  constructor(private service:CoursesService) { 
    this.Courses=service.getCourses();
  }

  ngOnInit() {
  }

}

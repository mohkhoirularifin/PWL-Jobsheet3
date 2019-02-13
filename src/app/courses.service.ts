import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses(){
    return [
    {name: 'Author1'},
    {name: 'Author2'},
    {name: 'Author3'},
    // {id: 0, name: 'HTML'},
    // {id: 1, name: 'PHP'},
    // {id: 2, name: 'ANGULAR'},
    // {id: 3, name: 'C#'},
    // {id: 4, name: 'VB.NET'},
    ];
  }
}

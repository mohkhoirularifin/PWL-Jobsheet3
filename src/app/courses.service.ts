import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses(){
    return [
    //tugas1
    // {name: 'Author1'},
    // {name: 'Author2'},
    // {name: 'Author3'},

    //praktikum
    // {id: 0, name: 'HTML'},
    // {id: 1, name: 'PHP'},
    // {id: 2, name: 'ANGULAR'},
    // {id: 3, name: 'C#'},
    // {id: 4, name: 'VB.NET'},

    //Tugas2
    {id: 0, name: 'berlari', ket: 'lari 1 jam tiap hari'},
    {id: 1, name: 'senam', ket: 'senam tiap sore'},
    {id: 2, name: 'bermain musik', ket: 'bermain musil saat waktu senggang'},
    ];
  }
}

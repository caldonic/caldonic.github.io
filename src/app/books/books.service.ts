import { FormatWidth } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return[
      {
        name : "clean code",
  
        author : "robert martin",
  
        image : "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg",
  
        amount : 700,
      },
      {
        name : "pragmatic programmer",
  
        author : "david thomas",
  
        image : "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1359/9780135957059.jpg",
  
        amount : 800,
      },
      {
        name : "Data Structures and Algorithms",
  
        author : "Shubham Sarda",
  
        image : "https://learning.oreilly.com/library/cover/9781801078504/324w/",
  
        amount : 500,
      },
      {
        name : "Intro to Python",
  
        author : "Paul J. Deitel, Harvey M. Deitel",
  
        image : "https://learning.oreilly.com/library/cover/9780135404799/308w/",
  
        amount : 300,
      }
    ]
  }
}

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
      }
    ]
  }
}

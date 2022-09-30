import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }


  books:Book[] = [];



  isdisabled: boolean = false;

  handleclick() {
    this.isdisabled = !this.isdisabled;
    console.log(this);
  }

  handleinput(event: any) {
    this.myName = event.target.value;
  }

  myName: string = "";

  myName2: string = "";

  isshowing: boolean = true;

  togglebook() {
    this.isshowing = !this.isshowing;
  }

  cart : Book[] = [];  //???

  addtocart(event:any){
    console.log(event);
  }




}

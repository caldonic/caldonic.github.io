import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  @Input() book: Book = {} as any;
  @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: boolean = false;

  addtocart(){
    this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  myinterval:any = null;

  constructor(private cartService: CartService) { 
    this.myinterval = setInterval(() => {
      console.log('Hello');
    }, 1000);
  }

  ngOnInit(): void {
    console.log("oninit");
  }

  ngOnDestroy(): void {
    clearInterval(this.myinterval);
    console.log("ondestroy");
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}

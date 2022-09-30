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
  @Output() quantityEmitter = new EventEmitter();

  quantity : number = 0;


  isInCart: boolean = false;

  addtocart(event: any){
    this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = true;
    console.log(100, this.quantity);
    this.quantityEmitter.emit(this.quantity);
  }

  myinterval:any = null;

  constructor(private cartService: CartService) { 
    // this.myinterval = setInterval(() => {
    //   console.log('Hello');
    // }, 1000);
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

  handlequantity(event:any){
    this.quantity=event.target.value;
  }


}

import { Component, OnInit } from '@angular/core';
import { CartService, ComicPurchaseDetail } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['img', 'name',  'isDigital', 'purchaseDate', 'price',];
  cart: ComicPurchaseDetail[];
  cartOriginal:  ComicPurchaseDetail[];
  constructor(private cartService: CartService)
  {
    this.cart = cartService.getCart();
    this.cartOriginal = this.cart;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    if (!filterValue || filterValue == '')
      this.cart = this.cartOriginal;
    else
      this.cart = this.cartOriginal.filter(x => x.name.toLocaleLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }

}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/productCart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product: ProductCart;
  @Output() removeProduct: EventEmitter<ProductCart> = new EventEmitter();
  amount: number = 0;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0,
    };
  }
  ngOnInit(): void {
    this.amount = this.product.amount;
  }

  changeAmount() {
    this.product.amount = this.amount;
  }
  remove(p: ProductCart) {
    p.amount = 0;
    this.removeProduct.emit(p);
    alert('Product is removed from cart');
  }
}

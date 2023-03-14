import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductCart } from 'src/app/models/productCart';
import { User } from 'src/app/models/user';
import { CartingService } from 'src/app/services/carting.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetails } from 'src/app/models/orderDetails';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: ProductCart[] = [];
  amount: number = 1;
  user: User;
  total: number = 0;
  name: string = '';

  constructor(
    private cartingService: CartingService,
    private orderService: OrderService
  ) {
    this.products = this.cartingService.getProducts();
    this.user = {
      fullname: '',
      address: '',
      creditCard: undefined,
    };
  }

  ngOnInit() {}

  getTotal(): number {
    let total = 0;
    for (let p of this.products) {
      total += p.amount * p.price;
    }
    return total - 1;
  }

  addForm() {
    this.total = this.getTotal();
    this.name = this.user.fullname;
    const od: OrderDetails = {
      name: this.name,
      total: this.total,
    };
    this.orderService.addOrder(od);
  }
}

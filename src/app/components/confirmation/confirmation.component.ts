import { Component, Input, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/orderDetails';
import { OrderService } from 'src/app/services/order.service';
import { CartingService } from 'src/app/services/carting.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: OrderDetails;

  constructor(
    private orderService: OrderService,
    private cartingService: CartingService
  ) {
    this.order = {
      name: '',
      total: 0,
    };
  }

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
  }

  clearCart(): void {
    this.cartingService.clearCart();
  }
}

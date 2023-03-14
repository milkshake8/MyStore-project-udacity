import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: OrderDetails;
  constructor() {
    this.order = {
      name: '',
      total: 0,
    };
  }
  addOrder(o: OrderDetails) {
    this.order.name = o.name;
    this.order.total = o.total;
  }
  getOrder(): OrderDetails {
    return this.order;
  }
}

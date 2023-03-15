import { Component } from '@angular/core';
import { ProductCart } from 'src/app/models/productCart';
import { User } from 'src/app/models/user';
import { CartingService } from 'src/app/services/carting.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: ProductCart[] = [];
  amount: number = 0;
  user: User;
  total: number = 0;
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartingService: CartingService) {
    this.user = {
      fullname: '',
      address: '',
      creditCard: '',
    };
  }

  ngOnInit(): void {
    this.products = this.cartingService.getProducts();
  }

  getTotal(): number {
    let total = 0;
    for (let p of this.products) {
      total += p.amount * p.price;
    }
    return total;
  }

  removeItem(product: ProductCart): void {
    this.products = this.cartingService.removeProduct(product);
  }

  addForm(): void {
    this.total = this.getTotal();
    this.cartingService.clearCart();
  }

  changeAmount(p: ProductCart): void {
    for (let product of this.products) {
      if (product.id === p.id) {
        product.amount = p.amount;
      }
    }
  }
  changeUsername(name: string): void {
    this.user.fullname = name;
  }

  changeAddress(address: string): void {
    this.user.address = address;
  }

  changeCreditCard(card: string): void {
    this.user.creditCard = card;
  }
}

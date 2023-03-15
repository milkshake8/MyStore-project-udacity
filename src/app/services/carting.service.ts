import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCart } from '../models/productCart';

@Injectable({
  providedIn: 'root',
})
export class CartingService {
  products: ProductCart[] = [
    {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0,
    },
  ];

  constructor() {}

  addProductToCart(p: Product, amount: number): void | null {
    for (let product of this.products) {
      if (p.id === product.id) {
        product.amount += amount;
        return null;
      }
    }
    const pc: ProductCart = {
      id: p.id,
      name: p.name,
      url: p.url,
      price: p.price,
      description: p.description,
      amount: amount,
    };
    this.products.push(pc);
  }

  getProducts(): ProductCart[] {
    return this.products;
  }

  clearCart(): void {
    while (this.products[0] !== undefined) {
      this.products.pop();
    }
  }
  removeProduct(product: ProductCart): ProductCart[] {
    return (this.products = this.products.filter((p) => p.id !== product.id));
  }
}

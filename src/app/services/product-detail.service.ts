import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  product: Product;

  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      description: '',
      url: '',
    };
  }

  addToDetail(p: Product): void {
    this.product = {
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description,
      url: p.url,
    };
  }
  getDetail(): Product {
    return this.product;
  }
}

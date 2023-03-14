import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import Products from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ProductList: Product[];

  constructor() {
    this.ProductList = Products;
  }

  getProducts(): Product[] {
    return this.ProductList;
  }
  getProductDetail(id: number): Product {
    return this.ProductList[id];
  }
}

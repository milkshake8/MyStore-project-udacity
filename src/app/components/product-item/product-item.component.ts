import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { CartingService } from 'src/app/services/carting.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  amount: number = 1;
  @Input() product: Product;

  constructor(
    private productDetail: ProductDetailService,
    private cartingService: CartingService
  ) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  showDetail(p: Product): void {
    this.productDetail.addToDetail(p);
  }

  addForm() {
    this.cartingService.addProductToCart(this.product, this.amount);
    alert('The product is added to the cart');
  }
}

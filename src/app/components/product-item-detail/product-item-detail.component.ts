import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { CartingService } from 'src/app/services/carting.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product_item: Product;
  amount: number = 1;
  @Input() id: number = 1;
  constructor(
    private productDetail: ProductDetailService,
    private cartingService: CartingService
  ) {
    this.product_item = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
  }
  ngOnInit(): void {
    this.product_item = this.productDetail.getDetail();
  }

  addForm() {
    this.cartingService.addProductToCart(this.product_item, this.amount);
    alert('The product is added to the cart');
  }
}

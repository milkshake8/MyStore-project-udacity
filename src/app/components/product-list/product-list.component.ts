import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProducList: Product[];
  amount: number = 1;

  constructor(private dataservice: DataService) {
    this.ProducList = [];
  }

  ngOnInit(): void {
    this.dataservice.getProducts().subscribe((data) => {
      this.ProducList = data;
    });
  }
}

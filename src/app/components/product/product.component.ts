import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: Boolean = false;

  filterText = "";

  constructor(
    private productServise: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProductDetails();
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getAllByCategoryId(params['categoryId']);
      } else {
        this.getAllProductDetails();
      }
    });
  }

  getAllProductDetails() {
    this.dataLoaded = true;
    this.productServise.getAllProductDetails().subscribe((response) => {
      this.products = response.data;
      setTimeout(() => {
        this.dataLoaded = false;
      }, 500);
    });
  }
  getAllByCategoryId(categoryId: number) {
    this.productServise.getAllByCategoryId(categoryId).subscribe((response) => {
      this.products = response.data;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseDataResponseModel } from 'src/app/models/baseDataResponseModel';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44383/api/Products/';
  constructor(private httpClient: HttpClient) {}

  getAllProductDetails(): Observable<BaseDataResponseModel<Product>> {
    let apiPath = this.apiUrl + 'getallproductdetails';
    return this.httpClient.get<BaseDataResponseModel<Product>>(apiPath);
  }

  getAllByCategoryId(
    categoryId: number
  ): Observable<BaseDataResponseModel<Product>> {
    let apiPath = this.apiUrl + 'getbycategoryid?categoryId=' + categoryId;
    return this.httpClient.get<BaseDataResponseModel<Product>>(apiPath);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataResponseModel } from 'src/app/models/baseDataResponseModel';
import { Category } from 'src/app/models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44383/api/Categories/getall';
  constructor(private httpClient: HttpClient) {}

  getAllCategories():Observable<BaseDataResponseModel<Category>> {
    return this.httpClient.get<BaseDataResponseModel<Category>>(this.apiUrl);
  }
}

import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category = {
    categoryId: 0,
    categoryName: '',
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
}

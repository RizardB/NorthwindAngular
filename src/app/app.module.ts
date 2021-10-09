import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavigationComponent,
    VatAddedPipe,
    FilterProductsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

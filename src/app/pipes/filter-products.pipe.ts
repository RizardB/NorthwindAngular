import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product/product';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter((item: Product) => {
          return item.productName.toLocaleLowerCase().indexOf(filterText) !== -1;
        })
      : value;
  }
}

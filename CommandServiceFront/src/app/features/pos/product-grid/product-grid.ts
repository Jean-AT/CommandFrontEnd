import { Component } from '@angular/core';
import { ProductCart } from '../../../shared/product-cart/product-cart';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCart],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {

}

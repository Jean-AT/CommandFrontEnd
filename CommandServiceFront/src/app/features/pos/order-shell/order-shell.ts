import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from '../../../shared/nav-bar/nav-bar';
import { OrderSummary } from '../order-summary/order-summary';
import { CategorySidebar } from '../category-sidebar/category-sidebar';
import { ProductGrid } from '../product-grid/product-grid';

@Component({
  selector: 'app-order-shell',
  standalone: true,
  imports: [NavBar,OrderSummary,CategorySidebar,ProductGrid,CommonModule],
  templateUrl: './order-shell.html',
  styleUrl: './order-shell.css',
})
export class OrderShell {

}

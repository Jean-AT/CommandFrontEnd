import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCart } from './shared/product-cart/product-cart';
import { NavBar } from './shared/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCart,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CommandServiceFront');
}

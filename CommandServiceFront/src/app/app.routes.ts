import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './features/login/login';
import { OrderShell } from './features/pos/order-shell/order-shell';
import { Landingpage } from './features/landingpage/landingpage';
export const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'landingpage', component: Landingpage },
  { path: 'pos', component: OrderShell }
];
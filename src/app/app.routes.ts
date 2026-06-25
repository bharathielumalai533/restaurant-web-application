import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Order } from './order/order';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { adminAuthGuard } from './admin-auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'order', component: Order },
  { path: 'login', component: Login },
  { path: 'admin', component: Admin, canActivate: [adminAuthGuard] }
];
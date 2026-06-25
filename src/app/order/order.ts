import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Food } from '../order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  orderService = inject(OrderService);
  router = inject(Router);

  get foods(): Food[] { return this.orderService.foods; }
  get orderedItems(): Food[] { return this.orderService.orderedItems; }
  get totalBill(): number { return this.orderService.totalBill; }

  increase(food: Food) { this.orderService.increase(food); }
  decrease(food: Food) { this.orderService.decrease(food); }

  goBack() { this.router.navigate(['/']); }

  confirmOrder() {
    if (this.totalBill === 0) {
      alert('Please select at least one item!');
      return;
    }
    this.orderService.placeOrder();
    this.router.navigate(['/']);
    alert('✅ Order placed! Restaurant has been notified.');
  }
}
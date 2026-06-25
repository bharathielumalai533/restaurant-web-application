import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService, Food, CustomerOrder } from '../order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  orderService = inject(OrderService);
  router = inject(Router);

  activeTab: 'orders' | 'menu' = 'orders';
  showAddForm = false;
  editingFood: Food | null = null;
  newFood = { name: '', price: 0, image: '', category: 'Veg' };

  get orders(): CustomerOrder[] { return this.orderService.customerOrders; }
  get pendingCount(): number { return this.orders.filter(o => o.status === 'Pending').length; }
  get foods(): Food[] { return this.orderService.foods; }

  updateStatus(id: number, status: 'Pending' | 'Preparing' | 'Completed') {
    this.orderService.updateOrderStatus(id, status);
  }

  startEdit(food: Food) { this.editingFood = { ...food }; }
  saveEdit() {
    if (this.editingFood) {
      this.orderService.updateFood(this.editingFood);
      this.editingFood = null;
    }
  }
  cancelEdit() { this.editingFood = null; }

  deleteFood(id: number) {
    if (confirm('Delete this item?')) {
      this.orderService.deleteFood(id);
    }
  }

  addFood() {
    if (!this.newFood.name || !this.newFood.price) {
      alert('Please fill all fields!');
      return;
    }
    this.orderService.addFood(this.newFood);
    this.newFood = { name: '', price: 0, image: '', category: 'Veg' };
    this.showAddForm = false;
  }

  goHome() { this.router.navigate(['/']); }

  logout() {
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }
}
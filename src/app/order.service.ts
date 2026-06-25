import { Injectable } from '@angular/core';

export interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  category: string;
}

export interface CustomerOrder {
  id: number;
  items: { name: string; price: number; qty: number }[];
  total: number;
  status: 'Pending' | 'Preparing' | 'Completed';
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  foods: Food[] = [
    { id: 1, name: 'Chicken Biryani', price: 250, image: '/assets/images/biryani.jpg', qty: 0, category: 'Non-Veg' },
    { id: 2, name: 'Butter Chicken', price: 320, image: '/assets/images/butter-chicken.jpg', qty: 0, category: 'Non-Veg' },
    { id: 3, name: 'Masala Dosa', price: 120, image: '/assets/images/dosa.jpg', qty: 0, category: 'Veg' },
    { id: 4, name: 'Paneer Tikka', price: 220, image: '/assets/images/paneer-tikka.jpg', qty: 0, category: 'Veg' }
  ];

  customerOrders: CustomerOrder[] = [];

  increase(food: Food) { food.qty++; }

  decrease(food: Food) { if (food.qty > 0) food.qty--; }

  get orderedItems(): Food[] {
    return this.foods.filter(f => f.qty > 0);
  }

  get totalBill(): number {
    return this.foods.reduce((sum, f) => sum + f.price * f.qty, 0);
  }

  placeOrder() {
    const order: CustomerOrder = {
      id: Date.now(),
      items: this.orderedItems.map(f => ({ name: f.name, price: f.price, qty: f.qty })),
      total: this.totalBill,
      status: 'Pending',
      time: new Date().toLocaleTimeString()
    };
    this.customerOrders.push(order);
    this.clearOrder();
  }

  clearOrder() {
    this.foods.forEach(f => f.qty = 0);
  }

  updateOrderStatus(id: number, status: 'Pending' | 'Preparing' | 'Completed') {
    const order = this.customerOrders.find(o => o.id === id);
    if (order) order.status = status;
  }

  addFood(food: Omit<Food, 'id' | 'qty'>) {
    this.foods.push({ ...food, id: Date.now(), qty: 0 });
  }

  updateFood(updated: Food) {
    const index = this.foods.findIndex(f => f.id === updated.id);
    if (index !== -1) this.foods[index] = { ...updated, qty: 0 };
  }

  deleteFood(id: number) {
    this.foods = this.foods.filter(f => f.id !== id);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  foods = [
    { name: 'Chicken Biryani', image: '/assets/images/biryani.jpg' },
    { name: 'Butter Chicken', image: '/assets/images/butter-chicken.jpg' },
    { name: 'Masala Dosa', image: '/assets/images/dosa.jpg' },
    { name: 'Paneer Tikka', image: '/assets/images/paneer-tikka.jpg' }
  ];
}
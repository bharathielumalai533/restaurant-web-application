import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { Menu } from '../menu/menu';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Menu, About, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
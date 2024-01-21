import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sustainable',
  templateUrl: './sustainable.component.html',
  styleUrls: ['./sustainable.component.css']
})
export class SustainableComponent {

  constructor(private router: Router) {}

  selected = 'Ninguna';
  shoes: any[] = [
    {
      img: "assets/img/sus1.png",
      description: 'Nike Dunk Low',
      description2: '',
      brand: 'Nike',
      price: 370000
    },

    {
      img: "assets/img/sus2.png",
      description: 'Tenis Duramo SL',
      brand: 'Adidas',
      price: 190000
    },

    {
      img: "assets/img/trend2.png",
      description: 'Tenis Clásicos Negros Slip-On',
      description2: ' Checkerboard Pewter Vans',
      brand: 'Vans',
      price: 200000
    },

    {
      img: "assets/img/trend5.png",
      description: 'Chuck Taylor All Star Platform',
      description2: 'Smoked Canvas',
      brand: 'Converse',
      price: 350000
    },

    {
      img: "assets/img/trend3.png",
      description: 'Tenis Clásicos Negros Old Skool',
      description2: 'Checkerboard',
      brand: 'Vans',
      price: 250000
    },

  ];

  sortedShoes: any[] = [
    {
      img: "assets/img/sus1.png",
      description: 'Nike Dunk Low',
      description2: '',
      brand: 'Nike',
      price: 370000
    },

    {
      img: "assets/img/sus2.png",
      description: 'Tenis Duramo SL',
      brand: 'Adidas',
      price: 190000
    },

    {
      img: "assets/img/trend2.png",
      description: 'Tenis Clásicos Negros Slip-On',
      description2: ' Checkerboard Pewter Vans',
      brand: 'Vans',
      price: 200000
    },

    {
      img: "assets/img/trend5.png",
      description: 'Chuck Taylor All Star Platform',
      description2: 'Smoked Canvas',
      brand: 'Converse',
      price: 350000
    },

    {
      img: "assets/img/trend3.png",
      description: 'Tenis Clásicos Negros Old Skool',
      description2: 'Checkerboard',
      brand: 'Vans',
      price: 250000
    },

  ];

  sortShoes() {
    switch (this.selected) {
      case 'brand':
        this.sortedShoes = this.shoes.slice().sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case 'priceAsc':
        this.sortedShoes = this.shoes.slice().sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.sortedShoes = this.shoes.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        this.sortedShoes = this.shoes.slice();
        break;
    }
  }

  navigateToShowShoe(description: string, price: number) {
    this.router.navigate(['/showshoe', description, price]);
  }

}

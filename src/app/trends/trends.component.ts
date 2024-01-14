import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent {

  constructor(private router: Router) {}

  selected = 'Ninguna';
  shoes: any[] = [
    {
      img: "assets/img/trend1.png",
      description: 'Tenis Clásicos Azules Style 36 Our',
      description2: ' Legends Vans',
      brand: 'Vans',
      price: 370000
    },

    {
      img: "assets/img/trend4.png",
      description: 'Tenis Forum Low x The Grinch',
      brand: 'Adidas',
      price: 700000
    },

    {
      img: "assets/img/trend2.png",
      description: 'Tenis Clásicos Negros Slip-On',
      description2: ' Checkerboard Pewter Vans',
      brand: 'Vans',
      price: 400000
    },

    {
      img: "assets/img/trend5.png",
      description: 'Chuck Taylor All Star Platform',
      description2: 'Smoked Canvas',
      brand: 'Converse',
      price: 450000
    },

    {
      img: "assets/img/trend3.png",
      description: 'Tenis Clásicos Negros Old Skool',
      description2: 'Checkerboard',
      brand: 'Vans',
      price: 350000
    },

    {
      img: "assets/img/trend6.png",
      description: 'Air Jordan 1 High OG "Mauve"',
      brand: 'Nike',
      price: 1100000
    },

    {
      img: "assets/img/trend7.png",
      description: 'Tenis Forum Low CL The Grinch',
      brand: 'Adidas',
      price: 750000
    },

    {
      img: "assets/img/trend8.png",
      description: 'Air Jordan 1 Retro High OG',
      brand: 'Nike',
      price: 1050000
    },

    {
      img: "assets/img/trend9.png",
      description: 'Custom Chuck Taylor All Star NBA By You',
      brand: 'Converse',
      price: 500000
    },

    {
      img: "assets/img/trend10.png",
      description: 'Nike Air Force 1 07',
      brand: 'Nike',
      price: 800000
    },

  ];

  sortedShoes: any[] = [
    {
      img: "assets/img/trend1.png",
      description: 'Tenis Clásicos Azules Style 36 Our',
      description2: ' Legends Vans',
      brand: 'Vans',
      price: 370000
    },

    {
      img: "assets/img/trend4.png",
      description: 'Tenis Forum Low x The Grinch',
      brand: 'Adidas',
      price: 700000
    },

    {
      img: "assets/img/trend2.png",
      description: 'Tenis Clásicos Negros Slip-On',
      description2: ' Checkerboard Pewter Vans',
      brand: 'Vans',
      price: 400000
    },

    {
      img: "assets/img/trend5.png",
      description: 'Chuck Taylor All Star Platform',
      description2: 'Smoked Canvas',
      brand: 'Converse',
      price: 450000
    },

    {
      img: "assets/img/trend3.png",
      description: 'Tenis Clásicos Negros Old Skool',
      description2: 'Checkerboard',
      brand: 'Vans',
      price: 350000
    },

    {
      img: "assets/img/trend6.png",
      description: 'Air Jordan 1 High OG "Mauve"',
      brand: 'Nike',
      price: 1100000
    },

    {
      img: "assets/img/trend7.png",
      description: 'Tenis Forum Low CL The Grinch',
      brand: 'Adidas',
      price: 750000
    },

    {
      img: "assets/img/trend8.png",
      description: 'Air Jordan 1 Retro High OG',
      brand: 'Nike',
      price: 1050000
    },

    {
      img: "assets/img/trend9.png",
      description: 'Custom Chuck Taylor All Star NBA By You',
      brand: 'Converse',
      price: 500000
    },

    {
      img: "assets/img/trend10.png",
      description: 'Nike Air Force 1 07',
      brand: 'Nike',
      price: 800000
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

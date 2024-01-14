import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'assets/img/car2.jpg',
    'assets/img/50off.png',
    'assets/img/car1.jpg',
  ];
  currentSlideIndex = 0;

  constructor() { }
  ngOnInit(): void {
    this.startAutoPlay();
  }

  startAutoPlay(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
}

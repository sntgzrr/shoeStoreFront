import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'https://via.placeholder.com/600x300/FF5733/000000?text=Image+1',
    'https://via.placeholder.com/600x300/33FF57/000000?text=Image+2',
    'https://via.placeholder.com/600x300/5733FF/000000?text=Image+3'
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

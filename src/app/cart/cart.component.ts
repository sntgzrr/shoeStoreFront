import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/model/shoe';
import { CartService, Cart } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoe: Shoe = new Shoe;
  carts: Cart[] = [];
  sumPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.obtenerCarritos();
    console.log(this.carts);
    for (let i = 0; i < this.carts.length; i++) {
      const priceAsNumber = Number(this.carts[i].finalprice);
      if (!isNaN(priceAsNumber)) {
        this.sumPrice += priceAsNumber;
      }
    }
  }

  eliminarItem(index: number): void {
    if (index >= 0 && index < this.carts.length) {
      this.carts.splice(index, 1);
      this.actualizarSumaPrecios();
    }
  }

  private actualizarSumaPrecios(): void {
    this.sumPrice = 0;
    for (let i = 0; i < this.carts.length; i++) {
      const priceAsNumber = Number(this.carts[i].finalprice);
      if (!isNaN(priceAsNumber)) {
        this.sumPrice += priceAsNumber;
      }
    }
  }

}

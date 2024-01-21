import { Injectable } from '@angular/core';
import { Shoe } from 'src/model/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = [];

  agregarCarrito(shoe: Shoe) {
    this.carts.push(new Cart(shoe));
  }

  obtenerCarritos() {
    return this.carts;
  }
}

export class Cart {
  constructor(public shoe: Shoe) {}
  model = this.shoe.model;
  price = this.shoe.price;
  num = this.shoe.num;
  size = this.shoe.size;
  img = this.shoe.img;
  finalprice = this.shoe.finalprice;
}

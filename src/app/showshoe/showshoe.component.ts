import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shoe } from 'src/model/shoe';
import { CartService } from 'src/services/cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-showshoe',
  templateUrl: './showshoe.component.html',
  styleUrls: ['./showshoe.component.css']
})
export class ShowshoeComponent implements OnInit {
  images: any[] = [];
  texts: any[] = [];
  shoe: Shoe = new Shoe;
  cantidad: number = 1;
  talla: string = "";
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const description = params['description'];
      const price = params['price'];
      this.loadSpecificShoeData(description, price);
    });
  }

  agregarACarrito() {
    if (this.talla != "") {
      this.shoe.num = this.cantidad;
      this.shoe.size = this.talla;
      this.shoe.finalprice = (this.shoe.price * this.cantidad);
      this.cartService.agregarCarrito(this.shoe);
      Swal.fire({
        icon: "success",
        title: "¡Elemento agregado!",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/cart']);
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Debes de seleccionar una talla!"
      });
    }
  }

  loadSpecificShoeData(description: string, price: number) {
    if (description == 'Tenis Clásicos Azules Style 36 Our') {
      this.images = [
        { url: 'assets/img/trend1.png' },
        { url: 'assets/img/trend1.1.png' },
        { url: 'assets/img/trend1.2.png' },
        { url: 'assets/img/trend1.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: 'Legends Vans',
          price,
          more: 'El modelo Old Skool, es un zapato clásico de skate y es el primer modelo en llevar la icónica franja lateral, su diseño de perfil bajo con amarre de cordones cuenta con una parte superior de cuero y lona, con una lengüeta y forro acolchados, además de la muy reconocida suela en goma con forma de Waffle.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Tenis Forum Low x The Grinch') {
      this.images = [
        { url: 'assets/img/trend4.png' },
        { url: 'assets/img/trend4.1.png' },
        { url: 'assets/img/trend4.2.png' },
        { url: 'assets/img/trend4.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Descubre un estilo clásico con un toque travieso cortesía del gruñón favorito de todos: el Grinch. No importa si vas a caminar por el monte Crumpit o a disfrutar de la naturaleza, estos tenis adidas mantienen tus pies cómodos y tu estilo definido. El cuero suave, las tiras ajustables de cierre por contacto y la suela de caucho los hace perfectos para la aventura diaria. Luciendo el distintivo color verde y estampados del Grinch, estos tenis divertidos con seguridad alegrarán a todos los que pasen por ahí.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Tenis Clásicos Negros Slip-On') {
      this.images = [
        { url: 'assets/img/trend2.png' },
        { url: 'assets/img/trend2.1.png' },
        { url: 'assets/img/trend2.2.png' },
        { url: 'assets/img/trend2.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: 'Checkerboard Pewter Vans',
          price,
          more: 'Introducido por primera vez en 1977, el Vans #98 – ahora conocido como Classic Slip-On – se convirtió instantáneamente en un ícono en el sur de California. Avance para hoy y el Classic Slip-On está conocido mundialmente por su silueta confortable, facilidad de usar y diseño amado. Con la icónica estampa de checkerboard de Vans, el Classic Slip-On es un ítem esencial para todos los días con el verdadero estilo «Off The Wall». Este icónico calzado slip-on también incluye palas discretas en lona, cuellos acolchados con apoyo, acentos laterales elásticos y las características suelas waffle en caucho.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Chuck Taylor All Star Platform') {
      this.images = [
        { url: 'assets/img/trend5.png' },
        { url: 'assets/img/trend5.1.png' },
        { url: 'assets/img/trend5.2.png' },
        { url: 'assets/img/trend5.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: 'Smoked Canvas',
          price,
          more: 'Mejora tu estilo de juego con estas Chuck de lona y plataforma. Gracias a un tratamiento para lograr un look vintage, cuentan con la sensación de tus "zapatillas favoritas" desde el primer día.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Tenis Clásicos Negros Old Skool') {
      this.images = [
        { url: 'assets/img/trend3.png' },
        { url: 'assets/img/trend3.1.png' },
        { url: 'assets/img/trend3.2.png' },
        { url: 'assets/img/trend3.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: 'Checkerboard',
          price,
          more: 'Conocido inicialmente como Vans #36, el Old Skool estrenó en 1977 con una nueva adición peculiar: un diseño aleatorio hecho por Paul Van Doren, originalmente llamado de “franja de jazz”. Hoy, el famoso Vans Sidestripe se volvió el inconfundible – e instantáneamente reconocido – distintivo de la marca Vans. Construido con empeines duraderos en gamuza y lona con nuestra estampa clásica en checkerboard, el Primary Check Old Skool rinde homenaje a nuestra tradición, garantizando que este zapato de cuello bajo con trenzas permanezca icónico como siempre. También incluye punteras reforzadas, cuellos acolchados firmes y la suela de goma característica de la marca en wafle. • Zapato icónico de cuello bajo con franjas laterales de Vans • Empeines duraderos en gamuza y lona • Estampa clásica en checkerboard • Cierre con trenzas • Punteras reforzadas • Cuellos acolchados firmes • Suela de goma característica de la marca en wafle.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Air Jordan 1 High OG "Mauve"') {
      this.images = [
        { url: 'assets/img/trend6.png' },
        { url: 'assets/img/trend6.1.png' },
        { url: 'assets/img/trend6.2.png' },
        { url: 'assets/img/trend6.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Las Air Jordan 1 High OG recuperan el clásico para ofrecer un look icónico con una sensación familiar. Las superposiciones de piel malva ofrecen un suave contraste con la parte superior neutra para crear acabado impecable e ideal para la temporada. Al igual que la característica canasta en pleno giro de MJ, esta edición moderna del modelo favorito de todos los tiempos ofrece un estilo clásico de baloncesto.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Tenis Forum Low CL The Grinch') {
      this.images = [
        { url: 'assets/img/trend7.png' },
        { url: 'assets/img/trend7.1.png' },
        { url: 'assets/img/trend7.2.png' },
        { url: 'assets/img/trend7.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Te presentamos los tenis adidas Forum inspirados en Max, el perro fiel de "Cómo el Grinch robó la Navidad" del Dr. Seuss. Presenta una parte superior de gamuza prémium adornada con unos divertidos detalles extraíbles en los cordones e incluye dos juegos de cordones que te permiten personalizar tu look. Conserva todos los elementos característicos de la Forum original, como la suela de caucho y la inconfundible silueta de perfil bajo. Directa de Villa Quién, llega lista para acompañarte en todas tus aventuras.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Air Jordan 1 Retro High OG') {
      this.images = [
        { url: 'assets/img/trend8.png' },
        { url: 'assets/img/trend8.1.png' },
        { url: 'assets/img/trend8.2.png' },
        { url: 'assets/img/trend8.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Las icónicas Air Jordan 1 mantienen su diseño familiar e impecable, aunque se actualizan para la cultura actual de los amantes de las zapatillas. Esta versión de las Retro High OG se presenta con piel premium, una amortiguación cómoda y detalles de diseño clásicos.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Custom Chuck Taylor All Star NBA By You') {
      this.images = [
        { url: 'assets/img/trend9.png' },
        { url: 'assets/img/trend9.1.png' },
        { url: 'assets/img/trend9.2.png' },
        { url: 'assets/img/trend9.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Adéntrate de lleno en toda la acción con las NBA Chuck personalizadas. Elige entre18 equipos All Star y personalízalas a tu gusto en tela vaquera o lona. El diseño incorpora el logo, la marca y los años en competición del equipo, pero en lo que respecta al color, la pelota está en tu tejado.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Nike Air Force 1 07') {
      this.images = [
        { url: 'assets/img/trend10.png' },
        { url: 'assets/img/trend10.1.png' },
        { url: 'assets/img/trend10.2.png' },
        { url: 'assets/img/trend10.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'Suma puntos con este clásico del baloncesto legendario. Con un diseño que combina la comodidad sobre el parqué con un estilo fuera de la cancha, estas AF1 lucen revestimientos suaves y toques de color sutiles para ofrecer un estilo de baloncesto. Las unidades Air ocultas y la duradera confección de los 80, que rinde homenaje a una era, añaden la comodidad que más te gusta.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Nike Dunk Low') {
      this.images = [
        { url: 'assets/img/sus1.png' },
        { url: 'assets/img/sus1.1.png' },
        { url: 'assets/img/sus1.2.png' },
        { url: 'assets/img/sus1.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'El icono del baloncesto de los 80 vuelve con detalles clásicos y un estilo de baloncesto retro. La zona del tobillo acolchada y de perfil bajo lleva el estilo vintage a las calles y te permite jugar con comodidad en cualquier parte.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    } else if (description == 'Tenis Duramo SL') {
      this.images = [
        { url: 'assets/img/sus2.png' },
        { url: 'assets/img/sus2.1.png' },
        { url: 'assets/img/sus2.2.png' },
        { url: 'assets/img/sus2.3.png' },
      ];

      this.texts = [
        {
          description,
          description2: '',
          price,
          more: 'La variedad es lo que te motiva. Estos tenis de running cómodos y versátiles son perfectos para correr, levantar pesas o jugar un picadito. Presentan una estructura ligera con amortiguación suave. Los refuerzos sin costuras sujetan el pie en los movimientos laterales y cambios de dirección rápidos.'
        },
      ];
      this.shoe.model = description;
      this.shoe.price = price;
      this.shoe.img = this.images[0];
    }
  }
}

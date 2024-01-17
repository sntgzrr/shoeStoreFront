import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes-clean-information',
  templateUrl: './shoes-clean-information.component.html',
  styleUrls: ['./shoes-clean-information.component.css']
})
export class ShoesCleanInformationComponent {
  constructor(private router: Router) {}

  information: any[] = [
    {
      img: "https://eci.contebio.com/material/sportown/10187_1587545244_how-do-i-clean-my-shoes-nike.jpg",
      description: 'Revive el Brillo: Guía Completa para Lavar tus Nike y Mantenerlos Impecables',
      more: "En el vertiginoso mundo de la moda y el estilo de vida activo, los tenis Nike se han convertido en un símbolo de innovación y rendimiento. Sin embargo, con el uso constante, es inevitable que acumulen suciedad y manchas. En este artículo, te guiaremos a través de los mejores métodos para lavar tus preciados tenis Nike, devolviéndoles ese brillo original y asegurando que sigan siendo una declaración de estilo y comodidad. ¡Descubre cómo mantener tus zapatillas en su mejor forma y camina con confianza!"
    },

    {
      img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esCO/Images/How-to-Clean-Shoes-masthead-d_tcm195-1019194.jpg",
      description: '¡Pisando fuerte! Guía definitiva para lavar tus Adidas y mantenerlos impecables',
      more: "Descubre los secretos para mantener tus tenis Adidas impecables y listos para enfrentar cualquier aventura. Desde los métodos de limpieza más efectivos hasta los consejos de cuidado, te guiaremos paso a paso para que tus zapatillas favoritas luzcan como nuevas. ¡Prepárate para caminar con estilo y confianza!"
    },

    {
      img: "https://eci.contebio.com/material/contents/38293/1682494085_vans-circle-vee-1200x800.jpg",
      description: 'Paso a paso hacia la frescura: La guía definitiva para lavar tus Vans con estilo',
      more: "Cuando se trata de estilo urbano y atrevimiento, los tenis Vans siempre lideran el camino. Sin embargo, tras cada aventura, es inevitable que acumulen un poco de desgaste. Pero no te preocupes, porque en esta guía te revelaremos los secretos mejor guardados para lavar y revitalizar tus Vans favoritos, asegurándote de que cada paso que des siga siendo un auténtico statement de moda. ¡Descubre cómo mantener tus Vans siempre listos para conquistar las calles con frescura y actitud!"
    },

    {
      img: "https://st1.uvnimg.com/dims4/default/65b566d/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Ft%2Ftenis-blancos-sucios-tenis-blancos-limpios.jpg",
      description: 'Converse siempre en su mejor versión: La guía completa para lavar tus Chuck Taylors',
      more: "Los icónicos Chuck Taylors de Converse no solo son un símbolo de estilo, sino también de resistencia. A medida que te acompañan en tus experiencias diarias, es natural que acumulen un poco de desgaste. Pero aquí estamos, listos para guiarte a través de una guía completa para lavar tus Converse y devolverles ese brillo original. Descubre los secretos detrás del cuidado perfecto para que tus Chuck Taylors sigan siendo el complemento perfecto para cada paso que das. ¡Es hora de mantener tus Converse siempre en su mejor versión!"
    },
  ];

  navigateToShowInformation(description: string) {
    this.router.navigate(['/showinformation', description]);
  }
}

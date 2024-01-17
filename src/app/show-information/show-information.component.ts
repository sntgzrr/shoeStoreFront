import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-information',
  templateUrl: './show-information.component.html',
  styleUrls: ['./show-information.component.css']
})
export class ShowInformationComponent implements OnInit{
  image1: string | undefined;
  image2: string | undefined;
  title: string | undefined;
  author: string | undefined;
  intro: string | undefined;
  info1: string | undefined;
  info2: string | undefined;
  info3: string | undefined;
  info4: string | undefined;
  info5: string | undefined;
  info6: string | undefined;
  info7: string | undefined;
  info8: string | undefined;
  info9: string | undefined;
  info10: string | undefined;
  info11: string | undefined;
  info12: string | undefined;

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const description = params['description'];
      this.loadSpecificShoeData(description);
    });
  }

  loadSpecificShoeData(description: string) {
    if (description == 'Revive el Brillo: Guía Completa para Lavar tus Nike y Mantenerlos Impecables') {

      this.image1 = 'https://eci.contebio.com/material/sportown/10187_1587545244_how-do-i-clean-my-shoes-nike.jpg';
      this.image2 = 'assets/img/logo-mano.png';
      this.title = description;
      this.author = 'Equipo Kix';
      this.intro = "En el vertiginoso mundo de la moda y el estilo de vida activo, los tenis Nike no solo representan innovación y rendimiento, sino que también son una expresión de estilo personal. Sin embargo, con el uso constante, es inevitable que estos calzados acumulen suciedad y manchas, perdiendo parte de su esencia. En este artículo, exploraremos métodos efectivos para lavar tus preciados tenis Nike, restaurando su brillo original y asegurando que sigan siendo una declaración de estilo y comodidad.";
      this.info1 = "1. Preparación: ";
      this.info2 = "Antes de sumergirte en el proceso de limpieza, es crucial preparar adecuadamente tus tenis. Retira los cordones y plantillas para lavarlos por separado. Golpea suavemente los tenis para eliminar el exceso de suciedad y polvo. Cuanto más limpio esté el calzado antes de comenzar, más efectivo será el proceso de lavado.";
      this.info3 = "2. Limpieza de Superficies:";
      this.info4 = "Utiliza un cepillo suave para fregar las superficies exteriores de tus tenis. Dependiendo del material, puedes emplear un cepillo de cerdas suaves para el cuero o materiales sintéticos, y un cepillo de dientes viejo para las suelas y áreas de difícil acceso. Aplica una mezcla suave de agua y detergente sobre el cepillo y trabaja en movimientos circulares para eliminar las manchas.";
      this.info5 = "3. Lavado de Cordones e Insoles:";
      this.info6 = "Los cordones y las plantillas pueden acumular fácilmente suciedad y olores desagradables. Lávalos a mano con agua tibia y jabón, o colócalos en una bolsa de malla dentro de la lavadora para una limpieza más profunda. Asegúrate de dejarlos secar completamente antes de volver a colocarlos en tus tenis.";
      this.info7 = "4. Lavado a Máquina (opcional):";
      this.info8 = "Si tus tenis son aptos para lavadora, colócalos dentro de una bolsa de malla para protegerlos durante el ciclo de lavado. Usa agua fría y un detergente suave. Evita el uso de blanqueadores, ya que pueden dañar los materiales. Después del lavado, déjalos secar al aire libre, evitando la exposición directa al sol.";
      this.info9 = "5. Secado:";
      this.info10 = "Deja que tus tenis se sequen al aire libre de manera natural. Evita el uso de secadoras, ya que el calor puede deformar los materiales y comprometer la calidad del calzado. Coloca papel periódico en el interior de los tenis para absorber la humedad y ayudar a mantener su forma original.";
      this.info11 = "";
      this.info12 = "";
    }else if (description == '¡Pisando fuerte! Guía definitiva para lavar tus Adidas y mantenerlos impecables'){
      this.image1 = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esCO/Images/How-to-Clean-Shoes-masthead-d_tcm195-1019194.jpg';
      this.image2 = 'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tYnJlJTIwc29ucmllbmRvfGVufDB8fDB8fHww';
      this.title = description;
      this.author = 'Digoberto Lobanette';
      this.intro = "Los tenis Adidas no solo son un símbolo de estilo y comodidad, sino también una inversión que merece ser cuidada. Con el tiempo, es inevitable que tus zapatillas favoritas acumulen suciedad y desgaste, pero no te preocupes, estamos aquí para ayudarte. En esta guía, descubrirás los secretos para lavar tus Adidas de manera efectiva, devolviéndoles ese aspecto fresco y listo para enfrentar cualquier desafío.";
      this.info1 = "Paso 1: Preparación";
      this.info2 = "Antes de sumergirte en el proceso de limpieza, asegúrate de retirar los cordones y plantillas de tus tenis Adidas. Esto facilitará la limpieza y garantizará que cada rincón reciba la atención que merece.";
      this.info3 = "Paso 2: Elimina el exceso de suciedad";
      this.info4 = "Utiliza un cepillo suave o un paño para eliminar el polvo y la suciedad superficial. Si encuentras manchas difíciles, puedes golpear suavemente los tenis para aflojar la suciedad antes de cepillar.";
      this.info5 = "Paso 3: Limpieza de las suelas";
      this.info6 = "Las suelas son una parte crucial de tus tenis, así que dales especial atención. Mezcla agua tibia con detergente suave y usa un cepillo de cerdas duras para fregar las suelas. Asegúrate de llegar a las áreas de difícil acceso y enjuaga con agua limpia.";
      this.info7 = "Paso 4: Lavado a mano";
      this.info8 = "Llena un recipiente con agua tibia y agrega unas gotas de detergente suave. Usa un cepillo suave o un paño para limpiar la parte superior de tus Adidas. No uses cepillos duros para evitar dañar el material.";
      this.info9 = "Paso 5: Enjuague y secado";
      this.info10 = "Enjuaga bien tus tenis para eliminar cualquier residuo de detergente. Luego, colócalos en un lugar bien ventilado para que se sequen al aire. Evita exponerlos directamente al sol o usar calor artificial, ya que esto puede afectar la calidad de los materiales.";
      this.info11 = "";
      this.info12 = "";
    }else if(description == "Paso a paso hacia la frescura: La guía definitiva para lavar tus Vans con estilo"){
      this.image1 = 'https://eci.contebio.com/material/contents/38293/1682494085_vans-circle-vee-1200x800.jpg';
      this.image2 = 'https://media.istockphoto.com/id/1399395748/es/foto/alegre-mujer-de-negocios-con-gafas-posando-con-las-manos-bajo-la-cara-mostrando-su-sonrisa-en.jpg?s=612x612&w=0&k=20&c=0y9KGEHKrwRUhZX2b7OH-SPUJ9t_HPf9Dle5khT77bg=';
      this.title = description;
      this.author = 'Lobaza Mantino';
      this.intro = "Cuando se trata de moda urbana y autenticidad, los tenis Vans son un ícono indiscutible. Ya sea que los uses para patinar, pasear por la ciudad o simplemente para destacar tu estilo, con el tiempo, estos compañeros confiables pueden necesitar un poco de cuidado adicional. En esta guía, te llevaremos a través de un proceso paso a paso para lavar y mantener tus Vans impecables, asegurándote de que cada paso que des siga siendo un testimonio de frescura y actitud.";
      this.info1 = "Paso 1: Preparación";
      this.info2 = "Antes de embarcarte en la misión de lavar tus Vans, quítate los cordones y retira las plantillas. Esto facilitará la limpieza y garantizará que cada rincón y grieta reciba la atención adecuada.";
      this.info3 = "Paso 2: Elimina la suciedad superficial";
      this.info4 = "Utiliza un cepillo suave o un paño para quitar la suciedad y el polvo acumulado en la superficie de tus Vans. Golpéalos suavemente para aflojar cualquier residuo antes de comenzar el proceso de limpieza.";
      this.info5 = "Paso 3: Limpieza de la suela";
      this.info6 = "Las suelas de tus Vans son como su tarjeta de presentación. Mezcla agua tibia con un detergente suave y usa un cepillo de cerdas duras para fregar las suelas. Presta especial atención a las áreas más sucias y enjuaga con agua limpia.";
      this.info7 = "Paso 4: Lavado de la parte superior";
      this.info8 = "Prepara una solución de agua tibia con detergente suave y usa un cepillo suave para limpiar la parte superior de tus Vans. Evita el uso de cepillos duros, especialmente si tus tenis tienen material delicado.";
      this.info9 = "Paso 5: Enjuague y secado";
      this.info10 = "Asegúrate de enjuagar bien tus Vans para eliminar cualquier residuo de detergente. Después, déjalos secar al aire en un lugar sombreado y bien ventilado. Evita la exposición directa al sol, ya que esto podría afectar la calidad de los materiales.";
      this.info11 = "Paso 6: Detalles y retoques finales";
      this.info12 = "Una vez que tus Vans estén secos, retoca cualquier área que necesite más atención. Puedes aplicar un protector para mantenerlos resistentes al agua y protegerlos contra futuras manchas.";
    }else if (description == 'Converse siempre en su mejor versión: La guía completa para lavar tus Chuck Taylors'){
      this.image1 = 'https://st1.uvnimg.com/dims4/default/65b566d/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Ft%2Ftenis-blancos-sucios-tenis-blancos-limpios.jpg';
      this.image2 = 'https://media.istockphoto.com/id/181096048/es/foto/mujer-madura-foto.jpg?s=612x612&w=0&k=20&c=9RJGl_bglV3TgyW5saczWvfpedeuFcyY1fQkBppnt5k=';
      this.title = description;
      this.author = 'Martensa Chuckmanoskizki';
      this.intro = "Los icónicos Chuck Taylors de Converse han sido un símbolo atemporal de estilo y autenticidad desde hace décadas. Ya sea que los uses para expresar tu creatividad o simplemente como tu calzado diario, es inevitable que estos fieles compañeros acumulen un poco de desgaste con el tiempo. Pero no te preocupes, esta guía está diseñada para ayudarte a lavar tus Converse y mantenerlos en su mejor versión. Descubre los secretos detrás del cuidado adecuado para que tus Chuck Taylors continúen siendo el complemento perfecto para cada paso que das.";
      this.info1 = "Paso 1: Preparación";
      this.info2 = "Antes de comenzar el proceso de limpieza, retira los cordones y las plantillas de tus Converse. Esto facilitará el acceso a todas las áreas y garantizará una limpieza más completa.";
      this.info3 = "Paso 2: Elimina el exceso de suciedad";
      this.info4 = "Utiliza un cepillo suave o un paño para quitar la suciedad y el polvo de la superficie de tus Chuck Taylors. Golpea suavemente los tenis para aflojar cualquier residuo antes de empezar la limpieza a fondo.";
      this.info5 = "Paso 3: Limpieza de las suelas";
      this.info6 = "Las suelas de tus Converse experimentan mucho desgaste. Mezcla agua tibia con un detergente suave y utiliza un cepillo de cerdas duras para limpiar las suelas. Presta especial atención a las áreas más sucias y enjuaga con agua limpia.";
      this.info7 = "Paso 4: Lavado de la parte superior";
      this.info8 = "Prepara una mezcla de agua tibia y detergente suave. Usa un cepillo suave para limpiar la parte superior de tus Converse. Evita el uso de cepillos duros para no dañar el material.";
      this.info9 = "Paso 5: Enjuague y secado";
      this.info10 = "Asegúrate de enjuagar bien tus Converse para eliminar cualquier residuo de detergente. Después, déjalos secar al aire en un lugar sombreado y bien ventilado. Evita la exposición directa al sol para preservar la calidad de los materiales.";
      this.info11 = "Paso 6: Detalles y retoques finales";
      this.info12 = "Una vez que tus Chuck Taylors estén secos, retoca cualquier área que necesite atención adicional. Puedes aplicar un protector para mantenerlos resistentes al agua y protegerlos contra futuras manchas.";
    }
  }
}

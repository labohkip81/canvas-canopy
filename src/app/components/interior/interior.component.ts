import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-interior',
  standalone: true,
  imports: [],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class InteriorComponent {

   // Swiper
   swiperConfig: SwiperOptions = {
    // spaceBetween: 10,
    navigation: true,
    // preventClicks: false,
    // slidesPerView: 'auto',
    // freeMode: true,
    // watchSlidesProgress: true,
    // noSwipingSelector: 'a',
    // focusableElements: 'input, select, option, textarea, video, label'
  }

}

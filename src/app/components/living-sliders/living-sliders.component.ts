import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-living-sliders',
  standalone: true,
  imports: [],
  templateUrl: './living-sliders.component.html',
  styleUrl: './living-sliders.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LivingSlidersComponent {

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

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AmenitiesComponent {


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

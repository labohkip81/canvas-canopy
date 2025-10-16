import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ImageGalleryComponent } from "../image-gallery/image-gallery.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ImageGalleryComponent, CommonModule, MaterialModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationComponent {


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

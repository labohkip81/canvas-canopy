import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper/types';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {

    constructor(private dialog: MatDialog){

    }


    openImageDialog(imageUrl:string): void {
      const dialogRef = this.dialog.open(ImageModalComponent, {
        data: { imageUrl: imageUrl }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }


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

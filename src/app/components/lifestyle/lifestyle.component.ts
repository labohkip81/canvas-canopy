import { Component } from '@angular/core';
import { GalleryComponent } from "../gallery/gallery.component";

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.css'
})
export class LifestyleComponent {

}

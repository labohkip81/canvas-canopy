import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { DownloadBrochureComponent } from '../download-brochure/download-brochure.component';
import { RoundMenuComponent } from "../round-menu/round-menu.component";
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [MaterialModule, RoundMenuComponent],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeBannerComponent {

  constructor(private dialog: MatDialog){}

  openDialog(){
    console.log('Dialog Opened')
    this.dialog.open(GetInTouchComponent, {maxHeight: '80vh'})
  }

}

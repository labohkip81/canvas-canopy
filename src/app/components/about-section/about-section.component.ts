import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { DownloadBrochureComponent } from '../download-brochure/download-brochure.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutSectionComponent {

  constructor(private dialog: MatDialog){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DownloadBrochureComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

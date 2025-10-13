import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './shared/material/material.module';
import { SidenavService } from './services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MaterialModule,
    RouterOutlet,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'canvas';

  constructor(private dialog: MatDialog){

  }

  openDialog(){
    this.dialog.open(GetInTouchComponent);
  }

  closeDialog(){
    this.dialog.closeAll()
  }
}

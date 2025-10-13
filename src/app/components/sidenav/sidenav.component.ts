import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialModule } from '../../shared/material/material.module';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule, MatButtonModule,
    MaterialModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidenavComponent {
  showFiller = false;

}

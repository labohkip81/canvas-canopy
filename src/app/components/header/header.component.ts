import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent implements OnInit {

  constructor(private Dialog: MatDialog, private sidenavService: SidenavService) {

  }





  openSideNav() {
    this.sidenavService.open();
  }


  openDialog() {
    this.Dialog.open(GetInTouchComponent)
  }




  isScrolled = false;
  isScrolledPast70 = false;
  isScrolledPast200Percent = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 600; // Adjust this value as needed
    this.isScrolledPast70 = offset > 200;
    this.isScrolledPast200Percent = offset > 2000;
  }

  scrollToElement($element: string): void {
    console.log($element);
    const element = document.getElementById($element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }





  // Lifecycle hooks
  ngOnInit(): void {
  }





}

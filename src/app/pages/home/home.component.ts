import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MaterialModule } from '../../shared/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { AmenitiesComponent } from "../../components/amenities/amenities.component";
import { LivingSlidersComponent } from "../../components/living-sliders/living-sliders.component";
import { FloorPlansComponent } from "../../components/floor-plans/floor-plans.component";
import { LocationComponent } from "../../components/location/location.component";
import { TeamComponent } from "../../components/team/team.component";
import { LifestyleComponent } from "../../components/lifestyle/lifestyle.component";
import { ArchSectionComponent } from '../../components/arch-section/arch-section.component';
import { LifestyleSectionComponent } from "../../components/lifestyle-section/lifestyle-section.component";
import { InteriorComponent } from "../../components/interior/interior.component";
import { PropertyHighlightsComponent } from "../../components/property-highlights/property-highlights.component";
import { MaterialsSectionComponent } from "../../materials-section/materials-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MaterialModule, CommonModule,
    HomeBannerComponent, AboutSectionComponent, AmenitiesComponent,
    LivingSlidersComponent, FloorPlansComponent, LocationComponent,
    TeamComponent,
    ArchSectionComponent, LifestyleComponent,
    LifestyleSectionComponent, InteriorComponent, PropertyHighlightsComponent, MaterialsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class HomeComponent {

  constructor(private dialog: MatDialog) {

  }



  openDialog() {
    this.dialog.open(
      GetInTouchComponent
    )
  }

}

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-floor-plans',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatTabsModule],
  templateUrl: './floor-plans.component.html',
  styleUrl: './floor-plans.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class FloorPlansComponent {

  loor: Array<any> = [0,1,2,3]
  selectedFloor: any = 0;

  selectFloor(){
    console.log('Called!')
    if(this.selectedFloor==0){
      this.selectedFloor = 1;
    } else {
      this.selectedFloor = 0;
    }
  }

  incrementFloor(){
    if (this.selectedFloor < 2) {
      this.selectedFloor = this.selectedFloor + 1;
    } else {
      this.selectedFloor = 0;
    }
  }


  decrementFloor(){
    if (this.selectedFloor > 0 ) {
      this.selectedFloor = this.selectedFloor - 1;
    } else {
      this.selectedFloor = 2;
    }
  }




  constructor(public dialog: MatDialog) {}




  openDialog(): void {

  }

}

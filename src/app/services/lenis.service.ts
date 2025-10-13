import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenisService {


  constructor(private ngZone: NgZone) {}

 

  scrollTo(target: string | HTMLElement | number, options: any = {}) {
    console.log("Called@")
  }

}

import { Directive, ElementRef } from '@angular/core';
import { environment } from '../environments/environment';
@Directive({
  selector: '[appProdImage]',
})
export class ProdImageDirective {
  constructor(el: ElementRef) {
    const path = el.nativeElement.src;
    el.nativeElement.src = environment.production
      ? `${environment.cdn}/${path}`
      : path;
  }
}

import { Directive, ElementRef } from '@angular/core';
import { environment } from '../environments/environment';
@Directive({
  selector: '[appProdImage]',
})
export class ProdImageDirective {
  constructor(el: ElementRef) {
    //storing original src as title.
    const path = el.nativeElement.title;

    el.nativeElement.src = environment.production
      ? `${environment.cdn}/${path}`
      : path;
  }
}

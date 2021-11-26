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
@Directive({
  selector: '[appProdLink]',
})
export class ProdLinkDirective {
  constructor(el: ElementRef) {
    const href = el.nativeElement.href;

    el.nativeElement.href = environment.production
      ? `${environment.cdn}/${href}`
      : href;
  }
}

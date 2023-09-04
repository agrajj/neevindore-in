import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLanguage: string = localStorage.getItem('language') || 'en';

  constructor(private translocoService: TranslocoService) {}

  onChange(target: any) {
    this.translocoService.setActiveLang(target.value);
    localStorage.setItem('language', target.value);
  }
}

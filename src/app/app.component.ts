import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLanguage: string = localStorage.getItem('language') || 'en';

  heroImages = [
    // `url(../img/main.jpg)`,
    `url(../img/main1.jpeg)`,
    // `url(../img/main2.jpeg)`,
    // // `url(../img/main3.jpeg)`,
    // `url(../img/main4.jpeg)`,
    // `url(../img/main5.jpeg)`,
  ];
  heroImageIndex = 0;

  mainImage: string = this.heroImages[0];

  constructor(private translocoService: TranslocoService) {
    this.heroImageRotator();
  }

  heroImageRotator() {
    setInterval(() => {
      this.heroImageIndex =
        this.heroImageIndex === this.heroImages.length - 1
          ? 0
          : this.heroImageIndex + 1;
    }, 5000);
  }

  onChange(target: any) {
    this.translocoService.setActiveLang(target.value);
    localStorage.setItem('language', target.value);
  }
}

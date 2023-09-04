import { Component } from '@angular/core';
import { environment } from '../environments/environment';
const prod = (path: string) =>
  environment.production ? `${environment.cdn}/${path}` : path;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'neevindore-in';
  logo = prod(`images/logo.jpeg`);
}

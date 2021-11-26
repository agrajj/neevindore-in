import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdImageDirective, ProdLinkDirective } from './prod-image.directive';

@NgModule({
  declarations: [AppComponent, ProdImageDirective, ProdLinkDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

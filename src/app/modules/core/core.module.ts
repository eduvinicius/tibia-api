import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }

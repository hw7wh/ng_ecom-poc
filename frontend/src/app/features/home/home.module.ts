import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CtaComponent } from './components/cta/cta.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';


@NgModule({
  declarations: [
    HomeComponent,
    CtaComponent,
    AnnouncementsComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { HeroAboutComponent } from './components/about/hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CtaComponent } from './components/storefront/cta/cta.component';
import { AnnouncementsComponent } from './components/storefront/announcements/announcements.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FeaturedComponent } from './components/storefront/featured/featured.component';
import { LogocloudComponent } from './components/storefront/logocloud/logocloud.component';
import { HeroComponent } from './components/storefront/hero/hero.component';
import { OverviewComponent } from './components/storefront/overview/overview.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightsComponent } from './components/about/highlights/highlights.component';
import { TeamComponent } from './components/about/team/team.component';


@NgModule({
  declarations: [
    HomeComponent,
    CtaComponent,
    AnnouncementsComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    LogocloudComponent,
    HeroComponent,
    OverviewComponent,
    StorefrontComponent,
    AboutComponent,
    ContactComponent,
    HeroAboutComponent,
    HighlightsComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

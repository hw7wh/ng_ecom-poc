import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileMenuOpen = false;
  activeTab = '';  // default to 'women'

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  setActiveTab(tab: string) {
    if ( tab === this.activeTab ){
      this.activeTab = '';
      return
    }


    this.activeTab = tab;
  }

}

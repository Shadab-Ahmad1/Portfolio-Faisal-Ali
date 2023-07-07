import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const scrollContainer = document.querySelector('.user-profile-detail');
        if (scrollContainer) {
        console.log(scrollContainer)
          scrollContainer.scrollTop = 0;
        }
      }
    });
  }
isPortfolioActive(): boolean {
  const currentUrl = this.router.url;
  return currentUrl.includes('portfolio') || currentUrl.includes('UI/UX') || currentUrl.includes('graphic-designing');
}

  
}

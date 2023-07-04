import { Component, HostListener, OnInit , } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  isDesktop: boolean = true; // Flag to track if the current view is desktop
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkViewport();
  }
  isOpen = false;
  isOpenProfile = false;
  activeRoute: string | undefined;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveRoute(event.urlAfterRedirects);
      });
      this.checkViewport();
  }
  setActiveRoute(url: string) { 
      this.activeRoute = url.slice(1);
  }
  isPortfolioActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('portfolio') || currentUrl.includes('UI/UX') || currentUrl.includes('portfolioDetails');
  }
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
  toggleProfileSidebar() {
    this.isOpenProfile = !this.isOpenProfile;
  }
  checkViewport() {
    this.isDesktop = window.innerWidth >= 1024; // Adjust the breakpoint as per your design
    
    // Additional logic or adjustments based on the viewport width can be implemented here
  }

}

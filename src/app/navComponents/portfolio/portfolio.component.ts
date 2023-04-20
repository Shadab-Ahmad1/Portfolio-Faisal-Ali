import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public loading = false;
  constructor(private router: Router) {}

  public categories = [
    {
      name: 'All',
      images: [
        'portfolio/port1.jpg',
        'portfolio/port2.png',
        'portfolio/port3.png',
        'portfolio/port4.png',
        'portfolio/port5.jpg',
        'portfolio/port6.jpg',
        'portfolio/port7.jpg',
        'portfolio/port8.png',
        'portfolio/port9.png',
      ],
      categoryHeading: 'All',
    },
    {
      name: 'Web Design',
      images: [
        'portfolio/port1.jpg',
        'portfolio/port2.png',
        'portfolio/port3.png',
      ],
      categoryHeading: 'Web design',
    },
    {
      name: 'Photography',
      images: [
        'portfolio/port4.png',
        'portfolio/port5.jpg',
        'portfolio/port6.jpg',
      ],
      categoryHeading: 'Photography',
    },
    {
      name: 'Graphic Designing',
      images: [
        'portfolio/port7.jpg',
        'portfolio/port8.png',
        'portfolio/port9.png',
      ],
      categoryHeading: 'Graphic Designing',
    },
  ];
  currentCategory: any = this.categories[0];

  ngOnInit(): void {}
  showCategory(category: any) {
    this.loading = true;
    setTimeout(() => {
      this.currentCategory = category;
      this.loading = false;
    }, 500);
  }
  gotoDetails(id: number) {
    // console.warn(id)
    this.router.navigate(['/portfolioDetails', id]);
  }
}

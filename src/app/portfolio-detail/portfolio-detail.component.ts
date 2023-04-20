import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
})
export class PortfolioDetailComponent implements OnInit {
  public detailImages: any;
  public id: number | undefined;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      // const detailImages =
      //   this.route.snapshot.queryParamMap.getAll('detailImages'); // Get the detail images array from the route parameters
      // if (detailImages) {
      //   this.detailImages = detailImages; // Parse the JSON string to an array if detailImages is defined and not null
      // }
      this.detailImages = window.history.state.images;
      console.log(this.id);
      console.log(this.detailImages);
    });
  }

  goback() {
    this.location.back();
  }
}

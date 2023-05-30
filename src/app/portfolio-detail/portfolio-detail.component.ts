import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background: linear-gradient(109.64deg, #1d1a1f -0.28%, #2f3f4b 100%);
      }
    `,
  ],
})
export class PortfolioDetailComponent implements OnInit {
  @ViewChild('myDiv') myDiv: any;
  public imgSrc: string | undefined;
  public closeResult: string = '';
  public bgImage: string | undefined;
  public selected: any | undefined;
  public selectedCategory: any | undefined;
  public detailImages: any;
  public id: number | undefined;
  public currentImageIndex = 0;
  categoryRanges:any = {
    'Category1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
  };
  
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.detailImages = window.history.state.images;
      this.bgImage = window.history.state.bgImage;
      this.selected = window.history.state.selected;
      this.currentImageIndex = this.selected.index;

      for (const category in this.categoryRanges) {
        if (this.categoryRanges[category].includes(this.id)) {
          this.selectedCategory = category;
          break;
        }
      }
    });
  }
 public onClick(event: any, content: any, image:any) {
    this.currentImageIndex = this.detailImages.indexOf(image);
    this.modalService
      .open(content, {
        // fullscreen: true,
        centered: true,
        windowClass: 'custom-modal',
        backdropClass: 'custom-backdrop',
        // size: 'xl',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }
  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public  goback(): void {
    this.Router.navigate(['graphic-designing']);
  }
  public gobacktoUi(): void {
    const selectedItemId = this.selected.id; 
    this.Router.navigate(['UI/UX'], { 
      queryParams: { selectedItemId },
      fragment: 'portfolioItem-' + selectedItemId, 
    });
  }
  
  

  public previousImage(): void {
    this.currentImageIndex--;
    const previousImageId = this.selected.category[this.currentImageIndex]?.id;
    if (previousImageId) {
      this.Router.navigate(['portfolioDetails', previousImageId], {
        state: {
          images: this.detailImages,
          bgImage: this.bgImage,
          selected: {
            ...this.selected,
            index: this.currentImageIndex
          }
        },
      });
    }
  }
  
public nextImage(): void {
  this.currentImageIndex++;
  const nextImageId = this.selected.category[this.currentImageIndex]?.id;
  if (nextImageId) {
    this.Router.navigate(['portfolioDetails', nextImageId], {
      state: {
        images: this.detailImages,
        bgImage: this.bgImage,
        selected: {
          ...this.selected,
          index: this.currentImageIndex
        }
      },
    });
  }
}
  public onClose(){
  this.modalService.dismissAll();
}
scrollToTop(){
  this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UIUXComponent implements OnInit {


  public loading = false;
  constructor(private router: Router , private service:CommonServiceService,
    private route: ActivatedRoute, private elementRef: ElementRef) { }

  public categories = [
    {
      name: 'Mockups',
      images: [
        { id: 1,projectName:'Soda-Digital',thumbnailImage:'portfolio/mockups/soda-digital-thumbnail.jpg', path: 'portfolio/mockups/soda-digital.jpg' },
        { id: 2,thumbnailImage:'portfolio/mockups/stratagem-thumbnail.jpg', path: 'portfolio/mockups/stratagem.jpg' },
        { id: 3,thumbnailImage:'portfolio/mockups/webisoft-thumbnail.jpg', path: 'portfolio/mockups/webisoft.jpg' },
        { id: 4,thumbnailImage:'portfolio/mockups/growthlab-thumbnail.jpg', path: 'portfolio/mockups/Growth-lab.jpg' },
        { id: 5,thumbnailImage:'portfolio/mockups/BrainHub-Thumbnail.jpg', path: 'portfolio/mockups/brainhub.jpg' },
        { id: 6,thumbnailImage:'portfolio/mockups/Codec-Thumbnail.jpg', path: 'portfolio/mockups/Codec.jpg' },
        { id: 7,thumbnailImage:'portfolio/mockups/codigodelsur-thumbnail.jpg', path: 'portfolio/mockups/Codiigodelsur.jpg' },
        { id: 8,thumbnailImage:'portfolio/mockups/createIT-Thumbnail.jpg', path: 'portfolio/mockups/CreateIT.jpg' },
        { id: 9,thumbnailImage:'portfolio/mockups/defaultvalue-Thumbnail.jpg', path: 'portfolio/mockups/Default-value.jpeg' },
        { id: 10,thumbnailImage:'portfolio/mockups/divante-Thumbnail.jpg', path: 'portfolio/mockups/Divante.jpg' },
        { id: 11,thumbnailImage:'portfolio/mockups/lonely-planet-thumbnail.jpg', path: 'portfolio/mockups/Lonelyplanet.jpg' },
        { id: 12,thumbnailImage:'portfolio/mockups/Memory-Squared.jpg', path: 'portfolio/mockups/Memory.jpg' },
        { id: 13,thumbnailImage:'portfolio/mockups/monterail-Thumbnail.jpg', path: 'portfolio/mockups/monterail.jpeg' },
        { id: 14,thumbnailImage:'portfolio/mockups/socialdriver-Thumbnail.jpg', path: 'portfolio/mockups/Social-Driver-min.jpg' },
        { id: 15,thumbnailImage:'portfolio/mockups/socialfix-Thumbnail.jpg', path: 'portfolio/mockups/socialfix.jpg' },
        { id: 16,thumbnailImage:'portfolio/mockups/sungroup-Thumbnail.jpg', path: 'portfolio/mockups/Sun-o-group.jpg' },
        { id: 17,thumbnailImage:'portfolio/mockups/grupa-Thumbnail.jpg', path: 'portfolio/mockups/Grupa-kmk.jpg' },
        { id: 18,thumbnailImage:'portfolio/mockups/investnext-thumbnail.jpg', path: 'portfolio/mockups/investnext-casestudy.jpg' },
        { id: 19,thumbnailImage:'portfolio/mockups/lama-media-thumbnail.jpg', path: 'portfolio/mockups/Lama-Media-min.jpg' },
        { id: 20,thumbnailImage:'portfolio/mockups/lingaro-Thumbnail.jpg', path: 'portfolio/mockups/Lingaro.jpg' },
        { id: 21,thumbnailImage:'portfolio/mockups/Absolute-Web-thumbnail.jpg', path: 'portfolio/mockups/absolute-web.jpg' },
        { id: 22,thumbnailImage:'portfolio/mockups/Appetiser-Apps-thumbnail.jpg', path: 'portfolio/mockups/Appetiser-apps.jpg' },
        { id: 23,thumbnailImage:'portfolio/mockups/DataArt-thumbnail.jpg', path: 'portfolio/mockups/data-art.jpg' },
        { id: 24,thumbnailImage:'portfolio/mockups/fmd-thumbnail.jpg', path: 'portfolio/mockups/FMD.jpg' },
        { id: 25,thumbnailImage:'portfolio/mockups/GojiLabs-thumbnail.jpg', path: 'portfolio/mockups/Goji-labs.jpg' },
        { id: 26,thumbnailImage:'portfolio/mockups/kitameraki-thumbnail.jpg', path: 'portfolio/mockups/kitameraki.jpg' },
        { id: 27,thumbnailImage:'portfolio/mockups/launchboom-thumbnail.jpg', path: 'portfolio/mockups/Launchboom.jpg' },
        { id: 28,thumbnailImage:'portfolio/mockups/momentum-thumbnail.jpg', path: 'portfolio/mockups/momentum.jpg' },
        { id: 29,thumbnailImage:'portfolio/mockups/parkhill-thumbnail.jpg', path: 'portfolio/mockups/Parkhill.jpg' },
        { id: 30,thumbnailImage:'portfolio/mockups/thumbnail-waymax.jpg', path: 'portfolio/mockups/Waymark.jpg' },
        { id: 31,thumbnailImage:'portfolio/mockups/stotek-thumbnail.jpg', path: 'portfolio/mockups/sotatek.jpg' },
        { id: 32,thumbnailImage:'portfolio/mockups/SPACEDEV-thumbnail.jpg', path: 'portfolio/mockups/Space.jpg' },
        { id: 33,thumbnailImage:'portfolio/mockups/Pinnacle-thumbnail.jpg', path: 'portfolio/mockups/Pinaccle.jpg' },
        { id: 34,thumbnailImage:'portfolio/mockups/Pixelplex-thumbnail.jpg', path: 'portfolio/mockups/Pixel-plex.jpg' },
      ],
      categoryHeading: 'Mockups',
    }
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }
  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const selectedItemId = params['selectedItemId']; 
      if (selectedItemId) {
        const element = this.elementRef.nativeElement.querySelector('#portfolioItem-' + selectedItemId);
         const url = `/#/UI/UX`;
         history.pushState(null, '', url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
     
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      index: i 
    };
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }

}

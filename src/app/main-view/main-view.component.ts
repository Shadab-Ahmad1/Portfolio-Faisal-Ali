import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  backgroundImages: string[] = [
    'url(/assets/img/Texture-1.jpg)',
    'url(/assets/img/Texture-2.jpg)',
    'url(/assets/img/Texture-3.jpg)'
  ];
    currentBackgroundIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeBackground();
    }, 3000);
  }
  
  changeBackground(): void {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
  }

  parallax(event: MouseEvent): void {
    const layers = document.querySelectorAll('.shapes .circles') as NodeListOf<HTMLElement>;
    layers.forEach(layer => {
      const speed = +layer.getAttribute('data-speed')!;
      const x = (window.innerWidth - event.pageX * speed*3) / 100;
      const y = (window.innerHeight - event.pageY * speed*3) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}

import { Component, Input } from '@angular/core';

interface carouselImage{
  // imgSrc:string,
  // imgAlt:string
  quotes:string,
  name:string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() quotes:carouselImage[]=[]
  @Input() indicators = true;
  @Input() autoSlide=false;
  @Input() slideInterval=3000;
  @Input() controls=true
  selectedIndex=0;
ngOnInit(){
  if(this.autoSlide){
this.autoSlideImage()
  }
}

autoSlideImage(){
  setInterval(()=>{
    this.next();
  },this.slideInterval);
}

//   selectedImage(index:number){
// this.selectedIndex=index;
//   }

  prev(){
    if(this.selectedIndex == 0){
      this.selectedIndex = this.quotes.length -1;
    }
    else{
      this.selectedIndex--;
    }
  }


  next(){
    if(this.selectedIndex == this.quotes.length -1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
}

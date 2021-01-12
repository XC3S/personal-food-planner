import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper/public-api';
import { Category, DataService } from '../services/data.service';

@Component({
  selector: 'category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss']
})
export class CategoryCarouselComponent implements OnInit {
  @Input() category: Category;
  index: Number = 0;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.index = this.dataService.getStoreValue(this.getStoreActiveSlideKey()) | 0;
  }

  getRecipe(recipeId: string) {
    return this.dataService.getRecipeById(recipeId);
  }

  indexChange() {
    // request animation frame to wait until the index is updated 
    requestAnimationFrame(() => {
      this.dataService.setStoreValue(this.getStoreActiveSlideKey(), this.index);
    });
  }

  getStoreActiveSlideKey():string {
    return `category_carousel_${this.category.id}_slide`;
  }

}

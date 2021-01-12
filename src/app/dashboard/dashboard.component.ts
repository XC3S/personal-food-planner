import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Thumbs } from 'swiper';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getCategories(){
    return this.dataService.getCategories()
  }

  getRecipe(recipeId: string) {
    return this.dataService.getRecipeById(recipeId);
  }

  indexChange(index) {
    //TODO: https://github.com/zefoy/ngx-swiper-wrapper#use-it-in-your-html-template-with-custom-configuration
    // - use [(index)]="index", and create a carousel component
    // - use DataStoreage KeyStore to save and load current index
    console.log('[indexChange] ', index);
  }
}

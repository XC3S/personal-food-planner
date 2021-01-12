import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  recipeId: string;

  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.recipeId = this._route.snapshot.paramMap.get('recipeId');
  }

  getRecipe() {
    return this.dataService.getRecipeById(this.recipeId)
  }

}

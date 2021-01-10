import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Recipe {
  id: string
  image: string
  title: string
}

export  interface Category {
  id: string
  title: string
  recipeIds: string[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categories: Category[];
  recipies: Recipe[];

  constructor() { 
    this.categories = [
      {
        id: '2-001',
        title: 'Super Simple',
        recipeIds: ['000-001','000-002','000-003']
      }
    ];

    this.recipies = [
      {
        id: '000-001',
        title: 'Pizza',
        image: 'https://images.unsplash.com/photo-1571407921708-4202261ea9e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
      },
      {
        id: '000-002',
        title: 'Burger',
        image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
      },
      {
        id: '000-003',
        title: 'Salad',
        image: 'https://images.unsplash.com/photo-1599021409369-c63af30619db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&&w=300&h=200&q=80'
      }
    ];
  }

  getRecipeById(recipeId: string): Observable<Recipe> {
    return new Observable(observer => {
      const res = this.recipies.filter(recipe => recipe.id === recipeId);
      if( res.length > 0 ) {
        observer.next(res[0])
      }
      else {
        observer.next({} as Recipe)
      }
    })
  }
  
  getCategories(): Observable<Category[]> {
    return new Observable(observer => {
      observer.next(this.categories)
    })
  }
}

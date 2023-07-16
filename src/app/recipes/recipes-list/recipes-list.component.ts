import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() showSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe A', 'This is recipe A.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Recipe B', 'This is recipe B.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];


  OnSelect(item: Recipe){
    this.showSelectedRecipe.emit(item);
  }
  
}

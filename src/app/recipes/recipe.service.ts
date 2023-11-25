import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('A test Recipe','This is simply a test','https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg'),
        new Recipe('Another test Recipe','This is simply a test','https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg')
      ];

   getRecipes() {
    return this.recipes.slice();
   }   
}
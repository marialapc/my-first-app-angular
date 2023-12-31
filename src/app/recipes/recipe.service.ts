import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

 @Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'This is simply a test',
            'https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big fat burger',
            'what do yo need?',
            'https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg',
             [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
     return this.recipes.slice();
    }   

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
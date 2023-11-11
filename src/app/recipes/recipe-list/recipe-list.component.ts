import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply a test','https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg'),
    new Recipe('A test Recipe','This is simply a test','https://www.annarecetasfaciles.com/files/miniatura-6-1024x575.jpg')
  ];

 constructor() { }
}

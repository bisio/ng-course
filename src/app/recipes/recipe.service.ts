import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();


  constructor(private shoppingListService: ShoppingListService){

  }

  private recipes: Recipe[] = [
    new Recipe('Fregna in Umido', 
    'This is simply a test', 
    'https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-2.jpg',
    [new Ingredient('fregna',1),
     new Ingredient('pomodoro', 2) ]),
    new Recipe('Tette alla griglia',
     'This is another test', 
     'https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-2.jpg',
     [ new Ingredient('tette', 2),
       new Ingredient('aglio', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients){
    this.shoppingListService.addIngredients(ingredients);
  } 

}

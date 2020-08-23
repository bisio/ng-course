import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    shoppingListUpdated = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
 
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListUpdated.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppingListUpdated.emit(this.ingredients.slice());
    }
    
    getIngredients() {
        return this.ingredients.slice();
    }
}
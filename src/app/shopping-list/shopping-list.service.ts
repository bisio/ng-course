import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { fromEventPattern } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    shoppingListUpdated = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
 
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListUpdated.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppingListUpdated.next(this.ingredients.slice());
    }
    
    getIngredients() {
        return this.ingredients.slice();
    }
}
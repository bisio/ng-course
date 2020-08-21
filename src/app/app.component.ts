import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';
  showRecipes = true;
  showShoppingList = false;
  currentRecipe: Recipe;

  onMenuEvent(event: string) {
    if (event === 'recipes'){
      this.showRecipes = true;
      this.showShoppingList = false;
    } else {
      this.showShoppingList = true;
      this.showRecipes = false;
    }
    console.log(event);
  }

}

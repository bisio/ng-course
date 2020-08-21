import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-2.jpg'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-2.jpg'),
    
  ];
  @Output()
  recipeSelectedEvent = new EventEmitter<Recipe>();
  constructor() {
   }

  ngOnInit(): void {
  }

  onRecipeSelectedEvent(recipe: Recipe){
    this.recipeSelectedEvent.emit(recipe);
    console.log("got %o", recipe);
  }

}

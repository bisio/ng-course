import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output()
  recipeSelectedEvent = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) {
   }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  onRecipeSelectedEvent(recipe: Recipe){
    this.recipeSelectedEvent.emit(recipe);
    console.log("got %o", recipe);
  }

}

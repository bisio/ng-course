import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.loadIngredients();
    this.subscription = this.shoppingListService.shoppingListUpdated.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }

  loadIngredients() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

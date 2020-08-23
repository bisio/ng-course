import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", {static: false})
  nameInput: ElementRef;
  @ViewChild("amountInput", {static: false})
  amountInput: ElementRef;

  @Output()
  newIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService:  ShoppingListService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));    
  }
}

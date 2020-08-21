import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value));
  }
}

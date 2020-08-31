import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output()
  menuEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSelectRecipes() {
    console.log("clicked recipes");
//    this.menuEvent.emit("recipes");
  }

  onSelectShoppingList() {
    console.log("clicked shopping list");
//    this.menuEvent.emit("shopping-list");
  }

}

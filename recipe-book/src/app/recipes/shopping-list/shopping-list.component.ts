import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor(private sts: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sts.getItems();
  }

}

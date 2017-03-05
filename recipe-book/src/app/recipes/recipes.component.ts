import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  @Output() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredients";

@Injectable()
export class RecipeService {
  private   recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Dummy 2', 'Dummy 2', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}

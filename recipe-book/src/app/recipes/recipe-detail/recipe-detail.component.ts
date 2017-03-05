import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;
  constructor(private sts: ShoppingListService,
              private route: ActivatedRoute,
              private reciperService: RecipeService,
              private router: Router) {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex =  params['id'];
        this.selectedRecipe = this.reciperService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnInit() {

  }

  onAddToShoppingList() {
    this.sts.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.reciperService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

}

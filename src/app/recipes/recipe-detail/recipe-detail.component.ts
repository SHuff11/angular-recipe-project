import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;

  constructor(private slService: ShoppingListService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private recipeService: RecipeService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let index = +params['id']
        this.recipe = this.recipeService.getRecipe(index)
        
      }
    )
  }

  
  toShopList() {
      this.slService.addIngredients(this.recipe.ingredients);
      this.router.navigate['/shop'];
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipePage } from './recipe-page';

@NgModule({
  declarations: [
    RecipePage,
  ],
  imports: [
    IonicPageModule.forChild(RecipePage),
  ],
  exports: [
    RecipePage
  ]
})
export class RecipePageModule {}

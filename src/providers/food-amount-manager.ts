import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
<<<<<<< HEAD





=======
import { AlertController } from 'ionic-angular';
import { Database } from '../providers/database';
import { Storage } from '@ionic/storage';
>>>>>>> origin/master
/*
  Generated class for the FoodAmountManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FoodAmountManager {
  isFoodExpiring: boolean;
  iteratedItems: string;
  displayedFood: string;
  listItems: any[] = [];


  constructor(public http: Http, public db: Database, public alertCtrl: AlertController,
    private storage: Storage) {

    console.log('Hello FoodAmountManager Provider');

  }

<<<<<<< HEAD
  totalFoodAmount() {
=======
  listItemsToString(items: any[] = []){
    var i: number = 0;
    for (i = 0; i < items.length; i++){
      this.iteratedItems = items[i];
    }
    return this.iteratedItems;
  }

  displayListItems(item: string){
    this.storage.get(item).then((values) => {
      this.displayedFood = values;
    });
    return this.displayedFood;
>>>>>>> origin/master
  }

addItem() {
  let addFood = this.alertCtrl.create({
    title: 'Add Food',
    inputs: [{
      name: 'title'
    }],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log("Cancel Clicked");
        }
      },
      {
        text: 'Add Item',
        handler: data => {
          this.listItems.push(data);
          localStorage.set("food items", this.listItemsToString(this.listItems));
        }
      }
    ]
  });
  addFood.present();
}

editItem(item){

  let editFood = this.alertCtrl.create({
    title: 'Change food item',
    inputs: [{
      name: 'title'
    }],
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: (data) => {
          let index = this.listItems.indexOf(item);

          if (index > -1){
            this.listItems[index] = data;
          } else {
            throw new Error("Error, index out of bounds");
          }
        }
      }
    ]
  });
  editFood.present();
}

deleteFood(item){
  let index = this.listItems.indexOf(item);

  if (index > -1){
    this.listItems.splice(index, 1);
  } else {
    throw new Error("Error, index out of bounds");
    }
  }

  getTotalFood(): number {
    return this.listItems.length;
  }
}

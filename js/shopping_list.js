/* jshint esversion: 6 */

class ShoppingList{

constructor(){
  this.items = [];

  }

  addItem(item){
  if(item instanceof ShoppingListItem){

      this.items.push(item);

      return this.items;


    }else{

      throw new Error('Error');
    }

  }

}



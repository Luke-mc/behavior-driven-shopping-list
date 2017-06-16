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

  removeItem(item){
    var itemLocation = this.items.indexOf(item);
    if(item === undefined){
      this.items.pop();
    } else if(itemLocation === -1){
      throw new Error('Error');
    } else{
      this.items.splice(itemLocation, 1);
    }
  }

}



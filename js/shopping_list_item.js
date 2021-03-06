/* jshint esversion: 6 */




class ShoppingListItem{
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
    return this.is_done;
  }

  uncheck(){
    this.is_done = false;
    return this.is_done;
  }

  render(){


    /*return `<li class="completed_${this.is_done}"> \ <span>${this.name}</span>  \ <span>${this.description}</span> \ <input class = 'checkBox' type = "checkbox" ${this.is_done ? "checked" : ""}> \ </li> `;*/
     return ` <span>${this.name}</span>  \ <span>${this.description}</span> \ <input class = 'checkBox' id = "checkBox${count}" type = "checkbox" ${this.is_done ? "checked" : ""}> `;
  }

}





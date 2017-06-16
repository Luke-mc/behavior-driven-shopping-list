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
/*    var createLi = document.createElement("li");
    createLi.className = "completed_" + this.is_done;
    body.appendChild(createLi);
    var createSpan1 = document.createElement("span");
    createSpan1.innerHTML = this.name;
    createLi.appendChild(createSpan1);
    var createSpan2 = document.createElement("span");
    createSpan2.innerHTML = this.description;
    createLi.appendChild(createSpan2);*/
    return `<li class="completed_${this.is_done}"><span>${this.name}</span> <span>${this.description}</span></li>`;
  }

}


module.exports = ShoppingListItem;




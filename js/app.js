

var targetButton = document.getElementById("add_shopping_list_item_button");
var targetTitle = document.getElementById("title");
var targetDescription = document.getElementById("description");
var targetContent = document.getElementById("content");
var check = document.getElementsByClassName("checkBox");
var targetUl = document.getElementById("listUl");

var newList = new ShoppingList();


var new_shopping_list_item;
var listArray = [];
var count = -1;
var newItem;
var newLi;

function add_to_shopping_list(){
  new_shopping_list_item = new ShoppingListItem(targetTitle.value, targetDescription.value);
  newList.addItem(new_shopping_list_item);
  count ++;
  newLi = document.createElement("li");
  newLi.className = "completed_false";
  newLi.innerHTML = newList.items[newList.items.length - 1].render();
  targetUl.appendChild(newLi);

  (function(idx){
     document.getElementById("checkBox" + idx).addEventListener("change", function(){
      if(this.checked === true){
        newList.items[idx].check();
      } else if(this.checked === false){
        newList.items[idx].uncheck();
      }
    });
  }(count));

  console.log(newList.items);
}

targetButton.addEventListener("click", add_to_shopping_list);



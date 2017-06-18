

var targetButton = document.getElementById("add_shopping_list_item_button");
var targetTitle = document.getElementById("title");
var targetDescription = document.getElementById("description");
var targetContent = document.getElementById("content");
var check = document.getElementsByClassName("checkBox");

var newList = new ShoppingList();


var new_shopping_list_item;

function add_to_shopping_list(){
  new_shopping_list_item = new ShoppingListItem(targetTitle.value, targetDescription.value);
  newList.addItem(new_shopping_list_item);
  targetContent.innerHTML = newList.render();

}

targetButton.addEventListener("click", add_to_shopping_list);




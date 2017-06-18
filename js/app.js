

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
  /*targetContent.innerHTML = newList.render();*/
  newLi = document.createElement("li");
  newLi.className = "completed_false";
  newLi.id = count;
  newLi.innerHTML = newList.items[newList.items.length - 1].render();
  targetUl.appendChild(newLi);


  for(var i = 0; i<check.length; i++){
    check[i].addEventListener("change", function(){
      if(this.checked === true){
        newList.items[count].check();
      } else if(this.checked === false){
        newList.items[count].uncheck();
      }
    });
  }
  console.log(newList.items);
}

targetButton.addEventListener("click", add_to_shopping_list);



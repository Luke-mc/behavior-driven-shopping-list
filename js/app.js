

var targetButton = document.getElementById("add_shopping_list_item_button");
var targetTitle = document.getElementById("title");
var targetDescription = document.getElementById("description");
var targetContent = document.getElementById("content");
var check = document.getElementsByClassName("checkBox");

var newList = new ShoppingList();


var new_shopping_list_item;
var listArray = [];
var count = -1;
var newItem;

function add_to_shopping_list(){
  new_shopping_list_item = new ShoppingListItem(targetTitle.value, targetDescription.value);
  newList.addItem(new_shopping_list_item);
  targetContent.innerHTML = newList.render();
  count ++;
/*  check[0].onchange = function(){
    if(this.checked){
      console.log("checked");
    } else{
      console.log("not checked");
    }
  };*/
/*  check[0].addEventListener("change", function(){
    console.log("hello");
  });*/
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



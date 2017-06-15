var chai = require('chai');

var expect = chai.expect;

var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

var ShoppingList = require('../js/shopping_list.js');


describe('ShoppingListItem Class', function(){

  var shoppingListItem = ShoppingListItem;

  it ('should be a function', function(){
    expect(shoppingListItem).to.be.a('function');
  });

});


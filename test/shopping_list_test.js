

var expect = chai.expect;
var should = chai.should();



describe('ShoppingListItem Class', function(){

  var shoppingListItem = ShoppingListItem;

  var apple;

  beforeEach(function(){
    apple = new ShoppingListItem("apple", "red");
  });

  it ('should be a function', function(){
    expect(shoppingListItem).to.be.a('function');
  });

  it("should have a property named name", function(){
    expect(apple.name).to.equal("apple");
  });

  it("should have a property named description", function(){
    expect(apple.description).to.equal("red");
  });

  it("should have a property named is_done", function(){
    expect(apple.is_done).to.equal(false);
  });

  it("should have a constructor method that accepts 2 arguments", function(){
    expect(apple = new ShoppingListItem("apple", "red")).to.equal(apple);
  });

   it("should have a method named check()", function(){
    expect(apple.check).to.be.a('function');
    expect(apple.check()).to.equal(apple.is_done = true);
  });

   it("should have a method named uncheck()", function(){
    expect(apple.uncheck).to.be.a('function');
    expect(apple.uncheck()).to.equal(apple.is_done = false);
  });

  it("should have a method named render()", function(){
    expect(apple.render).to.be.a('function');
    expect(apple.render()).to.equal(`<li class="completed_${apple.is_done}"><span>${apple.name}</span> <span>${apple.description}</span></li>`);
  });


});

describe('ShoppingList Class', function(){

  var shoppingList = ShoppingList;

  var list1;

  beforeEach(function(){
    list1 = new ShoppingList();
  });

  var apple;

  beforeEach(function(){
    apple = new ShoppingListItem("apple", "red");
  });

  it ('should be a function', function(){
    expect(shoppingList).to.be.a('function');
  });

  it("should have a property named items", function(){
    expect(list1.items).to.be.a("array");
  });

  it("should have a method named addItem()", function(){
    expect(list1.addItem).to.be.a('function');

  });

  it("addItem() method should add that object to the items array", function(){
    list1.addItem(apple).should.contain(apple);
  });

  it("addItem() method should not take in an argument that is not a ShoppingListItem ", function(){

    expect(list1.addItem).to.throw(Error);
  });

  it("should have a method named removeItem()", function(){
    expect(list1.removeItem).to.be.a('function');
  });

  it("removeItem() method should remove that object from the items array", function(){

    list1.addItem(apple);
    list1.removeItem(apple);

    expect(list1.items).to.be.an("array").that.is.empty;

    list1.addItem(apple);
    list1.removeItem();

    expect(list1.items).to.be.an("array").that.is.empty;
  });

  it("removeItem() should only remove a ShoppingListItem that exist in items array", function(){
    expect(list1.removeItem).to.throw(Error);
  });



});


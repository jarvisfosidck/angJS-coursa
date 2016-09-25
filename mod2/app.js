(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToByItems();


  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.addItem(index);
  }

  toBuy.status = function() {
      if (toBuy.items.length > 0) {
          return false;
      } else {
          return true;
      }
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.status = function() {
      if (bought.items.length > 0) {
          return false;
      } else {
          return true;
      }
  }

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = ['apples','pie','steak','yogurt','pasta noodles'];
  var alreadyBoughtItems = [];
  service.addItem = function (index) {
    alreadyBoughtItems.push(toBuyItems.splice(index, 1)[0]);
  };

  service.removeItem = function (itemIdex) {
    alreadyBoughtItems.splice(itemIdex, 1);
  };

  service.getToByItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();

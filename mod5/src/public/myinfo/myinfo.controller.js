(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);
MyInfoController.$inject = ['myInfo','favoriteItem'];
function MyInfoController(myInfo,favoriteItem) {
    console.log('ctrl', myInfo,favoriteItem);
      var $ctrl = this;
      $ctrl.myInfo = myInfo;
      $ctrl.favoriteItem = favoriteItem;
}


})();

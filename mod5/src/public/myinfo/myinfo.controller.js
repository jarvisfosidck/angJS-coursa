(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);
MyInfoController.$inject = ['myInfo','favorite'];
function MyInfoController(myInfo,favorite) {
    console.log('ctrl', myInfo,favorite);
      var $ctrl = this;
      $ctrl.myInfo = myInfo;
      $ctrl.favorite = favorite;
}


})();

(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);
MyInfoController.$inject = ['myInfo','favorite'];
function MyInfoController(myInfo,favorite) {
      var $ctrl = this;
      $ctrl.signUpComplete = false;
      $ctrl.myInfo = myInfo;
      $ctrl.favorite = favorite;
      //double check the menu item is found
      if (myInfo.completed === true && favorite.status != "not found") {
          $ctrl.signUpComplete = true;
      }
      if (myInfo.completed != true && myInfo.hasUserData) {
          $ctrl.incompleteMessage = "Your Sign Up is incomplete";
      } else {
          $ctrl.incompleteMessage = "Not Signed Up Yet.";
      }
}


})();

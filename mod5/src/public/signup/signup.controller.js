(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['myInfoService','allMenuItems','$state'];

function SignUpController(myInfoService,allMenuItems,$state) {
  var $ctrl = this;

  $ctrl.shortNames = [];
  for (var x in allMenuItems.menu_items) {
      $ctrl.shortNames.push(allMenuItems.menu_items[x].short_name.toLowerCase());
  }
  $ctrl.UserData = myInfoService.myInfo;
  $ctrl.signUp = myInfoService.saveInfo;
  console.log($ctrl.UserData);
$ctrl.submitForm = function() {
    $state.go('public.myinfo'); // tells resolves to refresh
}
$ctrl.isShortName = function() {
    console.log('in sn?');
    $ctrl.UserData.favorite;

    if ($ctrl.UserData.favorite && $ctrl.shortNames.indexOf($ctrl.UserData.favorite.toLowerCase()) > -1) {
        return true;
    }
    return false;


}

}


})();

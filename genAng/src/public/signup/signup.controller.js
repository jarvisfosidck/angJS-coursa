(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
console.log('before contrl signup');

SignUpController.$inject = ['myInfoService'];

function SignUpController(myinfoService) {
  var $ctrl = this;
  $ctrl.UserData = myinfoService.myInfo;
  $ctrl.signUp = myinfoService.saveInfo;
}


})();

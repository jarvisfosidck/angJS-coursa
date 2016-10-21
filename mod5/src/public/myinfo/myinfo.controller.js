(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);
console.log('before contrl');
MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
    console.log('before contrl');

  var $ctrl = this;
  $ctrl.myinfoComp = myInfo;
}


})();

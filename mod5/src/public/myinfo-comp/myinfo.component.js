(function () {
"use strict";

angular.module('public')
.component('myinfoComp', {
  templateUrl: 'src/public/myinfo-comp/myinfo-comp.html',
  bindings: {
    myinfo: '<'
  }
});



})();

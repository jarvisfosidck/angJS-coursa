(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.listToCheck = "";
  $scope.lunchCheckerMessage = "";


  $scope.checkIfTooMuch = function () {
      //make sure the message is new for each click
      $scope.lunchCheckerMessage = "";
      //matches any characters between commas but not the commas
      var regx = /([^,])+/g;
      var a = $scope.listToCheck.match(regx);
      //now do stuff with matches array
      if (!a) {
          //msg enter data
          $scope.lunchCheckerMessage = "Please Enter Some Valid Data";
      } else if (a.length > 3) {
          //msg too much
          $scope.lunchCheckerMessage = "Too Much!";
      } else if (a.length < 4 && a.length > 0) {
          //msg enjoy
          $scope.lunchCheckerMessage = "Enjoy!";
      }
  };

}

})();

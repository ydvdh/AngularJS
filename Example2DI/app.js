(function () {
  'use strict';
  angular.module('myApp',[])
  .controller('myController',DIFunction);

  function DIFunction($scope,$filter,$injector) {
    $scope.Amount1=0;
   
    $scope.getAmount1=function() {
      $scope.Amount1=addDoller($scope.Amount1);

    }
    function addDoller(input)
    {
      var result1=$filter("currency");
      return result1(input);
    }
    

   

  }

})();

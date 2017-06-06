(
  function () {
    angular.module('myApp',[])
    .controller('myController',DIFunction);
    DIFunction.$inject = ['$scope'];

    function DIFunction($scope) {
      console.log(1);
      $scope.name="Yadav Dhakal";
      $scope.counter=0;
      $scope.$watch('name',function (newValue,oldValue) {
         $scope.counter = $scope.counter + $scope.name.length;
      });
    }

  }
)();

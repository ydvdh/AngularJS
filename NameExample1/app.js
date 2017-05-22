(function () {
  angular.module('myFirstapp',[])
  .controller('myController',function($scope){
    $scope.name='Yadav';
    $scope.sayHello=function(){ return "Hello From angularJS"};
  });

})();

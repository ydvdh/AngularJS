(
  function () {
    angular.module('appFilter',[])
    .controller("filterController", FilterInjectFunction);
    FilterInjectFunction.$inject=['$scope','$filter'];

    function FilterInjectFunction ($scope, $filter){
      var inputText="Apply filter to convert to uppercase ";
      var price;
      $scope.message="Letter in the lowercase";
      $scope.message1="Letter in the uppercase";
      $scope.date=getDate();
      $scope.price=2.50;
      $scope.price1=getPrice(price);
      $scope.inputText=ConvertToUpperCase(inputText);

      function getDate() {
        return new Date();
      }

      function ConvertToUpperCase(inputText){
        var outputText = $filter('uppercase')(inputText);
        return outputText;
      }
      function getPrice(price){
        var price1 = $filter('currency')(price);
        return price1;
      }

    }
})();

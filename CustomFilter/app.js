(
  function() {
    'use strict';
    angular.module('filterApp',[])
    .controller('filterController',FilterFactory)
    .filter('hungry',HungryFilter); // 2.Registering the factory function with the module.
    FilterFactory.$inject=['$scope','hungryFilter']; // 3.inject concatinating the name hungry from the 2 part to Filter(hungryFilter)

    function FilterFactory($scope,hungryFilter) { //4. Pass the injected parameter to the dependent function

      $scope.sayFull= function() {
        var message= 'I am full';
        return message;
      }
      $scope.sayHungryMessage= function (){
     var message="I am full";
     message= hungryFilter(message);// 5. The parameter passed from the dependent function
     return message;
    }

    }
    // 1.This is the custom filter made using the factoy method(First create the factory function like this)
    function HungryFilter(){
      return function (input) {
        input =input || "";
        input = input.replace('full','hungry');
        return input
      };
    }
  }
)();

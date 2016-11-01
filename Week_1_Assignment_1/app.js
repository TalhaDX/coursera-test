(function(){
'use strict';

    angular.module('nameCalculator', [])

        .controller('nameCalculatorController', StringFunctions)
        .controller('MsgController', MsgController);

            function StringFunctions($scope, $filter) {

                $scope.name = "";
                $scope.totalValue = 0;
                $scope.displayNumeric = function(){
                    var totalNumValue = calculateNumericForString($scope.name);
                    $scope.totalValue = totalNumValue;
                };

                $scope.upper = function(){
                    var upCase = $filter('uppercase');
                    $scope.name = upCase($scope.name);
                }

                function calculateNumericForString(string){
                    var totalStringValue = 0;

                    for(var i = 0; i < string.length; i++){
                        totalStringValue +=string.charCodeAt(i);
                    }
                    return totalStringValue;
                }
            };

    function MsgController($scope){
        $scope.name = "Talha";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function (){
            return "I like Pak";
        };

        $scope.feedMe = function (){
            console.log("clicked");
              $scope.stateOfBeing = "fed";
        }
    }

})();
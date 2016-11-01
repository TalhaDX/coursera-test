(function(){
'use strict';

    angular.module('Assignment', [])

        .controller('AssignmentController', Working);

        function Working($scope){

            $scope.name = "";
            $scope.list = "";
            $scope.arrayOfStrings = [];
            $scope.message = "";

            $scope.Display = function (){
                $scope.list = $scope.name;

                $scope.text = splitString($scope.list, ',');
                $scope.Message()
            };

            $scope.Message = function (){

                if($scope.text == 0){
                    console.log("please enter some value");
                    $scope.message = "please enter some value";
                }
                else if($scope.text <=3){
                    console.log("Enjoy!");
                    $scope.message = "Enjoy!";
                }
                else {
                    console.log("sorry");
                    $scope.message = "sorry";
                }
            };

            function splitString(stringToSplit, separator) {
                $scope.arrayOfStrings = stringToSplit.split(separator);
                console.log("arrayOfStrings: " + $scope.arrayOfStrings);

                return $scope.arrayOfStrings == null ||  $scope.arrayOfStrings == ""||  $scope.arrayOfStrings == " " ? 0 : $scope.arrayOfStrings.length;
            }

        }

})();
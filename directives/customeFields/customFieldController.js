+function(window, angular) {
    'use strict';
    angular
   .module('myapp')
   .controller('customFieldController', customFieldController);

    function customFieldController($rootScope, $scope) {
        
     
        $scope.date={};
        $scope.isReadOnly = false;

        

       $scope.changeField = function(inOption){
            if($scope.type === "DROPDOWN" && inOption){
              
            }
           $scope.alterField({answer:inOption});
       };

       



      // $scope.$watch("canEdit", function(value){
      //   $scope.isReadOnly = !value;
      // });
      




    }
}(window, angular);

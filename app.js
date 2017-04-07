 var myapp = angular.module("myapp",[]).controller("MyController",MyController);
    function MyController($scope) {
    $scope.anchorClicks = 0;
    $scope.buttonClicks = 0;
    $scope.handleAnchorClick = function() {
        $scope.anchorClicks++;
    };
    $scope.handleButtonClick = function() {
        $scope.buttonClicks++;
    };

    $scope.myCustomJson = [
    [{ label :"name",
    	type:"text",
    	value:"",
    	options:[]

    },{ label :"class",
    	type:"text",
    	value:"",
    	options:[]

    },{ label :"Rank",
    	type:"dropdown",
    	value:"",
    	options:[]

    }],
    [{ label :"name",
    	type:"text",
    	value:"",
    	options:[]

    },{ label :"class",
    	type:"text",
    	value:"",
    	options:[]

    },{ label :"Rank",
    	type:"dropdown",
    	value:"",
    	options:[]

    }],

    ]
    
}
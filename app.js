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

    $scope.actionOnField = function(){
    	alert('In dir');
    }

    $scope.myCustomJson = [
    [{ label :"Product Name",
    	type:"TEXT",
    	value:"",
    	options:[]

    },{ label :"Description",
    	type:"TEXT",
    	value:"",
    	options:[]

    },{ label :"Color",
    	type:"DROPDOWN",
    	value:"",
    	options:[{label:"Red",value:"red"},
    	{label:"Green",value:"green"}]

    },{ label :"Views",
    	type:"FILE",
    	value:"",
    	options:[],
    	

    }],
    [{ label :"Product Name",
    	type:"TEXT",
    	value:"",
    	options:[]

    },{ label :"Description",
    	type:"TEXT",
    	value:"",
    	options:[]

    },{ label :"Color",
    	type:"DROPDOWN",
    	value:"",
    	options:[{label:"Black",value:"Black"},
    	{label:"White",value:"white"}]

    },{ label :"Views",
    	type:"FILE",
    	value:"",
    	options:[],


    }],

    ]
    
}
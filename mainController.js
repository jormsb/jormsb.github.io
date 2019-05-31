//download ngroute dependency with npm
var app = angular.module('app', ['ngRoute','ngResource']);

//configure frontend redirects ngroutes
app.config( function config($routeProvider,$locationProvider) {
	 $locationProvider.html5Mode(true);
      $routeProvider.
	  		when('/other', {
                templateUrl: 'other.html',
               // controller: 'otherController'
        }).
		when('/other/:username', {
                templateUrl: 'other.html',
               // controller: 'otherController'
        }).
           otherwise({redirectTo:'/'})
		   
	}
  );

//frontend functions in view handeled here
app.controller('mainController', function($scope,$resource) {
	//scope.username collected from input model
	$scope.submit =  
		function success(){alert("Welcome " + $scope.username);}
		function failure(){alert("fail");};
		var loginResource = $resource('/other/:username', {}, {login: {method: 'POST'}} );		
	}); 
	
	
	
	
/*
'get':    {method:'GET'},
'save':   {method:'POST'},
'query':  {method:'GET', isArray:true},
'remove': {method:'DELETE'},
'delete': {method:'DELETE'} 
	//set login function for resource
	loginResource.login({
		login_name:$scope.credentials.username,
        password: $scope.credentials.password
    }, 
	function(user) {
		if (!user) {console.error("login failed because no user"); return;}
			$window.localStorage.setItem('user', user);
            $rootScope.user = user;
            $location.path('/user/list');
     });	
*/

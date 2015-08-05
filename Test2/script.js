var app=angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/developers',{templateUrl:'Dev.html',controller:'DevController'}).
	when('/designers',{templateUrl:'Design.html',controller:'DesignController'}).
	otherwise({ redirectTo: '/index' });
}]);

app.controller('MainController',[function(){
	var self=this;
	self.Test="Hello world";
}]);
app.controller('DevController',[function(){
	
}]);

app.controller('DesignController',[function(){

	
}]);
var app = angular.module('myApp',[]);
app.service('MathService',[function(){
	this.add=function(a,b){return a+b };
	this.substract=function(a,a){return a-b};
	this.multiply=function(a,b){return a*b};
	this.divide=function(a,b){return a/b};
}]);
app.service('CalculatorService',['MathService',function(MathService){
	 this.square = function(a) {
	 return MathService.multiply(a,a); 
	 };
	this.cube=function(a){return MathService.multiply(a,MathService.multiply(a,a))};
}]);
app.controller('calculatorController',['CalculatorService',function(CalculatorService){
	console.log('hello');
	var self=this;
	self.doSquare=function(){
		self.answer=self.number;
		//console.log('12',CalculatorService.square(self.number))
		var number=self.number;
		self.answer=CalculatorService.square(number);
	};
	self.doCube=function(){
		self.answer=CalculatorService.cube(self.number);
	};
}]);
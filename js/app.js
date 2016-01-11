var app = angular.module('generator', []);

app.controller('genController', function () {
	this.currency = "USD";

	this.gen = function () {
		this.output = 'https://www.paypal.com/cgi-bin/webscr?business=' + this.email + '&cmd=_xclick&currency_code=' + this.currency + '&amount=' + this.price + '&item_name=' + this.name;
	};
});

app.controller('viewController', function(){
	this.tab = 1;

	this.setTab = function(newValue){
		this.tab = newValue;
	};

	this.isSet = function(tabName){
		return this.tab === tabName;
	};
});

app.directive("genForm", function() {
	return {
		restrict: 'E',
		templateUrl: "views/genForm.html"
	};
});

app.directive("genResult", function() {
	return {
		restrict: 'E',
		templateUrl: "views/genResult.html"
	};
});

app.directive("genFoot", function() {
	return {
		restrict: 'E',
		templateUrl: "views/genFoot.html"
	};
});
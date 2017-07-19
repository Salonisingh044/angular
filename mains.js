

var foodieApp = angular.module('foodieApp',[]);
console.log(foodieApp);

// Controller bnare h//

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

})
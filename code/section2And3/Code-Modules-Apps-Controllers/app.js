// MODULE

//an array of dependencies, that is the list of modules your app uses
var angularApp = angular.module('angularApp', ['ngMessages','ngResource']);



// CONTROLLERS
angularApp.controller('mainController', function($scope, $filter, $log, $resource){
  //the $scope is angular doing dependency injection
  //its passing the $scope object to the function
  //where and how it's define does not matter

  //it then contain other values

  //you can add stuff to the scope and scope than become that middle piece
  //bewtten the view and the controller

  // $scope.name = 'Tony';
  // $scope.occupation = 'Coder';
  //
  // $scope.getname = function(){
  //   return 'John Doe';
  // }
  //
  //
  // console.log($scope);

  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedname);
  console.log($resource);

});


var searchPeople = function($scope, firstName, lastName, height, ago){
  return 'Jane Doe';
}

//$scope is not defined
//because the way angular does dependency injection is different
//console.log("Currently scope is " + $scope);

var searchPeopleString = searchPeople.toString();
//this will return a string
console.log(searchPeopleString);

console.log(angular.injector().annotate(searchPeople));

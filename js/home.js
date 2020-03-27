var app = angular.module("home")

app.controller('HomeController', HomeController);

function HomeController($scope, $timeout) {
    $http({
        method: 'GET',
        url: 'https://makebrazilemo.herokuapp.com/find-all-podcast'
    }).then(function successCallback(response) {
        console.log(response)
    }, function errorCallback(response) {
        console.log(response)
    });
}
var app = angular.module("home", [])

app.controller('HomeController', HomeController);

function HomeController($http, $scope) {
    $http({
        method: 'GET',
        url: 'https://makebrazilemo.herokuapp.com/find-all-podcast'
    }).then(function successCallback(response) {
        $scope.podcasts = response.data.content
    }, function errorCallback(response) {
        $scope.error = "Nenhum podcast disponivel no momento"
    });
}
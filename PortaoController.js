angular.module('portaoweb', []).controller('portaoCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.nome = 'Wiris Alves';

    $scope.garagem = function () {
        $http.get('http://10.0.0.175:8081/?ligar=true').then(function () { }).catch(function (error) {
            console.log(error);
        });
    }

    $scope.portao = function () {
        $http.get('http://10.0.0.175:8081/?porta1=true').then(function () { }).catch(function (error) {
            console.log(error);
        });
    }
}]);

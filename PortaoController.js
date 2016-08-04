angular.module('portaoweb', []).controller('portaoCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.nome = 'Wiris Alves';
	$scope.loading = false;

    $scope.garagem = function () {
	$scope.loading = true;
        $http.get('http://10.0.0.175:8081/?ligar=true').then(function () {
		$scope.loading = false;
	}).catch(function (error) {
            console.log(error);
		$scope.loading = false;
        });
    }

    $scope.portao = function () {
	$scope.loading = true;
        $http.get('http://10.0.0.175:8081/?porta1=true').then(function () {
			$scope.loading = false;
	}).catch(function (error) {
            console.log(error);
		$scope.loading = false;
        });
    }
}]);

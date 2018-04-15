nixApp.controller('detalheController', function ($scope, $routeParams, $location, detalheService) {

    $scope.onInit = function () {
        var id = $routeParams.id;
        detalheService.obterDetalheTransacao(id, function (transacao) {
            if (transacao) {
                transacao.valor = "R$ " + transacao.valor;
                $scope.transacao = transacao;
            }
            else{
                $location.path('/lista');
            }
        });
    }

    angular.element(document).ready(function () {
        $scope.onInit();
    });

});
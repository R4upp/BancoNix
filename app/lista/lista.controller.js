nixApp.controller('listaController', function ($scope, $location, listaService) {

    $scope.tipoLista = [
        { id: "", nome: "" },
        { id: "doc", nome: "DOC" },
        { id: "ted", nome: "TED" },
        { id: "cc", nome: "CC" }
    ];

    $scope.statusLista = [
        { id: "", nome: "" },
        { id: "processado", nome: "Processado" },
        { id: "invalido", nome: "Inválido" },
        { id: "liquidado", nome: "Liquidado" }
    ];

    $scope.filtro = {
        pagador: "",
        beneficiario: "",
        tipo: "",
        status: ""
    };

    $scope.qtdPorPagina = 5;
    $scope.inicioPaginacao = 0;

    $scope.onInit = function () {
        $scope.filtrarTransacao();
    }

    $scope.atualizarInicioPaginacao = function (index) {
        $scope.inicioPaginacao = (index * $scope.qtdPorPagina)
    }

    $scope.filtrarTransacao = function () {

        var filtro = $scope.filtro;
        listaService.filtrarTransacoes(filtro.beneficiario, filtro.pagador, filtro.tipo, filtro.status, function (result) {
            $scope.transacoes = result.data.data;
        });
    };

    $scope.verDetalhe = function (transacao) {
        $location.path('/lista/detalhe/' + transacao.id);
    };

    angular.element(document).ready(function () {
        $scope.onInit();
    });

});
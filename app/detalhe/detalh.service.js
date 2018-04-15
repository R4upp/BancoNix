nixApp.service('detalheService', function ($http, listaService) {

    this.obterDetalheTransacao = function (id, callback) {

        listaService.listarTransacoes(function (result) {
            var lista = result.data.data;
            var transacoes = lista.filter(function (transacao) {
                return transacao.id == id;
            });

            callback(transacoes.length > 0 ? transacoes[0] : null);
        });
    };

});
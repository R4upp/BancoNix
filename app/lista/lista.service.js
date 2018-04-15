nixApp.service('listaService', function ($http) {

    var urlApiTransacoes = "https://nix-bank-qa.cloudint.nexxera.com/v1/transactions";

    this.filtrarTransacoes = function (beneficiario, pagador, tipo, status, callback) {

        var urlFiltro = urlApiTransacoes;
        var parametros = [];

        if (beneficiario) {
            parametros.push(`nome_beneficiario=${beneficiario}`);
        }

        if (pagador) {
            parametros.push(`nome_pagador=${pagador}`);
        }

        if (tipo) {
            parametros.push(`tipo=${tipo}`);
        }

        if (status) {
            parametros.push(`status=${status}`);
        }

        if (parametros.length > 0) {
            urlFiltro += "?" + parametros.join("&");
        }

        $http.get(urlFiltro).then(callback);
    };

    this.listarTransacoes = function (callback) {
        $http.get(urlApiTransacoes).then(callback);
    };

});
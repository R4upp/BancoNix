nixApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', { redirectTo: '/lista' }).
        when('/lista', { templateUrl: 'app/lista/lista.html', controller: 'listaController' }).
        when('/lista/detalhe/:id', { templateUrl: 'app/detalhe/detalhe.html', controller: 'detalheController' }).
        otherwise({
            redirectTo: '/'
        });

    // $locationProvider.html5Mode(true);
}]);
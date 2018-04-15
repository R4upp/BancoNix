nixApp.filter('iniciarAPartir', function () {
    return function (input, inicio) {
        if (input) {
            inicio = parseInt(inicio);
            return input.slice(inicio);
        }
        return [];
    }
});

nixApp.filter('intervalo', function () {
    return function (input, total) {
        totalInt = parseInt(total);
        totalInt = total > totalInt ? totalInt + 1 : totalInt;
        for (var i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
});
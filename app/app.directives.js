nixApp.directive("datainfo", function () {

    var linkFunction = function (scope, element, attributes, ngModel) {

        var label = attributes["label"];
        var template = function (element, label, ngModel) {
            var html = `<md-input-container class="md-block flex-gt-sm md-input-has-value" flex-gt-sm="">
                            <label>${label}</label>
                            <input class="ng-pristine ng-untouched ng-valid md-input ng-not-empty" value="${ngModel.$viewValue}" aria-invalid="false" style="">
                        </md-input-container>`;
            element.html(html);
        };

        setTimeout(() => {
            template(element, label, ngModel);
        }, 500);
    };

    return {
        restrict: "E",
        require: "^ngModel",
        link: linkFunction
    };
});
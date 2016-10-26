(function () {

    let app = angular.module('chevyChase');


    app.component('product', {
        bindings: {
            item: '<'
        },
        templateUrl: 'templates/product.html',
        controller: Product,
        controllerAs: 'pc'

    });

    Product.$inject = ['$state', '$rootScope'];

    function Product($state, $rootScope) {

        let pc = this;

        pc.showDetails = function (itemId) {
            $state.go('detail', {id: itemId});
        };

        pc.addToCart = function (item) {
            $rootScope.$broadcast('BuyItem', {item: item, qty: 1})
        };

    };

})();
(function () {

    let app = angular.module('chevyChase');


    app.component('cart', {
        bindings: {
        },
        templateUrl: 'templates/cart.html',
        controller: Cart,
        controllerAs: 'cc'

    });

    Cart.$inject = ['cartService'];

    function Cart(cartService) {

        let cc = this;

    }
})();
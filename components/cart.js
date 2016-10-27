(function () {

    let app = angular.module('chevyChase');


    app.component('cart', {
        bindings: {
        },
        templateUrl: 'templates/cart.html',
        controller: Cart,
        controllerAs: 'cc'

    });

    Cart.$inject = ['$scope', '$state', 'cartService'];

    function Cart($scope, $state, cartService) {

        let cc = this;

        cc.items = [];
        cc.totalItems = 0;
        cc.totalCost = 0;

        cc.$onInit = () => {

            $scope.$on('CartUpdated', (event, data) => {
                console.log('Cart Updated: ', data);

                cc.items = data;
                cc.totalItems = 0;
                cc.totalCost = 0;

                cc.items.forEach((item) => {
                    cc.totalItems += item.qty;
                    cc.totalCost += item.qty * item.item.salePrice;
                })
            });
        }

        cc.showMap = function () {
            $state.go('map');
        }
    }
})();
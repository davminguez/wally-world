(function () {

    let app = angular.module('chevyChase');

    app.factory('cartService', CartService);

    CartService.$inject = ['$scope'];

    function CartService($http) {

        let items = [];

        $scope.$on('BuyItem', function (event, data) {

            items.push(data);
            console.log('Cart: ', items);


        });

        return {
            items: items
        };
    }

})();
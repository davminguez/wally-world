(function () {

    let app = angular.module('chevyChase');

    app.factory('cartService', CartService);

    CartService.$inject = ['$rootScope'];

    function CartService($rootScope) {

        let items = [];

        $rootScope.$on('BuyItem', function (event, data) {

            //does this item already exist?
            //if so update the qty
            //otherwise, push it real good
    
            let index = items.findIndex((item) => {
                return item.item.itemId === data.item.itemId;
            });

            if (index > -1) {
                items[index].qty += data.qty;
            }
            else {
                items.push(data);
            }

            console.log('Cart: ', items);

            $rootScope.$broadcast('CartUpdated', items);

        });

        return {
            items: items
        };
    }

})();
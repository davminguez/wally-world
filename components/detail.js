(function () {


    let app = angular.module('chevyChase');


    app.component('detail', {
        bindings: {
        },
        templateUrl: 'templates/detail.html',
        controller: Detail,
        controllerAs: 'dc'
    });

    Detail.$inject = ['$state','$rootScope', '$stateParams', 'wallyService'];

    function Detail($state, $rootScope, $stateParams, wallyService) {

        let dc = this;
        let itemId = $stateParams.id;
        
        dc.item = null;


        wallyService.getProduct(itemId)
            .then(function (product) {
                console.log(product);

                dc.item = product.data;
            
            })
            .catch(function (error) {
                console.log(error);
            })
            dc.addToCart = function (item) {
            $rootScope.$broadcast('BuyItem', {item: item, qty: 1})
        };
    }

})();
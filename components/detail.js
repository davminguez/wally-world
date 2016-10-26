(function () {


    let app = angular.module('chevyChase');


    app.component('detail', {
        bindings: {
        },
        templateUrl: 'templates/detail.html',
        controller: Detail,
        controllerAs: 'dc'
    });

    Detail.$inject = ['$state', '$stateParams', 'wallyService'];

    function Detail($state, $stateParams, wallyService) {

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
    }

})();
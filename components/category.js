(function () {

    let app = angular.module('chevyChase');


    app.component('category', {
        bindings: {
        },
        templateUrl: 'templates/category.html',
        controller: Category,
        controllerAs: 'cg'

    });

    Category.$inject = ['$state', '$stateParams', 'wallyService'];

    function Category($state, $stateParams, wallyService) {
        let cg = this;
        let categoryId = $stateParams.id;
        let start = $stateParams.start | 1;

        cg.items = [];
        cg.totalItems = 0;
        cg.currentPage = 1;

        cg.setPage = function (pageNo) {
            cg.currentPage = pageNo;
        };

        cg.pageChanged = function () {
            let newPage = cg.currentPage * 10 - 9;
            $state.go('category', { id: categoryId, start: newPage });
        };

        console.log('categoryId: ', categoryId)

        wallyService.productInfo(categoryId, start)
            .then(function (products) {
                console.log(products);
                cg.items = products.data.items;
                cg.totalItems = products.data.totalResults;
            })
            .catch(function (error) {
                console.log(error);
            })
    };

})();
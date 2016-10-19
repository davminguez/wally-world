(function() {

    let app = angular.module('chevyChase');

    app.component('categoryDetail', {
        bindings: {
        },
        templateUrl: 'categories.html',
        controller: CategoryDetail,
        controllerAs: 'cd'
    });
    
    CategoryDetail.$inject = [];

    function CategoryDetail() {


    };

})();
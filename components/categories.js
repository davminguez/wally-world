(function() {

    let app = angular.module('chevyChase');

    app.component('categoryDetail', {
        bindings: {
        },
        templateUrl: 'templates/categories.html',
        controller: CategoryDetail,
        controllerAs: 'cd'
    });
    
    CategoryDetail.$inject = [];

    function CategoryDetail() {


    };

})();
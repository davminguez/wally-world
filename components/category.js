(function () {

    let app = angular.module('chevyChase');


    app.component('category', {
        bindings: {
        },
        templateUrl: 'templates/category.html',
        controller: Category,
        controllerAs: 'cg'

    });
    
    Category.$inject = ['$stateParams'];

    function Category($stateParams) {

        let categoryId = $stateParams.id;

        console.log('categoryId: ', categoryId)
    };

    })();
(function () {

    let app = angular.module('chevyChase', ['ui.router', 'ui.bootstrap', 'ngMap']);

    app.constant('PaginatedApiUrl', 'http://api.walmartlabs.com/v1/search?query=food&format=json&apiKey=ap2qbf3wge6fcgshsxa5nxm5&categoryId=')
    app.constant('ProductDetailApiUrl', 'http://api.walmartlabs.com/v1/items/{itemId}?format=json&apiKey=ap2qbf3wge6fcgshsxa5nxm5');
    
    app.config(AppConfig);

    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('categories');

        $stateProvider
            .state('categories', {
                url: '/categories',
                component: 'categoryDetail'
            })

            .state('category', {
                url: '/category/:id/:start?',
                component: 'category'
            })

            .state('detail', {
                url: '/detail/:id',
                component: 'detail'
            })

            .state('map', {
                url: '/map',
                component: 'storeLocator'
            });
    }


})();
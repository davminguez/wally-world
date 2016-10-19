(function () {
	
    let app = angular.module('chevyChase', ['ui.router']);

    app.config(AppConfig);

    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('categories');

        $stateProvider
            .state('categories', {
                url: '/categories',
                component: 'categoryDetail'
            });
    }


})();
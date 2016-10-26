(function () {

    let app = angular.module('chevyChase');

    app.factory('wallyService', WallyService);

    WallyService.$inject = ['$http', 'PaginatedApiUrl', 'ProductDetailApiUrl'];

    function WallyService($http, apiUrl, detailApiUrl) {

        function productInfo(categoryId, start) {

            let url = apiUrl + categoryId + '&start=' + start;

            return $http({
                method: 'jsonp',
                url: url,
                params: {
                    callback: 'JSON_CALLBACK'
                }
            });
        }

        function getProduct(itemId) {
            let url = detailApiUrl.replace('{itemId}', itemId);

            return $http({
                method: 'jsonp',
                url: url,
                params: {
                    callback: 'JSON_CALLBACK'
                }
            });
        }

        return {
            productInfo: productInfo,
            getProduct: getProduct
        };

    }


})();
'use-strict';

function routeConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('main', {
            url: '/home',
            template: '<div>Little little owl</div>'
        })

    $urlRouterProvider.otherwise('/');

}

export default angular.module('index.routes', [])
    .config(routeConfig)
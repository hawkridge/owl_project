'use-strict';

function routeConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('main', {
            url: '/home',
            templateUrl: require('./pages/main/main.html'),
            controller: 'mainController as main'
        });

    $urlRouterProvider.otherwise('/');

}

export default angular.module('index.routes', [])
    .config(routeConfig)
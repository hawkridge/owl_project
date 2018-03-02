'use-strict';

function routeConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: './components/mainPage/mainPage.html',
            controller: 'mainController as main'
        });

    $urlRouterProvider.otherwise('/');

}

export default angular.module('index.routes', [])
    .config(routeConfig)
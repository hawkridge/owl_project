'use strict';

function routeConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: './pages/main/main.html',
            controller: 'MainController as main'
        })
        .state('login', {
            url: '/login',
            templateUrl: './pages/login/login.html',
            controller: 'LoginController as login'
        });



    $urlRouterProvider.otherwise('/');
}

export default angular
                    .module('index.routes', [])
                    .config(routeConfig)
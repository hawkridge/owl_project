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
        })
        .state('header', {
            url: '/head',
            template: '<main-header></main-header>'
        });



    $urlRouterProvider.otherwise('/');
}

export default angular
                    .module('index.routes', [])
                    .config(routeConfig)


function routesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('btn', {
            url: '/home',
            templateUrl: './test.html'
        });

    $urlRouterProvider.otherwise('/');

}

export default routesConfig;
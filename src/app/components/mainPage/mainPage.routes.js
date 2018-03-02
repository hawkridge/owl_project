

function routesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './test.html'
        })
        .state('btn', {
            url: '/btn',
            template: '<btn></btn>'
        });

    $urlRouterProvider.otherwise('/');

}

export default routesConfig;
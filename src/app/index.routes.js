'use-strict';

function routeConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('main', {
            url: '/home',
            template: '<div>Little little owl</div>'
        })
        .state('list', {
            url: '/list',
            template: `<ul> 
                <li>1</li>    
                <li>2</li>    
                <li>3</li>    
            </ul>`
        });

    $urlRouterProvider.otherwise('/');

}

export default angular.module('index.routes', [])
    .config(routeConfig)
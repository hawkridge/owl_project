import mainController from './mainPage.controller'
import routes from './mainPage.routes'

console.log('dewdew', require('../button/button.module').default.name);

const mainModule = angular.module('main.module', [
    'ui.router',
    require('../button/button.module').default.name
]);

mainModule
    .config(routes)
    .controller('mainController', mainController);

export default mainModule;
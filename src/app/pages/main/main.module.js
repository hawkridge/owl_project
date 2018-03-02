import mainController from './main.controller'
console.log('123',mainController);
import routes from './main.route'

const mainModule = angular.module('main.module', ['ui.router']);

mainModule
    .config(routes)
    .controller('mainController', mainController);

export default mainModule;


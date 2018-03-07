import MainController from './main.controller'
import route from './main.route'

const mainModule = angular.module('main.module', []);

mainModule
    .config(route)
    .controller('MainController', MainController);

export default mainModule;
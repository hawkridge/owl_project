import mainController from './main.controller'
import routes from './main.route'

const mainModule = angular.module('main.module', ['ui-router']);

mainModule
    .config(routes)
    .controller('mainController', mainController);

export default mainModule;


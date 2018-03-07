import mainCtrl from './main.controller'
import routes from './main.routes'

const mainModule = angular.module('main.module', []);

mainModule
    .config(routes)
    .controller('mainController', mainCtrl);

export default mainModule;
import MainController from './main.controller'
import route from './main.route'
import './main.sass'

const mainModule = angular.module('main.module', [require('../../components/header/header.module').default.name]);

mainModule
    .config(route)
    .controller('MainController', MainController);

export default mainModule;
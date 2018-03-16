import './header.sass'
import headerComponent from './header.component'

const headerModule = angular.module('header-module', []);

headerModule
    .component('mainHeader', headerComponent);

export default headerModule;
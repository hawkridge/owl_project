import './componentTemplate.sass'
import componentComponent from './componentTemplate.component'


const componentModule = angular.module('component-module', []);

componentModule
    .component('component', componentComponent);

export default componentModule;

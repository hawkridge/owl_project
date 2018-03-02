'use strict';

import buttonComponent from './button.component'
// import './button.sass'

const buttonModule = angular.module('button-block', []);

buttonModule
    .component('btn', buttonComponent);

export default buttonModule;

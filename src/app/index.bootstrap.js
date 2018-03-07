'use strict';

import './index.module'
import '../assets/styles/sass/index.sass'


angular.element(document).ready(function () {
    angular.bootstrap(document, ['owl-module'], {
        strictDi: false
    })
});
'use strict';

import './index.module'


angular.element(document).ready(function () {
    angular.bootstrap(document, ['main.module'], {
        strictDi: false
    })
});
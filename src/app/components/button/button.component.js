'use strict';

import buttonTpl from './button.html'

const cdo = {
    bindings: {},
    templateUrl: buttonTpl,
    controller: buttonController
}

function buttonController($scope) {
    'ngInject'
}

export default cdo


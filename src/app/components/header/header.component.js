import headerTemplate from './header.html'

const cdo = {
    bindings: {},
    template: headerTemplate,
    controller: headerController
}


function headerController($scope) {
    'ngInject'
    console.log('INIT HEADER CONTROLLER');
}

export default cdo;
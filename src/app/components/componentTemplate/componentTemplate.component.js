import componentTemplate from './componentTemplate.html'

const cdo = {
    bindings: {},
    template: componentTemplate,
    controller: componentController
};

function componentController($scope) {
    'ngInject'
}

export default cdo;


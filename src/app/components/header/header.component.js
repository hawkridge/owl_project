import headerTemplate from './header.html'

const cdo = {
    bindings: {},
    template: headerTemplate,
    controller: headerController
}


function headerController($scope) {
    console.log('INIT HEADER CONTROLLER');

    this.name = 'Sorax'
}

export default cdo;
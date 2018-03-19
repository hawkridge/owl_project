'use strict';
import run from './index.run'
import config from './index.config'

import mainPage from './pages/main/main.module'
import loginPage from './pages/login/login.module'
import routes from './index.routes'
import components from './index.components'
import services from './core/core.modules'

console.log('frefre', services);


const indexModule = angular.module('owl-module',
    [
        'ui.router',
        components.name,
        mainPage.name,
        loginPage.name,
        routes.name,
        services.name
    ]);

indexModule
    .config(config)
    .run(run);

export default indexModule;
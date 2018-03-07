'use strict';
import run from './index.run'
import config from './index.config'

import mainPage from './pages/main/main.module'
import loginPage from './pages/login/login.module'
import routes from './index.routes'


const indexModule = angular.module('owl-module',
    [
        'ui.router',
        mainPage.name,
        loginPage.name,
        routes.name
    ]);

indexModule
    .config(config)
    .run(run);

export default indexModule;
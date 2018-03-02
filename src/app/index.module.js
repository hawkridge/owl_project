'use strict';

import config from './index.config'
import run from './index.run'

const app = angular.module('owl-module',
    [
        'ui.router',
        require('./components/mainPage/mainPage.module').default.name,
        require('./index.components').default.name,
        require("./index.routes").default.name
    ]);

app
    .config(config)
    .run(run);

export default app;
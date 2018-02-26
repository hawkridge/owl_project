'use strict';

let routes = require("./index.routes").default.name;

console.log('ROUTES', routes);

import config from './index.config'
import run from './index.run'

const app = angular.module('owl-module',
    [
        'ui.router',
        require("./index.routes").default.name
    ]);

app
    .config(config)
    .run(run);

export default app;
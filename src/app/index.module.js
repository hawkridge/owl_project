'use strict';


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
'use strict';

import config from './index.config'
import run from './index.run'
import routes from './index.routes'

const app = angular.module('main.module', []);

app
    .config(config)
    .config(routes)
    .run(run);

export default app;
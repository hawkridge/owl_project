'use strict';

const _ = require('lodash');

let _configs = {
    // global config
    global: require(__dirname + '/config/webpack/global'),

    // configs for development and production
    production: require(__dirname + '/config/webpack/environments/production'),
    development: require(__dirname + '/config/webpack/environments/development')
};

let _load = function () {
    let ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

    console.log('Current environment', ENV);

    return _.merge(
        _configs.global(__dirname),
        _configs[ENV](__dirname)
    )
};

module.exports = _load();
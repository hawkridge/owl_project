const path = require('path');

let NODE_ENV = process.env.NODE_ENV || 'production',
    BUILD_VER = process.env.npm_config_BUILD_VER;

const htmlWebpackPlugin = require('html-webpack-plugin');

console.log('From global, NODE_ENV', NODE_ENV);
console.log('From global, BUILD_VER', BUILD_VER);


module.exports = function (_path) {
    console.log('From global, _path', _path);

    let config = {

        // entry points
        entry: {
            vendor: _path + '/src/app/index.vendor.js',
            app: _path + '/src/app/index.bootstrap.js',
            polyfill: 'babel-polyfill'
        },

        // output files
        output: {
            path: path.resolve(_path, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },

        // plugins
        plugins: [
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(_path, 'src', 'index.html')
            })
        ]
    };

    return config;
};
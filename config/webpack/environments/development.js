const path = require('path');
const webpack = require('webpack');

module.exports = function (_path) {
    console.log('From development, _path', _path);

    let config = {
        context: _path,
        devtool: 'cheap-source-map',
        devServer: {
            contentBase: path.join(_path, 'dist'),
            compress: true,
            port: 9000
        }
    };

    return config;
};
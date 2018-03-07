const path = require('path');

let NODE_ENV = process.env.NODE_ENV || 'production';

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function (_path) {

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

        // loaders
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'ng-annotate-loader'
                    },{
                        loader: 'babel-loader'
                    }]
                },
                {
                    test: /\.js$/,
                    use: [{
                        loader: 'angular1-templateurl-loader'
                    }]
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }]
                }
            ],
        },

        // plugins
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: _path
            }),
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(_path, 'src', 'index.html')
            })
        ]
    };

    return config;
};
const webpack = require('webpack'),
      path = require('path'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin');


// let NODE_ENV = process.env.NODE_ENV || 'production';


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
                },
                {
                    test: /\.sass$/,
                    use: [{
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader'
                    },{
                        loader: 'sass-loader'
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
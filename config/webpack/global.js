// plugins
const webpack = require('webpack'),
      path = require('path'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin');

// create feature for replacing separate css files
const extractSass = new ExtractTextPlugin({
    filename: '[name][contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});


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
                    use: extractSass.extract({
                        use: [{
                            loader: 'css-loader'
                        },{
                            loader: 'sass-loader'
                        }],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[hash].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: './fonts/'
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
            }),
            extractSass
        ]
    };

    return config;
};
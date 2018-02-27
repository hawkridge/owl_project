const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (_path) {
    console.log('From production, _path', _path);

    let config = {
        context: _path,
        devtool: 'cheap-source-map',
        output: {
            filename: '[name].[chunkhash].js'
        },
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: _path
            }),
            // new UglifyjsWebpackPlugin()
        ]
    };

    return config;
};
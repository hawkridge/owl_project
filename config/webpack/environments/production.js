module.exports = function (_path) {
    let config = {
        context: _path,
        devtool: 'cheap-source-map',
        output: {
            filename: '[name].[chunkhash].js',
            publicPath: './'
        }
    };

    return config;
};
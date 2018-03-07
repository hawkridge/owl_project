module.exports = function (_path) {
    console.log('From production, _path', _path);

    let config = {
        context: _path,
        devtool: 'cheap-source-map',
        output: {
            filename: '[name].[chunkhash].js',
            publicPath: './'
        },
        plugins: []
    };

    return config;
};
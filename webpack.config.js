const webpack = require('webpack');

module.exports = {
    entry: ['./client.js'],
    devtool: 'sourcemap',
    debug: true,
    output: {
        path: 'public/',
        filename: '[name].min.js',
        sourceMapFilename: '[name].js.map'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

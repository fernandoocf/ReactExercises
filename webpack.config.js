const webpack = require('webpack');

module.exports = {
    entry: './ex/indexjs',
    output: {
        path: __dirname + '/public',
        filename: './ bundle.js'
    },
    devServr: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
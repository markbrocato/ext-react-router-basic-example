
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtReactWebpackPlugin = require('@extjs/reactor-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    plugins: [
                        '@extjs/reactor-babel-plugin'
                    ]
                }
            }
        ]
    },

    plugins: [
        new ExtReactWebpackPlugin({

        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    stats: {
        errorDetails: true
    },

    devServer: {
        contentBase: './build',
        historyApiFallback: true
    }
};

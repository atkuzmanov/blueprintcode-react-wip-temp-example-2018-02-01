const path = require('path');
const webpack = require('webpack');
const entryFile = "../src/client/app/boot.js";
const outputPath = path.resolve(__dirname, "../dist/client");

var config = {
    context: __dirname,
    devtool: '#inline-source-map',
    entry: [
        entryFile
    ],
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],
    module: {
        preloaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react']
                }
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};

if (process.env.NODE_ENV !== 'production') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.entry.push('webpack-hot-middleware/client');
    config.module.loaders[0].query.presets[0]='react-hmre';
}

module.exports = config;

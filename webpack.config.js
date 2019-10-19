const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let baseConfig = require('./webpack.base');

let prodConfig = {
    mode: 'production',
    entry: {
        'uco': './src/components/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: '[name].min.js',
        library: '[name]',
        globalObject: 'this',
        libraryTarget: 'umd'
    },
    externals: {
        jquery: 'jquery'
    }
}

let docConfig = {
    mode: 'production',
    entry: {
        'index': './src/examples/index.js',
        'jquery': 'jquery'
    },
    output: {
        path: path.resolve(__dirname, './dist/examples'),
        filename: '[name].js',
        chunkFilename: 'scripts/[id].js?[chunkhash]'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/examples', 'index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/assets', to: './assets' }
        ])
    ]
}

module.exports = (env, argv) => {
    console.log(env, argv.mode);
    let webpackConfig = merge(baseConfig, prodConfig);
    if (env === 'doc') {
        webpackConfig = merge(baseConfig, docConfig);
        if(argv.mode === 'development') {
            webpackConfig.devServer = {
                port: 5005
            }
        }
    }
    return webpackConfig;
};
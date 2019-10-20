const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let baseConfig = {
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './'
                    }
                },'css-loader', 'sass-loader']
            },
            {
                test: /\.ejs$/,
                use: ['ejs-loader']
            },
            {
                test: /\.(jpe?g|png|bmp|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'media/[contenthash:8].[ext]',
                        limit: 10*1024,
                        publicPath: './'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}

module.exports = baseConfig;
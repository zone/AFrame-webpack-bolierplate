const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'js/[name].js',
        path: __dirname + '/dist',
        chunkFilename: 'js/[id].[chunkhash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: 'css/main.[contenthash].css' }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head',
            scriptLoading: 'blocking',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/imgs', to: 'imgs' },
                // { from: 'src/data', to: 'data' },
                // { from: 'src/old_school/', to: 'oss' },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src/js')],
                loader: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /.(sa|sc|c)ss$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../' },
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',

                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
}

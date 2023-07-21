//npm init -y : инициализирует npm (запись в package.json)
//npm install webpack -D (установка вебпака)
//npm install webpack-cli webpack-dev-server -D (cli для управления вебпака, писать скрипты в package.json; server для использования своего сервера)

const webpack = require('webpack'); //
const path = require('path'); //правильные пути указывать
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для HTLM npm install html-webpack-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Плагин для CSS npm install mini-css-extract-plugin -D
const mode = process.env.NODE_ENV || 'development'; //указание среды разработки ()

const devMode = mode === 'development'; // Проверка мода на девелопмент

const target = devMode ? 'web' : 'browserslist'; // Если development, то web настройки, если продакшн, то файл browserslistrc
const devtool = devMode ? 'source-map' : undefined; // При дев моде, будет source-map для отслежиания ошибок 

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 8080,
        open: true,
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(c|sc|sa)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|jpg)$/,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
};
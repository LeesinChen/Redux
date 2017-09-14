var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname); // 项目根目录
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目的src 目录
var APP_FILE = path.resolve(APP_PATH, 'app'); // 项目入口文件
var BUILD_PATH = path.resolve(ROOT_PATH, '/build'); // 打包后的文件存放目录

// 对外提供接口
module.exports = {
    // 配置
    entry: { // 入口文件
        // 配置 启用热更新
        app: [
            'webpack-dev-server/client?http://localhost:8888', // 热更新监听地址 与server.js内启用端口保持一致
            'webpack/hot/only-dev-server', // 启用热更新
            APP_FILE // 入口文件
        ],
    },
    output: { // 打包后输出的文件
        publicPath: '/test/',
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   // 热更新插件
        new webpack.NoErrorsPlugin(),    // 即使有错误也不中断运行
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false, // 干掉warning
        //         drop_debugger: true, // 干掉项目内的debugger
        //         drop_console: false, //  设置true，干掉项目内的console
        //     }
        // }),
    ],
}

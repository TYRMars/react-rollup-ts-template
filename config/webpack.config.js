const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

//less和css的打包发布
const extractLess = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const renderhtmltemplate = new HTMLPlugin({
    template: path.join(__dirname,'../client/index.html')
})

const config = {
    entry:{
        index:path.join(__dirname,'../src/index.js')
    },
    output:{
        filename: '[name].[hash].js',
        path: path.join(__dirname,'../build'),//输出目录
        publicPath: '/public'
    },
    module: {
        rules:[
            {
                test:/.(js|jsx)$/,
                loader: 'babel-loader',
                exclude:[
                    path.join(__dirname,'../node_modules')
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }
        ]
    },
    plugins: [
        renderhtmltemplate,
        extractLess
    ]
}

if(isDev){
    config.entry = {
        index: [
            'react-hot-loader/patch',
            path.join(__dirname,'../src/index.js')
        ]
    }
    config.devServer = {
        host:'0.0.0.0',
        port:'3300',
        contentBase:path.join(__dirname,'../dev'),
        hot: true, //热加载
        overlay:{
            errors:true
        },
        publicPath: '/public',
        historyApiFallback:{
            index:'/public/index.html'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
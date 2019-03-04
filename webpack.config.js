//使用require ES6 语法导入路径
var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin') 
module.exports = {
  mode : 'production',
  entry : path.join(__dirname,'./src/main.js'),
  output : {
    path : path.join(__dirname,'./dist'),
    filename : 'bundle.js'
  },
  performance: {  //取消 limit限制
    hints: false
  },
  plugins : [
    new htmlWebpackPlugin({
      template : path.join(__dirname,'./src/index.html'),
      filename : 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {   //使用module向外暴露一个对象
    rules : [
      {test:/\.css$/,use: ['style-loader','css-loader']},  //处理css文件
      {test:/\.js$/,use: 'babel-loader',exclude:/node_modules/},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {test:/\.vue$/,use: 'vue-loader'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }
    ]
  }
}
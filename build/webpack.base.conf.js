const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const PATHS={
  root: path.join(__dirname,'../'),
  templates: path.join(__dirname, '../templates'),
  src: path.join(__dirname,'../dev'),
  dist: path.join(__dirname, '../public'),
  assets: 'assets/'
}
module.exports = {

  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/public'
  },
  module:
  {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            //options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              //sourceMap: true,
              config: {
                path: "dev/js/postcss.config.js"
              }
            }
          }
        ]
        
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
           // options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "dev/js/postcss.config.js"
              }
            }
          },
          {
            loader: "stylus-loader",
            //options: {sourceMap: true}
          }
        ]
        
      }
    ]
  },
  plugins:[
     new MiniCssExtractPlugin({
       filename: `${PATHS.assets}css/[name].css`
     }),
    new VueLoaderPlugin()
  ]
}
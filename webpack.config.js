//entry -> output 
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
process.env.NODE_ENV = process.env.NODE_ENV || "development"

if(process.env.NODE_ENV === 'development') {
  require("dotenv").config({ path: ".env.development" })
} else if (process.env.NODE_ENV === 'test'){
  require("dotenv").config({ path: ".env.test.2" })
}

module.exports = (env) => {

  const isProduction = env === "production"
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      })
    }]
  },
  plugins: [
    CSSExtract,
    new webpack.DefinePlugin({
      "process.env.APIKEY" : JSON.stringify(process.env.APIKEY),
      "process.env.AUTHDOMAIN" : JSON.stringify(process.env.AUTHDOMAIN),
      "process.env.DATABASEURL" : JSON.stringify(process.env.DATABASEURL),
      "process.env.PROJECTID" : JSON.stringify(process.env.PROJECTID),
      "process.env.STORAGEBUCKET" : JSON.stringify(process.env.STORAGEBUCKET),
      "process.env.MESSAGINGSTORAGEID" : JSON.stringify(process.env.MESSAGINGSTORAGEID),
      "process.env.APPID" : JSON.stringify(process.env.APPID),
      "process.env.MEASUREMENTID" : JSON.stringify(process.env.MEASUREMENTID)
    })
    
  ],
  devtool: isProduction ? "source-map" : "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }

  }
}


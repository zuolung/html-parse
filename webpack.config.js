
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    "parser": "./src/parser.js",
    "parser.min": "./src/parser.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "lib"),
    library: "plugin", // 打包暴露出去库的名称
    libraryExport: "default", // 
    libraryTarget: "umd", // var | this | global | window | umd | commonJS
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },

  /** umd */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // production下默认开启  ugifyPlugin碰到es6打包会出错，而他不会
        include: /\.min.js$/,
      })
    ]
  }
}
// npm install webpack webpack-cli --save-dev
// npm install babel-loader --save-dev


const path = require('path');

module.exports = {
  entry: ['./main.js','./entry2.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    libraryTarget: 'umd'
  },
  mode:'development',
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: vueLoaderConfig
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },  
};
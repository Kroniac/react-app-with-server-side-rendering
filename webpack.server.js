const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  //Inform webpack that we are building bundle
  //for nodeJS, rather than for a browser
  target: 'node',

  //Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);

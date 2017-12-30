const path = require('path');

module.exports = {
  //Inform webpack that we are building bundle
  //for nodeJS, rather than for a browser
  target: 'node',

  //Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put output file generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  //Tell babel to run on every file it run through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};

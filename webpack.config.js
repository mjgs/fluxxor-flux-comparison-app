var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './public',
    publicPath: '',
    filename: '/js/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: './public/',
    port: process.env.PORT || 3000
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: {presets: ['es2015', 'react']}},
      {test: /\.css$/, loaders: ['style', 'css?sourceMap'], include: path.join(__dirname, 'src')},
      {test: /\.json$/, loader: 'json'}
    ]
  }
};

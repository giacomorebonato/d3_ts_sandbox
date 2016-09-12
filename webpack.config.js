const path = require('path')

const config = {
  entry: {
    bundle: path.join(__dirname, 'src/app.ts'),
    style: path.join(__dirname, 'src/style.css'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file' }
    ]
  },
  ts: {
    silent: true
  }
}

module.exports = config

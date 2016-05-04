var
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  globals = require('./webpack.globals.json'),

  params = {
    progress: true,
    entry: { 'app': 'app.jsx' },

    module: {
      loaders: [
      {
        name: 'clientjs',
        test: /\.jsx?$/,
        include: __dirname + '/app/',
        loaders: [ 'babel' ],
      }, {
        name: 'styl',
        test: /\.styl$/,
        include: __dirname + '/app/',
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!stylus-loader?sourceMap='),
      }, {
        name: 'pics',
        test: /\.(jpe?g|png|svg)$/,
        include: __dirname + '/app/',
        loaders: [ 'file?name=[path][name].[ext]?[hash]' ],
      } ],
    },
    resolve: {
      root: [
        __dirname + '/app/'
      ],
      extentions: [ '', 'js', 'jsx', 'styl' ],
    },
    output: {
      path: __dirname + '/static/compiled/',
      filename: '[name].js',
      publicPath: '/compiled/'
    },
    plugins: [
      new webpack.ProvidePlugin(globals)
    ]
  };

module.exports = {
    'default': require('./webpack.config.dev'),
    'build': require('./webpack.config.build')
  }[process.env['NODE_ENV'] || 'default'](params);

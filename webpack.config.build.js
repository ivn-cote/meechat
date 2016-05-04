var
  _ = require('lodash'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

function getSourceMapPublicPath(info) { // TBD
  return '/get/source?path=' + info.resourcePath;
}

module.exports = function(params) {
  return _.extend(_.cloneDeep(params), {
    plugins: params.plugins.concat([
      new ExtractTextPlugin('[name].css'),
      new webpack.optimize.DedupePlugin()
    ])
  });
};

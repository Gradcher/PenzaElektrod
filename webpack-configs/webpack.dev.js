const webpack = require('webpack');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  stats: {
    children: true,
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: common.externals.paths.dist,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8082,
    open: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

/* contentBase — отвечает за то, где будет открываться webpack

У парня в видосе devtool: "cheap-module-eval-source-map", а надо "eval-cheap-module-source-map"
 */

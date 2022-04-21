const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/PUG/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

module.exports = {
  externals: {
    paths: PATHS,
  },
  /* With «externals» object we make «PATHS» constant available for other configs*/
  entry: {
    app: `${PATHS.src}/JS`,
    /* There is no need to write full path to the index.js */
  },
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}JS/[name].js`, // [name] = «app» from the «entry» object
    assetModuleFilename: `${PATHS.assets}IMG/[name][ext]`,
  },
  /* assetModuleFilename is the same as filename but for Asset Modules.*/
  /* name: '[name].[ext]' — [name] allow to safe original image name, not meaningless hash(беспорядок)
  If our image has a name — «apple.jpg» for example, then with [name] setting the name of our image will remain unchanged.
  Without that setting the name would have looked like — "jcvdhrk.jpg" */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpe?g)$/i,
        type: 'asset/resource',
      },
      /* type: 'asset/resource' is replace for file-loader */
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      /* type: 'asset/inline' is replace for inline-loader */
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },

  plugins: [
    //   new HtmlWebpackPlugin({
    //     hash: false,
    //     template: `${PATHS.src}/HTML/index.html`,// file that will be used as template
    //     filename: 'index.html'// name of output file
    //   }), — processing for only one html page
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
        })
    ),
  ],
};

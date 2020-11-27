import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

// Config.
import commonConfig from './common.config';

// Constants.
import * as WebpackConstants from './constants';

const config: Partial<Configuration> = merge(commonConfig, {
  devtool: 'source-map',

  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // Rule of thumb: add any vendor files that are > 50kb
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          test: /react|react-dom|styled-components/,
        },
      },
    },
  },

  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].[hash].js',
    path: WebpackConstants.DIST_PATH,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      },
      template: resolve(WebpackConstants.SRC_PATH, 'index.hbs'),
      title: WebpackConstants.TITLE,
    }),
  ],
});

export default config;

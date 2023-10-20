import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin, LoaderOptionsPlugin } from 'webpack';

// config
import { version } from '../package.json';

// constants
import { DIST_PATH, SRC_PATH, APP_TITLE } from './constants';

const config: Configuration = {
  module: {
    rules: [
      // templates
      {
        loader: 'handlebars-loader',
        test: /\.hbs$/,
      },

      // assets
      {
        test: /\.(png.+|gif?.+|jpg?.+|svg?.+|ttf?.+|woff?.+|woff2?.+)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },

  output: {
    clean: true,
    filename: '[name].js',
    path: DIST_PATH,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(SRC_PATH, 'docs'),
          to: resolve(DIST_PATH, 'docs'),
        },
      ],
    }),
    new DefinePlugin({
      __APP_TITLE__: JSON.stringify(APP_TITLE),
      __VERSION__: JSON.stringify(version),
    }),
    new LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer()],
      },
    }),
  ],

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
export default config;

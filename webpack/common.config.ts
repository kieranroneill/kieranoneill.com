import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin, LoaderOptionsPlugin } from 'webpack';

// Assets.
import packageJson from '../package.json';

// Constants.
import * as WebpackConstants from './constants';

const commonConfig: Partial<Configuration> = {
  module: {
    rules: [
      // Templating.
      {
        loader: 'handlebars-loader',
        test: /\.hbs$/,
      },

      // Scripts.
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: resolve(process.cwd(), 'tsconfig.json'),
        },
        test: /\.tsx?$/,
      },

      // Assets.
      {
        loader: 'url-loader',
        options: {
          limit: WebpackConstants.URI_LIMIT,
        },
        test: /\.(png|gif|jpg|svg)$/,
      },
      {
        loader: 'url-loader',
        options: {
          limit: WebpackConstants.URI_LIMIT,
        },
        test: /\.(ttf?.+|woff?.+|woff2?.+)$/,
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(WebpackConstants.SRC_PATH, 'docs'),
          to: resolve(WebpackConstants.DIST_PATH, 'docs'),
        },
      ],
    }),
    new DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV),
      ...(packageJson && {
        __VERSION__: JSON.stringify(packageJson.version),
      }),
    }),
    new FaviconsWebpackPlugin({
      logo: resolve(WebpackConstants.SRC_PATH, 'favicon.png'),
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
export default commonConfig;

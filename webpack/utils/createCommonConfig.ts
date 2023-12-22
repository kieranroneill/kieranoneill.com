import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { Configuration, LoaderOptionsPlugin } from 'webpack';

// constants
import { DIST_PATH, SRC_PATH } from '../constants';

export default function createCommonConfig(): Configuration {
  return {
    entry: {
      ['main']: resolve(SRC_PATH, 'index.ts'),
    },
    module: {
      rules: [
        // templates
        {
          loader: 'handlebars-loader',
          test: /\.hbs$/,
        },

        // assets
        {
          test: /\.(ttf?.+|woff?.+|woff2?.+)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(SRC_PATH, 'docs'),
            to: resolve(DIST_PATH, 'assets', 'docs'),
          },
          {
            from: resolve(SRC_PATH, 'images'),
            to: resolve(DIST_PATH, 'assets', 'images'),
          },
        ],
      }),
      new LoaderOptionsPlugin({
        options: {
          postcss: () => [autoprefixer()],
        },
      }),
    ],

    resolve: {
      alias: {
        ['@site/components']: resolve(SRC_PATH, 'components'),
        ['@site/commands']: resolve(SRC_PATH, 'commands'),
        ['@site/constants']: resolve(SRC_PATH, 'constants'),
        ['@site/theme']: resolve(SRC_PATH, 'theme'),
        ['@site/translations']: resolve(SRC_PATH, 'translations'),
        ['@site/types']: resolve(SRC_PATH, 'types'),
        ['@site/utils']: resolve(SRC_PATH, 'utils'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },

    stats: {
      assetsSpace: 100,
      modules: false,
    },
  };
}

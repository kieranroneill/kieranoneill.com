import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin, LoaderOptionsPlugin } from 'webpack';

// constants
import { DIST_PATH, SRC_PATH, APP_TITLE } from '../constants';

interface IOption {
  version: string;
}

export default function createCommonConfig({
  version,
}: IOption): Configuration {
  const extensionPath: string = resolve(SRC_PATH, 'extension');

  return {
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
      alias: {
        ['@site/components']: resolve(extensionPath, 'components'),
        ['@site/commands']: resolve(extensionPath, 'commands'),
        ['@site/constants']: resolve(extensionPath, 'constants'),
        ['@site/descriptions']: resolve(extensionPath, 'descriptions'),
        ['@site/theme']: resolve(extensionPath, 'theme'),
        ['@site/utils']: resolve(extensionPath, 'utils'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
  };
}

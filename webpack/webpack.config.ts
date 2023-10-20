import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import { Configuration as DevelopmentConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

// config
import commonConfig from './webpack.common.config';

// constants
import {
  DEVELOPMENT_ENVIRONMENT,
  PORT,
  PRODUCTION_ENVIRONMENT,
  SRC_PATH,
  APP_TITLE,
} from './constants';

const configs: (Configuration | DevelopmentConfiguration)[] = [
  /**
   * development
   */
  merge(commonConfig, {
    devtool: 'cheap-module-source-map',

    devServer: {
      port: PORT,
      watchFiles: [`${SRC_PATH}/**/*`],
    },

    entry: {
      ['main']: resolve(SRC_PATH, 'index.ts'),
    },

    mode: 'development',

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: resolve(process.cwd(), 'tsconfig.json'),
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },

    name: DEVELOPMENT_ENVIRONMENT,

    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },

    output: {
      pathinfo: false,
    },

    plugins: [
      new DefinePlugin({
        __ENV__: JSON.stringify(DEVELOPMENT_ENVIRONMENT),
      }),
      new HtmlWebpackPlugin({
        favicon: resolve(SRC_PATH, 'favicon.png'),
        filename: 'index.html',
        inject: 'body',
        minify: false,
        template: resolve(SRC_PATH, 'index.hbs'),
        title: APP_TITLE,
      }),
    ],
  }),

  /**
   * production
   */
  merge(commonConfig, {
    mode: 'production',

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: resolve(process.cwd(), 'tsconfig.json'),
              },
            },
          ],
        },
      ],
    },

    name: PRODUCTION_ENVIRONMENT,

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

    plugins: [
      new DefinePlugin({
        __ENV__: JSON.stringify(PRODUCTION_ENVIRONMENT),
      }),
      new HtmlWebpackPlugin({
        favicon: resolve(SRC_PATH, 'favicon.png'),
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
        template: resolve(SRC_PATH, 'index.hbs'),
        title: APP_TITLE,
      }),
    ],
  }),
];

export default configs;

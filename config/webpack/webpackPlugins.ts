import path from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { WebpackOptions } from './types/types';

export const webpackPlugins = ({ isDev, paths }: WebpackOptions): Configuration['plugins'] => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new HtmlInlineScriptPlugin({
      scriptMatchPattern: [/initColorScheme\..+\.js$/],
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(
      new CircularDependencyPlugin({
        failOnError: true,
      }),
    );
  } else {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};

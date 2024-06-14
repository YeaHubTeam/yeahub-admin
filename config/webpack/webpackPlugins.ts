import path from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
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
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    }),
    new Dotenv({
      path: paths.env,
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
    plugins.push(new BundleAnalyzerPlugin());
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
    plugins.push(
      new HtmlInlineScriptPlugin({
        scriptMatchPattern: [/initColorScheme\..+\.js$/],
      }),
    );
    plugins.push(new BundleAnalyzerPlugin());
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }],
      }),
    );
  }

  return plugins;
};

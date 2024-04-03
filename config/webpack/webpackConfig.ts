import { Configuration } from 'webpack';

import { WebpackOptions } from './types/types';
import { webpackDevServer } from './webpackDevServer';
import { webpackLoaders } from './webpackLoaders';
import { webpackOutput } from './webpackOutput';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';

export const webpackConfig = (options: WebpackOptions): Configuration => {
  const { isDev, mode, paths } = options;

  return {
    mode: mode ?? 'development',
    entry: {
      main: [paths.entry],
      initColorScheme: [paths.initColorScheme],
    },
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    output: webpackOutput(options),
    plugins: webpackPlugins(options),
    devServer: isDev ? webpackDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : 'source-map',
  };
};

import { Configuration } from 'webpack';
import { webpackDevServer } from './webpackDevServer';
import { webpackLoaders } from './webpackLoaders';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';
import { WebpackOptions } from './types/types';
import { webpackOutput } from './webpackOutput';

export const webpackConfig = (options: WebpackOptions): Configuration => {
    const { isDev, mode, paths } = options;

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(options),
        output: webpackOutput(options),
        plugins: webpackPlugins(options),
        devServer: isDev && webpackDevServer(options),
        devtool: isDev ? 'inline-source-map' : 'source-map'
    }
}

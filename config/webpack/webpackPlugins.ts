import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import { WebpackOptions } from './types/types';

export const webpackPlugins = ({ isDev, paths, services }: WebpackOptions): Configuration['plugins'] => {
    const plugins: Configuration['plugins'] = [
        new webpack.container.ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                admin: `admin@${services.admin}/remoteEntry.js`
            },
            shared: {
                react: {
                    eager: true,
                    singleton: true,
                },
                "react-dom": {
                    eager: true,
                    singleton: true,
                },
                "react-router-dom": {
                    eager: true,
                    singleton: true,
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico')
        }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new CircularDependencyPlugin({
            failOnError: true,
        }))
    } else {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}

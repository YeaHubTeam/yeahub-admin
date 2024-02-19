import path from 'path';
import type { Configuration } from 'webpack'
import { webpackConfig } from './config/webpack/webpackConfig';
import { WebpackMode, WebpackOptions, WebpackPaths } from './config/webpack/types/types';

interface EnvVariables {
    mode: WebpackMode;
    port: number;
    ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: WebpackPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
    }
    const isDev = env.mode === 'development'
    const options: WebpackOptions = {
        port: env.port ?? 3000,
        mode: env.mode,
        isDev,
        paths,
        services: {
            admin: env.ADMIN_REMOTE_URL ?? 'http://localhost:3001'
        }
    }

    const config: Configuration = webpackConfig(options)
    return config;
}

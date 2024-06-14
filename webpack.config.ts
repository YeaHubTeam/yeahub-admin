import path from 'path';

import dotenv from 'dotenv';
import type { Configuration } from 'webpack';

import { WebpackMode, WebpackOptions, WebpackPaths } from './config/webpack/types/types';
import { webpackConfig } from './config/webpack/webpackConfig';

interface EnvVariables {
  mode: WebpackMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: WebpackPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    initColorScheme: path.resolve(
      __dirname,
      'src',
      'features',
      'colorScheme',
      'utils',
      'initColorScheme.ts',
    ),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    env: path.resolve(
      __dirname,
      env.mode === 'production' ? '.env.production' : '.env.development',
    ),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  dotenv.config({ path: paths.env });

  const isDev = env.mode === 'development';
  const options: WebpackOptions = {
    port: env.port ?? process.env.PORT ? Number(process.env.PORT) : 3002,
    mode: env.mode,
    isDev,
    paths,
  };

  const config: Configuration = webpackConfig(options);
  return config;
};

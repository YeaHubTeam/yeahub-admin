import path from 'path';

import dotenv from 'dotenv';
import type { Configuration } from 'webpack';

import { WebpackMode, WebpackOptions, WebpackPaths } from './config/webpack/types/types';
import { webpackConfig } from './config/webpack/webpackConfig';

interface EnvVariables {
  mode: WebpackMode;
  port?: number | string;
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
    env: path.resolve(__dirname, '.env.production'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  // Пытаемся загрузить .env файл, если он существует
  try {
    dotenv.config({ path: paths.env });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: .env file not found. Using process.env values.`);
  }

  const isDev = env.mode === 'development';
  const port = env.port ?? process.env.PORT ?? 3000;

  // Добавляем DefinePlugin для передачи переменных окружения в приложение
  const envVars = {
    __IS_DEV__: JSON.stringify(isDev),
    'process.env.NODE_ENV': JSON.stringify(env.mode),
    'process.env.PORT': JSON.stringify(process.env.PORT || port),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  };

  const options: WebpackOptions = {
    port: +port,
    mode: env.mode,
    isDev,
    paths,
    envs: envVars,
  };

  const config: Configuration = webpackConfig(options);
  return config;
};

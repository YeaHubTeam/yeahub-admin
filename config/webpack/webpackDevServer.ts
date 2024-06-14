import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { WebpackOptions } from './types/types';

export const webpackDevServer = ({ port }: WebpackOptions): DevServerConfiguration => {
  return {
    port: port ?? 3002,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        //avoid displaying error due to https://github.com/ckeditor/ckeditor5/issues/8153
        runtimeErrors: (error) => {
          if (error.message === 'ResizeObserver loop completed with undelivered notifications.') {
            return false;
          }
          return true;
        },
      },
    },
  };
};

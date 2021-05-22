import reactRefresh from '@vitejs/plugin-react-refresh';
import eslint from '@rollup/plugin-eslint';
import path from 'path';
import { fillEnvHtml } from './config';

/**
 * @type {import('vite').UserConfig}
 */

// https://vitejs.dev/config/
export default ({ mode }) => {
  let config = {
    plugins: [
      {
        ...eslint({ include: 'src/**/*.+(js|jsx)', throwOnError: true }),
        enforce: 'pre',
      },
      reactRefresh(),
      fillEnvHtml(),
    ],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/_app'),
      },
    },
    server: {
      open: true,
    },
  };

  if (mode === 'production') {
  }

  if (mode === 'staging') {
    config = {
      ...config,
      build: {
        sourcemap: true,
      },
    };
  }

  if (mode === 'development') {
  }

  return config;
};

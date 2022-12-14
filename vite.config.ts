import path from 'path';
import dayjs from 'dayjs';
import type { ConfigEnv, UserConfig } from 'vite';
import { PORT, VITE_BASE_PATH, VITE_DROP_CONSOLE } from './config/constant';
import { createVitePlugins } from './config/plugins';
import pkg from './package.json';
const constant = require('./scripts/constant');

const resolve = (_: string) => path.resolve(__dirname, _);

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

const ViteConfig = ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';

  console.log({ command, mode });

  return {
    base: VITE_BASE_PATH,
    plugins: createVitePlugins(mode, isBuild),
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@@': resolve('./'),
        '@': resolve('./src'),
        '@components': resolve('./src/components'),
        '@services': resolve('./src/services'),
        '@utils': resolve('./src/utils'),
        '@hooks': resolve('./src/hooks'),
        '@enum': resolve('./src/enum'),
        '@store': resolve('./src/store'),
        '@constants': resolve('./src/constants'),
        '@assets': resolve('./src/assets'),
      },
    },
    server: {
      host: true,
      port: PORT,
    },
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1024,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
      PUBLIC_BASE_URL: constant.PUBLIC_BASE_URL,
    },
  };
};

export default ViteConfig;

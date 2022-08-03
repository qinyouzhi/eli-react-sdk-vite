import dayjs from 'dayjs';
import path from 'path';
import type { ConfigEnv, UserConfig } from 'vite';
import { PORT, VITE_BASE_PATH, VITE_DROP_CONSOLE } from './config/constant';
import { createVitePlugins } from './config/plugins';
import pkg from './package.json';
const constant = require('./scripts/constant');

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

const resolve = _path => path.resolve(__dirname, _path);

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
      alias: [
        { find: '@@', replacement: resolve('../') },
        { find: '@', replacement: resolve('../src') },
        { find: '@components', replacement: resolve('../src/components') },
        { find: '@services', replacement: resolve('../src/services') },
        { find: '@utils', replacement: resolve('../src/utils') },
        { find: '@hooks', replacement: resolve('../src/hooks') },
        { find: '@enum', replacement: resolve('../src/enum') },
        { find: '@store', replacement: resolve('../src/store') },
        { find: '@constants', replacement: resolve('../src/constants') },
        { find: '@assets', replacement: resolve('../src/assets') },
      ],
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

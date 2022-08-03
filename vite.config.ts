import dayjs from 'dayjs';
import path from 'path';
import type { ConfigEnv, UserConfig } from 'vite';

import { PORT, VITE_BASE_PATH, VITE_DROP_CONSOLE } from './config/constant';
import { createVitePlugins } from './config/vite/plugins';
import { createProxy } from './config/vite/proxy';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};
const resolve = _path => path.resolve(__dirname, _path);

// 函数式配置
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
      port: PORT, // 开发环境启动的端口
      proxy: createProxy(),
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
      // 设置应用信息
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
};

export default ViteConfig;

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';

import { VITE_APP_ANALYZE, VITE_APP_COMPRESS_GZIP, VITE_APP_COMPRESS_GZIP_DELETE_FILE, VITE_APP_LEGACY, VITE_APP_MOCK } from '../../constant';
import configMockPlugin from './mock';
import configVisualizerPlugin from './visualizer';

export const createVitePlugins = (viteEnv: string, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react()];

  VITE_APP_LEGACY && isBuild && vitePlugins.push(legacy());

  VITE_APP_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin());

  if (isBuild) {
    VITE_APP_COMPRESS_GZIP && vitePlugins.push(viteCompression({ deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE }));
  }

  return vitePlugins;
};

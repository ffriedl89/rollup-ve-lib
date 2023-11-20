
import { RollupOptions } from "rollup";
import esbuild from 'rollup-plugin-esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

const options: RollupOptions = {
  input: 'lib/index.ts',
  output: {
    preserveModules: true,
    assetFileNames({ name }) {
      return name?.replace(/^lib\//, '') ?? '';
    },
    dir: 'dist'
  },
  plugins: [
    vanillaExtractPlugin(),
    esbuild(),
  ],
  external: ['react']
}

export default options;
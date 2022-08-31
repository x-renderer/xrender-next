import copy from 'rollup-plugin-copy';
import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'es' },
  // 或者
  cjs: { output: 'lib' },
  platform: 'browser',
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //     },
  //     'antd',
  //   ],
  //   [
  //     'import',
  //     {
  //       libraryName: '@ant-design/icons',
  //       libraryDirectory: 'lib/icons',
  //       camel2DashComponentName: false,
  //     },
  //     '@ant-design/icons',
  //   ],
  // ],
});

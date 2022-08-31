import { defineConfig } from 'dumi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  title: 'XRender',
  favicon: 'https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png',
  logo: 'https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png',
  outputPath: 'docs-dist',
  hash: false,
  dynamicImport: {
    loading: '@/docs/Loading.js',
  },
  locales: [['zh-CN', '中文']],
  ignoreMomentLocale: false,
  navs: [
    {
      title: 'FormRender',
      path: '/form-render',
    },
    {
      title: 'TableRender',
      path: '/table-render',
    },
    {
      title: 'ChartRender',
      path: '/chart-render',
    },
    { title: '表单设计器', path: '/generator' },
    {
      title: 'Playground',
      path: '/playground',
    },
    {
      title: '周边工具',
      path: '/tools',
      children: [
        { title: 'PropToSchema', path: '/tools/proptypes' },
        { title: 'VSCode 插件', path: '/tools/vscode' },
        {
          title: '旧版文档',
          path: 'https://x-components.gitee.io/form-render/',
        },
      ],
    },
    {
      title: '更新日志',
      children: [
        {
          title: 'FormRender',
          path: 'https://github.com/alibaba/x-render/blob/master/packages/form-render/CHANGELOG.md',
        },
        {
          title: 'TableRender',
          path: 'https://github.com/alibaba/x-render/blob/master/packages/table-render/CHANGELOG.md',
        },
        {
          title: 'ChartRender',
          path: 'https://github.com/alibaba/x-render/blob/master/packages/chart-render/CHANGELOG.md',
        },
      ],
    },

    { title: 'GitHub', path: 'https://github.com/alibaba/x-render' },
  ],
  mode: 'site',
  esbuild: {},
  // base: '/x-render/',
  // publicPath: '/x-render/',
  exportStatic: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
      },
      '@alifd/next',
    ],
  ],
  sitemap: {
    hostname: 'https://xrender.fun',
  },

  chainWebpack(config, { webpack }) {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin);
  },
  // more config: https://d.umijs.org/config
});

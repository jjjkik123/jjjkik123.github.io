import { defineConfig } from 'dumi';
import { imgSrc } from './img';

export default defineConfig({
  hash: true,
  title: 'uLang',
  favicon: imgSrc,
  logo: imgSrc,
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  publicPath: './',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: 'css',
  //     },
  //   ],
  // ],
  // more config: https://d.umijs.org/config
});

import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Random-UI',
  favicon: ' ',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/random-react-v2',
  publicPath: '/random-react-v2/',
  exportStatic: {},
  dynamicImport: {},
  history: {
    type: 'hash',
  },
  sass: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/liuchengcheng1999/random-react-v2'
    }
  ]
});

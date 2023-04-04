import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Random-UI',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/random-react-v2',
  publicPath: '/random-react-v2/',
  exportStatic: {},
  dynamicImport: {},
  sass: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/liuchengcheng1999/random-react-v2'
    }
  ]
});

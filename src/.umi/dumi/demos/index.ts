// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Button/button.example.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Button/button.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Button/button.scss?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Dialog/dialog.example.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Dialog/dialog.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Dialog/dialog.scss?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/helpers/classmaker.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/basic.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/input.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/input.scss?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/disabled.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/readonly.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/error.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/layout.example.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/layout.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/layout.scss?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/aside.tsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/header.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/content.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/footer.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!/Users/sexbird/Documents/project/random-react-v2/src/Layout/layout.example.scss?dumi-raw-code';

export default {
  'button-button.example': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Button/button.example.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"button.tsx":{"import":"./button","content":rawCode2},"button.scss":{"import":"./button.scss","content":rawCode3}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"button-button.example"},
  },
  'dialog-dialog.example': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Dialog/dialog.example.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4},"dialog.tsx":{"import":"./dialog","content":rawCode5},"dialog.scss":{"import":"./dialog.scss","content":rawCode6},"helpers/classmaker.tsx":{"import":"../helpers/classmaker","content":rawCode7}},"dependencies":{"react":{"version":"^16.14.0"},"react-dom":{"version":"16.14.0"}},"identifier":"dialog-dialog.example"},
  },
  'input-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8},"input.tsx":{"import":"../input","content":rawCode9},"input.scss":{"import":"./input.scss","content":rawCode10}},"dependencies":{"react":{"version":"16.14.0"},"classnames":{"version":"2.3.2"}},"identifier":"input-basic"},
  },
  'input-disabled': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/disabled.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11},"input.tsx":{"import":"../input","content":rawCode9},"input.scss":{"import":"./input.scss","content":rawCode10}},"dependencies":{"react":{"version":"16.14.0"},"classnames":{"version":"2.3.2"}},"identifier":"input-disabled"},
  },
  'input-readonly': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/readonly.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12},"input.tsx":{"import":"../input","content":rawCode9},"input.scss":{"import":"./input.scss","content":rawCode10}},"dependencies":{"react":{"version":"16.14.0"},"classnames":{"version":"2.3.2"}},"identifier":"input-readonly"},
  },
  'input-error': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Input/demos/error.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13},"input.tsx":{"import":"../input","content":rawCode9},"input.scss":{"import":"./input.scss","content":rawCode10}},"dependencies":{"react":{"version":"16.14.0"},"classnames":{"version":"2.3.2"}},"identifier":"input-error"},
  },
  'layout-layout.example': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/sexbird/Documents/project/random-react-v2/src/Layout/layout.example.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode14},"layout.tsx":{"import":"./layout","content":rawCode15},"layout.scss":{"import":"./layout.scss","content":rawCode16},"aside.tsx":{"import":"./aside","content":rawCode17},"helpers/classmaker.tsx":{"import":"../helpers/classmaker","content":rawCode7},"header.tsx":{"import":"./header","content":rawCode18},"content.tsx":{"import":"./content","content":rawCode19},"footer.tsx":{"import":"./footer","content":rawCode20},"layout.example.scss":{"import":"./layout.example.scss","content":rawCode21}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"layout-layout.example"},
  },
};

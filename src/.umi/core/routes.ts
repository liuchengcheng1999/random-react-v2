// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/sexbird/Documents/object/random-react-v2/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/sexbird/Documents/object/random-react-v2/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/sexbird/Documents/object/random-react-v2/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1680233905357,
          "hero": {
            "title": "random-ui",
            "desc": "<div class=\"markdown\"><p>Random-UI 一个简单好用的UI组件库</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/intro"
              }
            ]
          },
          "features": [
            {
              "icon": "data:image/png;base64,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",
              "title": "基于React",
              "desc": "<div class=\"markdown\"><p>组件使用React函数组件编写</p></div>"
            },
            {
              "icon": "data:image/png;base64,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",
              "title": "基于TypeScript",
              "desc": "<div class=\"markdown\"><p>源代码使用TypeScript编写</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "代码简洁",
              "desc": "<div class=\"markdown\"><p>每个组件的源代码都清晰易懂</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Copyright © 2023<br />Powered by liuchengcheng1999</p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - Random-UI"
      },
      {
        "path": "/component/button",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/button.md",
          "updatedTime": 1680080924960,
          "title": "Button",
          "toc": false,
          "order": 2,
          "path": "/component",
          "group": {
            "path": "/component/",
            "title": "组件库"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 1,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 1,
              "value": "组件概述",
              "heading": "组件概述"
            },
            {
              "depth": 1,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "基础使用",
              "heading": "基础使用"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "组件库"
          }
        },
        "title": "Button - Random-UI"
      },
      {
        "path": "/component/components",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/components.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/components.md",
          "updatedTime": 1680079982306,
          "title": "组件总览",
          "toc": false,
          "order": 1,
          "nav": {
            "title": "组件库",
            "path": "/component"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "组件总览",
              "heading": "组件总览"
            },
            {
              "depth": 1,
              "value": "组件列表",
              "heading": "组件列表"
            },
            {
              "depth": 3,
              "value": "基础组件",
              "heading": "基础组件"
            },
            {
              "depth": 3,
              "value": "布局",
              "heading": "布局"
            }
          ]
        },
        "title": "组件总览 - Random-UI"
      },
      {
        "path": "/component/dialog",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/dialog.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/dialog.md",
          "updatedTime": 1680151481205,
          "title": "Dialog",
          "toc": false,
          "order": 4,
          "path": "/component",
          "group": {
            "path": "/component/",
            "title": "组件库"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Dialog",
              "heading": "dialog"
            },
            {
              "depth": 1,
              "value": "何时使用",
              "heading": "何时使用"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "组件库"
          }
        },
        "title": "Dialog - Random-UI"
      },
      {
        "path": "/component/input1",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/input1.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/input1.md",
          "updatedTime": 1680232760209,
          "title": "Input 1",
          "toc": false,
          "order": 5,
          "path": "/component",
          "group": {
            "path": "/component/",
            "title": "组件库"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 1,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 1,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 2,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 2,
              "value": "禁用 Input",
              "heading": "禁用-input"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "组件库"
          }
        },
        "title": "Input 1 - Random-UI"
      },
      {
        "path": "/component/input2",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/input2.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/input2.md",
          "updatedTime": 1680232769219,
          "title": "Input 2",
          "toc": false,
          "order": 6,
          "path": "/component",
          "group": {
            "path": "/component/",
            "title": "组件库"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 1,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 1,
              "value": "代码示例",
              "heading": "代码示例"
            },
            {
              "depth": 2,
              "value": "input 只读",
              "heading": "input-只读"
            },
            {
              "depth": 2,
              "value": "带有错误提示的 input",
              "heading": "带有错误提示的-input"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "组件库"
          }
        },
        "title": "Input 2 - Random-UI"
      },
      {
        "path": "/component/layout",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/component/layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/component/layout.md",
          "updatedTime": 1680080735625,
          "title": "Layout",
          "toc": false,
          "order": 3,
          "path": "/component",
          "group": {
            "path": "/component/",
            "title": "组件库"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Layout",
              "heading": "layout"
            },
            {
              "depth": 1,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 1,
              "value": "组件概述",
              "heading": "组件概述"
            },
            {
              "depth": 1,
              "value": "代码示例",
              "heading": "代码示例"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "组件库"
          }
        },
        "title": "Layout - Random-UI"
      },
      {
        "path": "/intro/install",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/intro/install.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/intro/install.md",
          "updatedTime": 1680238185410,
          "title": "安装",
          "order": 2,
          "path": "/intro",
          "group": {
            "path": "/intro/",
            "title": "指南"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "安装",
              "heading": "安装"
            }
          ],
          "nav": {
            "path": "/intro",
            "title": "指南"
          }
        },
        "title": "安装 - Random-UI"
      },
      {
        "path": "/intro/introduce",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/intro/introduce.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/intro/introduce.md",
          "updatedTime": 1680080018221,
          "title": "介绍",
          "order": 1,
          "nav": {
            "title": "指南",
            "path": "/intro",
            "order": 1
          },
          "group": {
            "path": "/intro/",
            "title": "指南"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "介绍",
              "heading": "介绍"
            }
          ]
        },
        "title": "介绍 - Random-UI"
      },
      {
        "path": "/intro/quickstart",
        "component": require('/Users/sexbird/Documents/object/random-react-v2/docs/intro/quickstart.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/intro/quickstart.md",
          "updatedTime": 1680228965326,
          "title": "快速开始",
          "order": 3,
          "nav": {
            "title": "指南",
            "path": "/intro"
          },
          "group": {
            "path": "/intro/",
            "title": "指南"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "开始使用",
              "heading": "开始使用"
            }
          ]
        },
        "title": "快速开始 - Random-UI"
      },
      {
        "path": "/component/",
        "meta": {},
        "exact": true,
        "redirect": "/component/button"
      },
      {
        "path": "/component",
        "meta": {},
        "exact": true,
        "redirect": "/component/components"
      },
      {
        "path": "/intro/",
        "meta": {},
        "exact": true,
        "redirect": "/intro/introduce"
      },
      {
        "path": "/intro",
        "meta": {},
        "exact": true,
        "redirect": "/intro/introduce"
      }
    ],
    "title": "Random-UI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

---
title: Layout
toc: false
order: 3
path: /component
group: 
  path: /
---

# Layout

协助进行页面级整体布局。

# 何时使用

需要对页面进行布局时

# 组件概述

- layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- aside：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。

- content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

- footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

# 代码示例

<code src='../../src/Layout/layout.example.tsx'/>
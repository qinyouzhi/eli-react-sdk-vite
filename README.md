# eli-react-sdk-vite (鳄梨科技 web端SDK模版)

## :pushpin: 依赖模块

<span style="color: rgb(184,49,47);">项目是用 create-react-app 创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站 😄😄</span>

-   [react](https://facebook.github.io/react/)
-   [react-router](https://github.com/remix-run/react-router/)
-   [hox](https://github.com/umijs/hox/)(<span style="color: rgb(243,121,52);">下一代 React 状态管理器</span>)
-   [fbm-ui](https://avocadotechopen.github.io/fbm-ui/)(<span style="color: rgb(243,121,52);">鳄梨科技内部UI组件框架</span>)
-   [mui](https://avocadotechopen.github.io/fbm-ui/)(<span style="color: rgb(243,121,52);">MUI 提供了一套全面的 UI 工具，可帮助您更快地发布新功能</span>)
-   [axios](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http 请求模块</span>)
-   [echarts](https://echarts.apache.org/zh/index.html)(<span style="color: rgb(243,121,52);">可视化图表</span>)
-   [immutability-helper](https://github.com/kolodny/immutability-helper)(<span style="color: rgb(243,121,52);">在不更改原始来源的情况下更改数据副本</span>)
-   [ahooks](https://ahooks.js.org/zh-CN)(<span style="color: rgb(243,121,52);">一套高质量可靠的 React Hooks 库</span>)
-   [sortablejs](http://www.sortablejs.com/)(<span style="color: rgb(243,121,52);">功能强大的JavaScript 拖拽库</span>)
-   其他小细节省略

## :mag: 代码目录

```js
+-- build/                                  ---打包测试的文件目录
+-- lib/                                    ---打包发包的文件目录
+-- config/                                 ---webpack配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- example/
|   +-- src/
|   |    +-- routers                        ---路由配置
|   |    +-- views                          ---组件测试
|   |    --- index.tsx                      ---入口文件
|   --- index.html                          ---入口html文件
+-- src/                                    ---核心代码目录
|   +-- components                          ---公共组件存放目录
|   +-- constants                           ---公用变量存放目录
|   +-- enum                                ---枚举文件存放目录
|   +-- modules                             ---核心开发模块
|   +-- services                            ---接口请求存放目录
|   +-- store                               ---数据流存放目录
|   +-- theme                               ---全局主题文件存放目录
|   +-- utils                               ---工具文件存放目录
|   --- index.tx                            ---项目的整体入口文件
--- .babelrc                                ---babel配置文件
--- .editorconfig                           ---编辑器配置文件
--- .eslintignore                           ---eslint排除文件
--- .eslintrc                               ---自定义eslint配置文件，约束代码规范
--- .gitignore                              ---git提交排除文件
--- .npmignore                              ---npm发包排除文件
--- .prettierignore                         ---prettierrc排除文件
--- .prettierrc                             ---自定义prettierrc配置文件，约束代码风格
--- package.json
```

## :package: 安装

### 1.下载或克隆项目源码

### 2.yarn 安装依赖(国内建议增加淘宝镜像源，不然很慢，你懂的 😁)

> 遇到运行时报错，首先确定下是不是最新稳定版的 nodejs 和 yarn，切记不要用 cnpm

```bash
// 首推荐使用yarn装包，避免自动升级依赖包
yarn
```

### 3.启动项目

```bash
yarn start
```

### 4.打包项目

```bash
yarn build
```
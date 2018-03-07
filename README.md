# easywebpack-multiple-html-boilerplate

HTML静态多页面Webpack构建工程化解决方案骨架

## 特性

- 支持 HTML 静态多页面构建
- 支持 nunjucks 模板静态多页面构建
- 支持 Webpack 构建自动刷新功能
- 支持 babel, es6, postcss, eslint等特性
- 支持 css, sass, less, styus 
- 支持构建结果UI展示
- 支持独立HTML模板和全局HTML模版
- 支持 [easywebpack-cli](https://github.com/hubcarl/easywebpack-cli) 创建项目和构建

更多特性请见 [基于 Webpack 的前端构建工程化解决方案](https://github.com/hubcarl/easywebpack)

# 版本

- easywebpack-html ^4.x.x > webpack 4.x.x 
- easywebpack-html ^2.x.x > webpack 3.x.x 

## 安装

```bash
npm install
```

```bash
npm install easywebpack-cli -g
```

## 运行


```bash
npm start 

// or
easy start

// or
node build
```


## 编译

```bash
npm run build

// or
easy build prod 

// or
node build
```

## HTML模板

- 独立模板, Entry目录下面包含同名的HTML页面
- 全局模板(entry.template), 没有独立模板时,将采用全局模板.

HTML构建时, 首先取独立模板,如果文件存在,则使用独立模板, 否则取全局模板.

## nunjucks

nunjucks loader 默认是禁用， 你可以通过如下方式开启：

```js
// webpack.config.js
module.exports = {
  loaders: {
    nunjucks: {
      options: {
        searchPaths: ['./widget', './test']  // nunjucks 模板查找目录
      }
    }
  },
}
```

## HTTP Proxy 

use [koa-proxy](https://github.com/popomore/koa-proxy) plugin proxy http request:

```js
// webpack.config.js
module.exports = {
  proxy: {
    host:  'http://localhost:8888',   
    match: /\/debug/
  },
}
```



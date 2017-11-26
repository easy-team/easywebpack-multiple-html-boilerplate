# easywebpack-multiple-html-boilerplate

HTML静态多页面Webpack构建工程化解决方案骨架

## 特性

- 支持HTML静态多页面构建
- 支持 Webpack 构建自动刷新功能
- 支持 babel, es6, postcss, eslint等特性
- 支持 css, sass, less, styus 
- 支持构建结构UI展示
- 支持独立HTML模板和全局HTML模版

更多特性请见 [基于 Webpack 的前端构建工程化解决方案](https://github.com/hubcarl/easywebpack)

## 运行


```bash
npm start
```


## 编译

```bash
npm run build
```

## HTML模板

- 独立模板, Entry目录下面包含同名的HTML页面
- 全局模板(entry.template), 没有独立模板时,将采用全局模板.

HTML构建时, 首先取独立模板,如果文件存在,则使用独立模板, 否则取全局模板.

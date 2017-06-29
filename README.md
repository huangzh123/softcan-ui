# [softcan-ui](https://softcan-ui.github.io/softcan-ui-doc/)
[![npm package](https://img.shields.io/npm/v/softcan-ui.svg?style=flat-square)](https://www.npmjs.org/package/softcan-ui)
[![Build Status](https://img.shields.io/circleci/project/softcan-ui/softcan-ui/develop.svg)](https://img.shields.io/circleci/project/softcan-ui/softcan-ui/develop.svg)
[![Dependencies](https://img.shields.io/david/softcan-ui/softcan-ui.svg?style=flat-square)](https://david-dm.org/softcan-ui/softcan-ui)


## Overview

本文将介绍`softcan-ui`的安装方式和基本的使用方法。

### 基础技术框架
1. [Vue.js](https://vuejs.org/)
2. [Lerna.js](https://lernajs.io/)
3. [ECMAScript 2015](https://babeljs.io/learn-es2015/)
4. [Webpack](https://webpack.github.io/docs/)
5. [ESLint](http://eslint.org/)

### 文件目录结构
``` bash
softcan-ui/						##根目录
	build/						##webpack构建配置目录
	config/						##环境配置文件目录
	demo/						##demo源文件
	dist/						##构建后的文件
		|_ demo/				##构建后的demo文件
		|_ softcan-ui/					##构建后的各个组件代码
	node_modules/				##第三方依赖包
	packages/					##lerna拆分的组件包源文件
	src/						##其他基础公共源文件
	static/						##静态资源文件（图片图标等）
		|_ demo/				##demo的静态资源文件
		|_ softcan-ui/					##softcan-ui组件的静态资源文件
	test/						##测试代码源文件
	.babelrc					##babel配置文件
	.editorconfig				##编辑器配置文件
	.eslintignore				##eslint忽略检查的文件
	.eslintrc					##eslint配置文件
	.gitignore					##git忽略文件的配置
	index.html					##总入口文件
	lerna.json					##lerna配置文件
	package.json				##依赖包声明
	README.md					##read me
```

## Getting Started

#### I.	Install

**npm安装**

推荐使用`npm`的方式安装，它能更好地与`Webpack`等构建工具结合使用。

``` bash
npm install softcan-ui
```

**CDN** *(TODO)*

可以从静态资源服务器获取最新的资源文件。

#### II. Start

**引入Softcan UI**

你可以引入整个`softcan-ui`组件库，或者根据需要引入部分组件。

##### 完整引入

完整引入softcan-ui后，在以后的引用中，不需再引入组件及样式，可直接在模板中使用或调用方法
在你的工程目录入口`js`文件中，写入以下内容：

``` javascript
import Vue from 'vue'
/* 引入组件库js文件 */
import softcan from 'softcan-ui'
/* 引入组件库全部css */
import 'softcan-ui/dist/softcan-ui/index.css'

Vue.use(softcan)

new Vue({
	// vue options
})
```
组件中使用，如在`example.vue`中使用`softcan-ui`:
```html
<!-- 在vue的template中直接引用即可 -->
<template>
    <div>
        <sc-button></sc-button>
		<sc-badge></sc-badge>
    </div>
</template>
```

##### 按需引入

你可以只安装你需要的组件。这里以安装`softcan-ui`的`button`组件为例：

``` bash
npm install softcan-ui --save
```
安装后在所需的`.vue`文件中进行声明和使用，或在入口`js`文件中声明：
```html
<template>
    <div>
        <sc-button>test</sc-button>
    </div>
</template>
```
``` javascript
<script>
import Vue from 'vue'
import {Button} from 'softcan-ui'
import 'softcan-ui/dist/softcan-ui/Button/index.css'
Vue.component(Button.name,Button)
</script>
```

### 贡献组件

**I.	开发**

目前在`package.json`中声明了多个脚本模式，可以通过`npm run xxx`的方式进行运行，各个命令启动服务如下：

``` bash
npm run dev:demo
启动demo的本地开发模式
npm run dev
启动组件库的本地开发模式
npm publish
发布更改到npm
```

**II. 测试**

```bash
npm run unit
执行单元测试
npm test
执行所有测试
```

**III. 构建**

构建demo页面：

``` bash
npm run build:demo
```
demo构建后的文件在`dist/demo`目录下。

构建完整组件库代码：

``` bash
npm run build
```
完整组件库构建后的文件在`dist/softcan-ui`目录下。


**IV. 发布**
请提交[Pull Request](https://git-scm.com/docs/git-request-pull)。

### 代码规范

请参考 [ESLint](http://eslint.org/) `standard` 规范进行书写，并执行`npm run lint`进行代码检查。

### Tips

如果你使用的是Webstorm，请在运行`npm install`之前，在`Preferences | Editor | File Types | Ignore files and folders`中增加`node_modules`，避免循环依赖造成的死循环。

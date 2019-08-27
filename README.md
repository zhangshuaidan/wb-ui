<!-- <p align="center">
  <a href="http://ant.design">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p> -->

<h1 align="center">WingBow Ui</h1>

<div align="center">
一套基于react的组件UI库
</div>

## 📦 安装

```bash
npm install wingbow-ui --save
```

```bash
yarn add wingbow-ui
```

## 🔨 示例

```jsx
import { Alert } from 'wingbow-ui'
ReactDOM.render(<Alert />, mountNode)
```

## ⌨️ 本地开发

#### 组件开发

```
1.运行开发服务: npm run start:demo

2. 在/src/components目录下放置待开发组件目录进行开发

3. 在/src/example/index.js 引入组件

4. 打开浏览器,输入http://localhost:1234 进行开发调试

```

#### 组件文档开发及部署

```
### 开发

1.在/src/docs 目录下创建对应组件的文档文件(.mdx结尾)

2.在终端中运行命令: npm run start:doc

3.打开浏览器,输入http://localhost:3000/ 进行文档预览

### 部署

4.运行终端命令: npm run build:doc

5.生成文档资源文件路径为/.docz/dist  部署在静态服务器即可

```

## 🚀 组件打包及发布

```
1.运行打包 npm run build

2.组件的打包产物路径为/lib, 运行命令 cd lib (注意组件的发布路径为/lib)

3.登录远程仓库 npm login

4.发布组件 npm publish

```

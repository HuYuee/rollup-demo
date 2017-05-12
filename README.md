# rollup-demo
rollup技术分享
## 入门

1. demo1:基本使用

   npm install -D rollup（demo1）

2. ###### 代码监听，实时打包

   npm install -D rollup-watch（npm run demo1_watch）

3. 支持引入json文件

   npm install -D rollup-plugin-json（demo2）

4. 对es6第三方库打包

   npm install -D rollup-plugin-node-resolve（demo3）

5. 将cmd格式的文件转换成es6语法。**注意：ES模块*始终*在严格模式下解析。这意味着当汇总解析使用它们的模块时，某些非严格结构（如八进制文字）将被视为语法错误。一些较旧的CommonJS模块依赖于这些构造，如果依赖于它们，那么您的捆绑包将会爆炸。基本上没有什么可以做的。**

   npm install -D rollup-plugin-commonjs

6. rollup只是打包es6，但是他能解析的功能也比较少，要解析比如箭头函数，还是得使用babel插件（demo4）

   npm i -D rollup-plugin-babel

   npm i -D babel-preset-latest

   npm i -D babel-plugin-external-helpers






## 深入

1. 按需加载（demo5）
2. 与gulp联合使用（多到多）（demo6）
3. 探索注释头，压缩，生成不同格式如cmd，browser，和多出口等插件，其中多出口有问题（demo7）
4. commonjs转换问题

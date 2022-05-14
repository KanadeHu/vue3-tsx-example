# Vue3-Tsx-Example

### 前置

---

&emsp;&emsp;我们推荐使用 yarn 和 pnpm 两种方式启动，当然也可以使用 npm 启动也是可以的，选择自己熟悉的

&emsp;&emsp;`pnpm install && pnpm run dev`

&emsp;&emsp;或者

&emsp;&emsp;`yarn && yarn dev`

&emsp;&emsp;执行单元测试

&emsp;&emsp;`pnpm run test`

&emsp;&emsp;注意本项目模板没有加入任何的组件库，究其原因是 vue 相关的 ui 组件库项目来讲还是很丰富的，诸如 `element、ant-desigin-vue、vant`等等，这块留出空白区域教给使用的各位，按照自己熟悉的组件库来去开发

### 一、模板介绍

---

&emsp;&emsp;这个项目是基于 vue3、vite、tailwindcss、jest 单层创建一个项目模板，可以让我们快速开始开发的一个基础版本项目，下面是这个项目里面的一些工具库方法供参考使用

- [vue3](https://v3.cn.vuejs.org/api/)
- [tailwindcss](https://www.tailwindcss.cn/docs)
- [pina](https://pinia.vuejs.org/introduction.html)
- [vite](https://vitejs.cn/)
- eslint
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [vite-plugin-parser-html](https://github.com/KanadeHu/vite-plugin-parse-html)
- [vue-test-utils](https://test-utils.vuejs.org/)
- [jest](https://www.jestjs.cn/)
- vue/test-utils、@testing-library/dom、@testing-library/user-event、@testing-library/user-event（vue 单元测试工具）
- @babel/core、babel-jest、@vue/babel-preset-app (babel 这里仅仅用来作单元测试，并没有和打包结合)
- ?vue-jest (此项作为可选项目，我在项目中使用的是 tsx 语法糖，并没有使用 vue 的模板方式，单测就没有用该方式)
- typescript

### 二、项目结构目录说明

---

&emsp;&emsp;项目概览图如下，这个是我喜欢的结构，大家按照自己的喜好自行调整即可

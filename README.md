# peach-split-button

> vue 悬停分割按钮<br>
> split button with hover effect component for Vue.js

## 在线预览 | Preview demo

https://taoqi0813.github.io/#/peach-split-button

## 快速上手 | Getting started

### 安装 | Installation

```
npm install -S peach-split-button
```

### 在 main.js 引用 | In Main.js:

```
import PeachSplitBtn from 'peach-split-button'
Vue.use(PeachSplitBtn)
```

### 用法 | Usage

```
<peach-split-btn
  :label="label"
  :active="active"
  :split="split"
  :width="width"
  :left="left"
  :top="top"
  :z-index="zIndex"
  :bg-color="bgColor"
  :text-color="textColor"
  :click-func="btnClick"
>
  这里用slot自己插菜单
</peach-split-btn>
```

### 配置 | Options

- label

  - 按钮的文本 | main-button label
  - 类型: String | Type: String
  - 默认值: '' | Default: ''
  - 可用插槽替代，slot="label"

- active

  - 激活状态 | button active state
  - 类型: Boolean | Type: Boolean
  - 默认值: false | Default: false

- split

  - 是否分割 | split button or not
  - 类型: Boolean | Type: Boolean
  - 默认值: true | Default: true

- width

  - 按钮宽度 | button width
  - 类型: [String, Number] | Type: [String, Number]
  - 不要带单位，固定 px | no unit, is 'px'
  - 默认值: 120 | Default: 120

- left

  - 菜单left | menu left
  - 类型: [String, Number] | Type: [String, Number]
  - 不要带单位，固定 px | no unit, is 'px'
  - 默认值: 0 | Default: 0

- top

  - 菜单top | menu top
  - 类型: [String, Number] | Type: [String, Number]
  - 不要带单位，固定 px | no unit, is 'px'
  - 默认值: 0 | Default: 0

- z-index

  - 菜单z-index | menu z-index
  - 类型: [String, Number] | Type: [String, Number]
  - 默认值: 1 | Default: 1

- bg-color

  - 按钮背景色 | button background color
  - 类型: String | Type: String
  - 默认值: '#1976d2' | Default: '#1976d2'

- text-color
 
  - 按钮文本色 | button color
  - 类型: String | Type: String
  - 默认值: '#fff' | Default: '#fff'

- click-func
 
  - 主按钮点击事件回调函数 | main-button click function
  - 类型: Function | Type: Function
  - 回调参数: click event | Arg: click event

### 插槽 | slots

#### slot="default"

- 菜单 | menu

#### slot="label"

- 按钮文本 | button label

## 更新日志 | Log

| 版本号 | 更新时间  | 更新内容                         |
| ------ | --------- | -------------------------------- |
| 0.1.1  | 2021/1/14 | 增加z-index属性                       |
| 0.1.0  | 2021/1/13 | 初始化项目                       |

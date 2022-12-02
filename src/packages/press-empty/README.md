---
url : pages/press/empty/empty
---

## Empty 空状态 

空状态时的占位提示。


## 代码演示

### 基础用法

```html
<press-empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<press-empty image="error" description="描述文字" />
<!-- 网络错误 -->
<press-empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<press-empty image="search" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<press-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<press-empty description="描述文字">
  <press-button round type="danger" class="bottom-button">按钮</press-button>
</press-empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

### E-SPORT

新增`e-sport`类型。

```html
<press-empty type="e-sport" />
```

## API

### Props

| 参数        | 说明                                                            | 类型     | 默认值    |
| ----------- | --------------------------------------------------------------- | -------- | --------- |
| image       | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string_ | `default` |
| description | 图片下方的描述文字                                              | _string_ | -         |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| -           | 自定义底部内容 |
| image       | 自定义图标     |
| description | 自定义描述文字 |

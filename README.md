# udn-election2020-shared-lib

> vue components shared library for election 2020 topics development

## Usage

### install
```
npm install @tenthree/udn-election2020-shared-lib
```

### components

* TheMenu

```js
props: {
  // 專案ID
  projectId: { type: String, required: true },
  // 專案正式網址
  projectUrl: { type: String, required: true },
  // 顯示標題, 格式為 "看懂2020 - 專案名稱"
  title: { type: String, default: '' },
  // 更換漢堡按鈕顏色 (選填)
  hamburgerColor: { type: String },
  // 自訂分享網址 (選填)
  shareUrl: { type: String, default: '' },
  // 自訂分享文字 (選填)
  shareText: { type: String, default: '' }
}
```

* TheUdnLogo

```js
props: {
  // 連結網址
  link: { type: String, default: '.' },
  // 連結標題
  title: { type: String, default: '聯合報' },
  // 連結目標 (選填)
  target: { type: String, default: '_blank' },
  // 更換 Logo 顏色 (選填)
  color: { type: String, default: '#2E2E2E' }
}
```

### example

* main.js

```js
import Vue from 'vue'

// import style
import '@tenthree/udn-election2020-shared-lib/dist/udn-election2020-shared-lib.min.css'

// import vue plugin
import Election2020 from '@tenthree/udn-election2020-shared-lib'

Vue.use(Election2020)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

* App.vue

```html
<template>
  <div id="app" class="app">
    <!-- TheUdnLogo -->
    <TheUdnLogo
      link="https://udn.com/newmedia/election2020/youth"
      title="關鍵選民"
      target="_blank"
      color="#1a1a1a"/>

    <!-- TheMenu -->
    <TheMenu
      project-id="youth"
      project-url="https://udn.com/newmedia/election2020/youth"
      title="看懂2020 - 關鍵選民"
      hamburger-color="#1a1a1a"/>
  </div>
</template>
```

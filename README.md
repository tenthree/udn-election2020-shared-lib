# udn-election2020-shared-lib

> vue components shared library for election 2020 topics development

## Usage

### install
```
npm install @tenthree/udn-election2020-shared-lib
```

### example

* main.js

```js
import Vue from 'vue'

// import style
import 'udn-election2020-shared-lib/dist/udn-election2020-shared-lib.min.css'

// import vue plugin
import Election2020 from 'udn-election2020-shared-lib'

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

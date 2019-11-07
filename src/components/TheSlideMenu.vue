<template>
  <transition name="the-slide-menu">
    <div class="the-slide-menu" v-show="opened">
      <div class="the-slide-menu__head">
        <div class="the-slide-menu__title">
          <SvgSymbol class="the-slide-menu__title-bg" use="#slide-menu-title-bg"/>
          <div class="the-slide-menu__title-text">看懂2020</div>
        </div>
      </div>
      <div class="the-slide-menu__body">
        <ul class="the-slide-menu__link-list">
          <li class="the-slide-menu__link-item" v-for="item in data" :key="`${item.project}${item.title}${item.url}`">
            <a class="the-slide-menu__link-btn"
              :class="{ 'the-slide-menu__link-btn--active': item.project === activeId }"
              :href="item.url"
              :title="item.title"
              :target="item.project === activeId ? '_self' : '_blank'"><!--
            --><span class="the-slide-menu__link-label">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import SvgSymbol from './SvgSymbol'

const SLIDE_MENU_API = 'https://udn.com/newmedia/election2020/menu/menu.php'

export default {
  name: 'TheSlideMenu',
  components: {
    SvgSymbol
  },
  props: {
    activeId: { type: String, required: true },
    opened: { type: Boolean, required: true }
  },
  data () {
    return {
      xhr: null,
      data: []
    }
  },
  methods: {
    onRequestStateChange (event) {
      if (this.xhr.readyState === XMLHttpRequest.DONE) {
        if (this.xhr.status !== 200) {
          console.warn(`[TheSlideMenu] request failed. status code=${this.xhr.status} text="${this.xhr.statusText}"`)
          return
        }
        let data = []
        try {
          data = JSON.parse(this.xhr.responseText)
        } catch (err) {
          console.warn(`[TheSlideMenu] request failed of JSON.parse error`)
          console.warn(err)
        }
        this.data = [ ...data ]
      }
    }
  },
  created () {
    this.xhr = new XMLHttpRequest()
    this.xhr.addEventListener('readystatechange', this.onRequestStateChange)
    this.xhr.open('GET', SLIDE_MENU_API)
    this.xhr.send()
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.the-slide-menu {
  // @include use-layer(&);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 80%;
  max-width: 280px;
  height: 100%;
  text-align: left;
  background: white;
  box-shadow: -4px 0 8px -6px rgba(0, 0, 0, 0.4);
  backface-visibility: hidden;

  &__head {
    position: relative;
    padding-top: 100px;
  }

  &__body {
    position: absolute;
    top: (138px + 20px);
    bottom: 0;
    width: 100%;
    overflow: auto;
  }

  &__title {
    position: relative;
    width: 159px;
    height: 38px;
    @include use-fixed-ratio(159, 38);

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      font-family: "Montserrat", "Noto Sans TC", sans-serif;
      text-indent: 1.75em;
      letter-spacing: 0.1em;
      line-height: 32px;
    }
  }

  &__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__link-item {

  }

  &__link-btn {
    display: block;
    position: relative;
    width: 100%;
    padding: 12px 0;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 40px;
      height: 5px;
      background: #dddddd;
      transform: translateY(-50%);
    }

    &:active {
      padding: 13px 0 11px 0;
    }
  }

  &__link-label {
    display: inline-block;
    margin-left: 52px;
    color: #999999;
    font-size: 1.125em;
  }

  &__link-btn--active {
    &:after {
      background: black;
    }

    .the-slide-menu__link-label {
      color: #1a1a1a;
    }
  }

  // vue transition
  &-enter-active,
  &-leave-active {
    transition: transform 0.35s;
  }
  &-enter,
  &-leave-to {
    transform: translateX(100%);
  }
  &-enter-to,
  &-leave {
    transform: translateX(0);
  }
}

.desktop {
  $comp: ".the-slide-menu";

  #{$comp} {
    &__link-btn {
      &:hover {
        &:after {
          background: black;
          transition: background 0.3s;
        }

        #{$comp}__link-label {
          color: #1a1a1a;
          transition: color 0.3s;
        }
      }
    }
  }
}
</style>

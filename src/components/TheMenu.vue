<template>
  <div class="the-menu" v-lockscroll="isSlideMenuOpened">
    <SvgInlineResource/>
    <TheOverlay :visible="isSlideMenuOpened" @click="onOverlayClick"/>
    <TheSlideMenu :opened="isSlideMenuOpened" :active-id="projectId"/>
    <menu class="the-menu__list">
      <menuitem class="the-menu__item the-menu__item--hamburger">
        <button class="the-menu__btn the-menu__btn--hamburger" :style="btnHamburgerStyle" title="選單" @click.prevent="onHamburgerClick"><!--
        --><div class="the-menu__icon the-menu__icon--hamburger" :class="iconHamburgerClassName"></div>
        </button>
      </menuitem>
      <menuitem class="the-menu__item the-menu__item--facebook">
        <button class="the-menu__btn the-menu__btn--facebook" title="透過 Facebook 分享" @click.prevent="onShareFacebook"><!--
        --><SvgSymbol class="the-menu__icon the-menu__icon--facebook" use="#facebook"/>
        </button>
      </menuitem>
      <menuitem class="the-menu__item the-menu__item--line">
        <a class="the-menu__btn the-menu__btn--line" title="透過 LINE 分享" :target="lineSharedTarget" :href="lineSharedUrl" @click="onShareToLine"><!--
        --><SvgSymbol class="the-menu__icon the-menu__icon--line" use="#line"/>
        </a>
      </menuitem>
    </menu>
    <small class="the-menu__title">{{ title }}</small>
  </div>
</template>

<script>
import SvgInlineResource from './SvgInlineResource'
import SvgSymbol from './SvgSymbol'
import TheOverlay from './TheOverlay'
import TheSlideMenu from './TheSlideMenu'
import lockscroll from '../directives/lockscroll'

export default {
  name: 'TheMenu',
  components: {
    SvgInlineResource,
    SvgSymbol,
    TheOverlay,
    TheSlideMenu
  },
  directives: {
    lockscroll
  },
  props: {
    projectId: { type: String, required: true },
    projectUrl: { type: String, required: true },
    shareUrl: { type: String, default: '' },
    shareText: { type: String, default: '' },
    title: { type: String, default: '' },
    hamburgerColor: { type: String }
  },
  data () {
    const isMobile = this.$device.mobile()
    const isInApp = this.$inApp.isInApp
    const runtimeDomains = [
      'udn.com',
      'newmedia.udn.com.tw',
      'localhost'
    ]
    return {
      isMobile,
      isInApp,
      runtimeDomains,
      isHamburgerClicked: false,
      isSlideMenuOpened: false,
      socailSharedUrl: '',
      socailSharedText: ''
    }
  },
  computed: {
    btnHamburgerStyle () {
      if (!this.hamburgerColor) {
        return {}
      }
      return {
        'background-color': this.hamburgerColor,
        'border': `1px solid ${this.hamburgerColor}`
      }
    },
    iconHamburgerClassName () {
      return {
        'the-menu__icon--hamburger-no-animation': !this.isHamburgerClicked,
        'the-menu__icon--hamburger-close': this.isSlideMenuOpened
      }
    },
    lineSharedUrl () {
      // desktop
      if (!this.isMobile) {
        return `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(this.socailSharedText)}&url=${encodeURIComponent(this.socailSharedUrl)}`
      }
      // mobile
      if (!this.isInApp) {
        return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(this.socailSharedText)}%0D%0A${encodeURIComponent(this.socailSharedUrl)}`
      }
      // mobile in-app webview
      return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(this.socailSharedText)}%0D%0A${encodeURIComponent(this.socailSharedUrl)}`
    },
    lineSharedTarget () {
      if (!this.isMobile) {
        return '_blank'
      }
      return '_self'
    }
  },
  watch: {
    $route: {
      // immediate: true,
      handler (value, lastValue) {
        this.updateSharedInfo()
      }
    }
  },
  methods: {
    onHamburgerClick (event) {
      this.isHamburgerClicked = true
      this.isSlideMenuOpened = !this.isSlideMenuOpened
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Menu',
        'eventAction': 'Click',
        'eventLabel': 'Click_Menu'
      })
      console.log(`@${this.$options.name} [hamburgerClick]`)
    },
    onShareToLine () {
      console.log(`@${this.$options.name} [shareToLine]`, this.socailSharedUrl, this.socailSharedText)
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Share',
        'eventAction': 'Click',
        'eventLabel': 'Click_Line'
      })
    },
    onShareFacebook () {
      console.log(`@${this.$options.name} [shareToFacebook]`, this.socailSharedUrl, this.socailSharedText)
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Share',
        'eventAction': 'Click',
        'eventLabel': 'Click_FB'
      })
      this.shareToFacebook(null)
    },
    onOverlayClick () {
      this.isSlideMenuOpened = !this.isSlideMenuOpened
    },
    updateSharedInfo () {
      const { host, hostname, pathname } = window.location
      let url = this.shareUrl
      let text = this.shareText
      // there is no specific shareUrl property
      if (!url) {
        if (this.$route && this.$router && this.$router.options.mode === 'history') {
          // inferred from vue-router
          console.log(`@${this.$options.name} [shared url] inferred from "vue-router"`)
          url = `${this.projectUrl.replace(/\/$/, '')}${this.$route.path}`
          if (this.runtimeDomains.indexOf(hostname) !== -1) {
            let segments = url.replace(/^https?:\/\//, '').split('/')
            segments.shift()
            segments.unshift(host)
            url = `https://${segments.join('/')}`
          }
        } else {
          // inferred from runtime location or projectUrl
          if (this.runtimeDomains.indexOf(hostname) !== -1) {
            console.log(`@${this.$options.name} [shared url] inferred from runtime "location"`)
            url = `https://${host}${pathname}`
          } else {
            console.log(`@${this.$options.name} [shared url] inferred from property "project-url"`)
            url = this.projectUrl
          }
        }
        text = document.title
      } else {
        console.log(`@${this.$options.name} [shared url] inferred from property "share-url"`)
      }
      this.socailSharedUrl = url
      this.socailSharedText = text
    },
    shareToFacebook (url = '') {
      let socailSharedUrl = (url || this.socailSharedUrl).replace(/^http:\/\//, 'https://')
      let fbShareConfig = {
        method: 'share',
        display: 'popup',
        href: socailSharedUrl
      }
      window.FB && window.FB.ui(fbShareConfig)
    }
  },
  mounted () {
    this.updateSharedInfo()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Noto+Sans+TC:400,500,700&display=swap');

html, body {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.the-menu {
  $btn-size: 36px;
  // @include use-layer(&);
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 15px;
  font: normal 100%/150% "Montserrat", "Noto Sans TC", sans-serif;
  @include rwd($RWD_TABLET) {
    position: fixed;
    width: 70px;
    height: 100%;
    padding: 25px 0px;
    background: white;
    border-left: 1px solid #1a1a1a;
  }

  .the-overlay {
    z-index: 1;
  }

  .the-slide-menu {
    z-index: 2;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: block;
    position: relative;
    height: $btn-size;
    @include rwd($RWD_TABLET) {
      height: auto;
    }

    & + & {
      margin-top: 14px;
      @include rwd($RWD_TABLET) {
        margin-top: 22px;
      }
    }
  }

  &__btn {
    display: block;
    width: $btn-size;
    height: $btn-size;
    margin: 0;
    padding: 0;
    color: inherit;
    text-decoration: none;
    background: #222222;
    border: 1px solid #222222;
    border-radius: 50%;
    outline: none;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    @include use-vertical-align();
    @include rwd($RWD_TABLET) {
      margin: 0 auto;
    }

    &:active {
      transform: translateY(1px);
    }

    &--hamburger {
      z-index: 3;
      position: fixed;
      top: 10px;
      right: 15px;
      overflow: visible;
      @include rwd($RWD_TABLET) {
        position: relative;
        top: auto;
        right: auto;
      }
    }

    &--facebook {
    }

    &--line {
    }
  }

  &__icon {
    display: inline-block;
    position: relative;

    &.svg-symbol {
      color: white
    }

    // &--hamburger.svg-symbol {
    //   width: 20px;
    // }

    @keyframes hamburger {
      0% { transform: rotate(45deg); }
      50% { transform: rotate(0); }
      100% { transform: rotate(0); }
    }
    @keyframes hamburger-top {
      0% { transform: translateY(0) rotate(0); }
      50% { transform: translateY(0) rotate(0); }
      100% { transform: translateY(-200%) rotate(0); }
    }
    @keyframes hamburger-bottom {
      0% { transform: translateY(0) rotate(-90deg); }
      50% { transform: translateY(0) rotate(0); }
      100% { transform: translateY(200%) rotate(0); }
    }

    &--hamburger {
      display: inline-block;
      position: relative;
      width: 15px;
      height: 2px;
      background: white;
      vertical-align: middle;
      animation: hamburger 0.3s forwards;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        transform-origin: center center;
      }

      &:before {
        transform: translateY(-200%);
        animation: hamburger-top 0.3s forwards;
      }

      &:after {
        transform: translateY(200%);
        animation: hamburger-bottom 0.3s forwards;
      }

      &-no-animation {
        animation-duration: 0s !important;

        &:before,
        &:after {
          animation-duration: 0s !important;
        }
      }
    }

    @keyframes close {
      0% { transform: rotate(0); }
      50% { transform: rotate(0); }
      100% { transform: translateY(0) rotate(45deg); }
    }
    @keyframes close-left {
      0% { transform: translateY(-200%) rotate(0); }
      50% { transform: translateY(0) rotate(0); }
      100% { transform: translateY(0) rotate(0); }
    }
    @keyframes close-right {
      0% { transform: translateY(-200%) rotate(0); }
      50% { transform: translateY(0) rotate(0); }
      100% { transform: translateY(0) rotate(-90deg); }
    }

    &--hamburger-close {
      animation: close 0.3s forwards;

      &:before {
        animation: close-left 0.3s forwards;
      }

      &:after {
        animation: close-right 0.3s forwards;
      }
    }

    &--facebook.svg-symbol {
    }

    &--line.svg-symbol {
    }
  }

  &__title {
    display: none;

    @include rwd($RWD_TABLET) {
      display: block;
      position: absolute;
      bottom: 50px;
      left: 50%;
      color: #1a1a1a;
      font-size: 0.9375em;
      white-space: nowrap;
      transform-origin: right center;
      transform: translate(-100%, 0) rotate(90deg);
    }
  }
}
</style>

<template>
  <div class="the-menu" v-lockscroll="isSlideMenuOpened">
    <SvgInlineResource>
      <!-- spinner.svg -->
      <symbol id="spinner" viewBox="0 0 50 50">
        <g>
          <path d="M25.251 6.461c-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615V6.461z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.4s" repeatCount="indefinite"/>
          </path>
        </g>
      </symbol>

      <!-- from material-close.svg -->
      <symbol id="close" viewBox="0 0 24 24">
        <g>
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </g>
      </symbol>

      <!-- from clear.svg -->
      <symbol id="clear" viewBox="0 0 24 24">
        <g>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </g>
      </symbol>

      <!-- from material-info.svg -->
      <symbol id="info" viewBox="0 0 24 24">
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </g>
      </symbol>

      <!-- from material-menu.svg -->
      <symbol id="hamburger" viewBox="0 0 24 24">
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </g>
      </symbol>

      <!-- from material-pdf.svg -->
      <symbol id="pdf" viewBox="0 0 24 24">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
        </g>
      </symbol>

      <!-- from fb-share-icon.svg -->
      <symbol id="facebook" viewBox="0 0 63.5 63.5">
        <g>
          <path d="M34.07,46.75V33.07h4.6l.68-5.34H34.07v-3.4c0-1.55.43-2.6,2.65-2.6h2.82V17a36.38,36.38,0,0,0-4.11-.21c-4.08,0-6.87,2.49-6.87,7.05v3.93H24v5.34h4.6V46.75Z"/>
        </g>
      </symbol>

      <!-- from line-share-icon.svg -->
      <symbol id="line" viewBox="0 0 36 36.5">
        <g>
          <path d="M6.67,22.89h3.81a1,1,0,0,0,1-1v-.08a1,1,0,0,0-1-1H7.74V14.58a1,1,0,0,0-1-1H6.67a1,1,0,0,0-1,1V21.9A1,1,0,0,0,6.67,22.89ZM30.32,18.3v-.08a1,1,0,0,0-1-1H26.58V15.67h2.75a1,1,0,0,0,1-1V14.6a1,1,0,0,0-1-1H25.52a1,1,0,0,0-1,1v7.32a1,1,0,0,0,1,1h3.81a1,1,0,0,0,1-1v-.08a1,1,0,0,0-1-1H26.58V19.29h2.75a1,1,0,0,0,1-1ZM23,22.59h0a1,1,0,0,0,.28-.69V14.58a1,1,0,0,0-1-1H22.2a1,1,0,0,0-1,1v4.3l-3.57-4.79a1,1,0,0,0-.86-.5H16.7a1,1,0,0,0-1,1V21.9a1,1,0,0,0,1,1h.08a1,1,0,0,0,1-1V17.52l3.59,4.91.08.1h0a.75.75,0,0,0,.38.28,1,1,0,0,0,.38.08h.08a.93.93,0,0,0,.46-.12.55.55,0,0,0,.24-.18Zm-9.72.3h.08a1,1,0,0,0,1-1V14.58a1,1,0,0,0-1-1h-.08a1,1,0,0,0-1,1V21.9a1,1,0,0,0,1,1Z"/>
        </g>
      </symbol>

      <!-- from menu-title-bg.svg -->
      <symbol id="slide-menu-title-bg" viewBox="0 0 159 38">
        <g>
          <path fill="#dddddd" fill-rule="evenodd" d="M12,6H141l18,32H12V6Z"/>
          <path fill="#aaaaaa" fill-rule="evenodd" d="M0,0H129l18,32H0V0Z"/>
        </g>
      </symbol>
    </SvgInlineResource>

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

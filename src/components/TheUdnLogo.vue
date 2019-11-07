<template>
  <div class="the-udn-logo"><!--
  --><span class="the-udn-logo__text">{{ title }}</span><!--
  --><a class="the-udn-logo__link" :href="link" :title="title" :target="target"><!--
    --><i class="udn-icon udn-icon-logo" :style="iconStyle"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TheUdnLogo',
  props: {
    link: { type: String, default: '.' },
    title: { type: String, default: '聯合報' },
    target: { type: String, default: '_blank' },
    color: { type: String, default: '#2E2E2E' }
  },
  computed: {
    iconStyle () {
      return {
        color: this.color
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://udn.com/upf/newmedia/css/udn-font.css?v=1');

.the-udn-logo {
  // @include use-layer(&);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px;
  text-align: center;
  line-height: 1em;
  @include use-vertical-align();

  @include rwd($RWD_TABLET_SMALL) {
    padding: 25px;
  }

  &__text {
    display: none;
  }

  &__link {
    display: inline-block;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  i {
    font-size: 2.125em;
    margin: 0;

    @include rwd($RWD_TABLET_SMALL) {
      font-size: 3em;
    }
  }
}
</style>

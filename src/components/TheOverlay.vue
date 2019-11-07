<template>
  <transition name="the-overlay">
    <div class="the-overlay the-overlay-enter" v-if="isVisible" @click.prevent.stop="onClick"></div>
  </transition>
</template>

<script>
export default {
  name: 'TheOverlay',
  props: {
    visible: Boolean
  },
  computed: {
    isVisible () {
      return this.visible
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.the-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  &--visible {
    opacity: 1;
  }
}

.the-overlay-enter {
  opacity: 0;
}
.the-overlay-enter-active {
  transition: opacity 0.4s;
}
.the-overlay-enter-to {
  opacity: 1;
}
.the-overlay-leave {
  opacity: 1;
}
.the-overlay-leave-active {
  transition: opacity 0.4s;
}
.the-overlay-leave-to {
  opacity: 0;
}
</style>

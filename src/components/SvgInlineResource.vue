<template>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="0"
    height="0"
    class="svg-inline-resource">

    <!-- from .svg -->
    <!-- <symbol id="" viewBox="0 0 100 100">
    </symbol> -->

    <slot/>

  </svg>
</template>

<script>
export default {
  name: 'SvgInlineResource'
}
</script>

<style lang="scss" scoped>
.svg-inline-resource {
  position: fixed;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transform: scale(0);
  pointer-events: none;
}
</style>

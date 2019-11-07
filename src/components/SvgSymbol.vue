<template>
  <div class="svg-symbol">
    <svg>
      <g>
        <use :xlink:href="use"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgSymbol',
  props: {
    use: { typs: String, required: true }
  }
}
</script>

<style lang="scss">
.svg-symbol {
  width: 100%;
  height: 100%;
  color: inherit;
  user-select: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>

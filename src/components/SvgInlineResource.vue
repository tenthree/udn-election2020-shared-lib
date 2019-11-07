<template>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="0"
    height="0"
    class="svg-inline-resource">

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

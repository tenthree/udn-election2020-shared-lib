/*!
 * udn-election2020-shared-lib v0.0.8
 * @license MIT
 * https://github.com/tenthree/udn-election2020-shared-lib
 */
import device from 'current-device';
import DetectInApp from 'detect-inapp';

var ga = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var debug = process.env.NODE_ENV !== 'production';
  var status = !debug ? 'on' : 'off';
  var params = args.map(function (arg) {
    if (typeof arg === 'object') {
      return '{ ' + Object.keys(arg).map(function (key) {
        return (key + ": " + (arg[key]))
      }).join(', ') + ' }'
    }
    return arg
  });
  if (!debug) {
    window.ga && window.ga.apply(window, args);
  }
  console.log(("[GA " + status + "] ga(" + (params.join(', ')) + ")"));
};

//
//
//
//
//
//
//
//
//

var script = {
  name: 'TheUdnLogo',
  props: {
    link: { type: String, default: '.' },
    title: { type: String, default: '聯合報' },
    target: { type: String, default: '_blank' },
    color: { type: String, default: '#2E2E2E' }
  },
  computed: {
    iconStyle: function iconStyle () {
      return {
        color: this.color
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"the-udn-logo"},[_c('span',{staticClass:"the-udn-logo__text"},[_vm._v(_vm._s(_vm.title))]),_c('a',{staticClass:"the-udn-logo__link",attrs:{"href":_vm.link,"title":_vm.title,"target":_vm.target}},[_c('i',{staticClass:"udn-icon udn-icon-logo",style:(_vm.iconStyle)})])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TheUdnLogo = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  name: 'SvgInlineResource'
};

/* script */
var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"svg-inline-resource",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"0","height":"0"}},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = "data-v-7e994262";
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SvgInlineResource = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: 'SvgSymbol',
  props: {
    use: { typs: String, required: true }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"svg-symbol"},[_c('svg',[_c('g',[_c('use',{attrs:{"xlink:href":_vm.use}})])])])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SvgSymbol = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$3 = {
  name: 'TheOverlay',
  props: {
    visible: Boolean
  },
  computed: {
    isVisible: function isVisible () {
      return this.visible
    }
  },
  methods: {
    onClick: function onClick () {
      this.$emit('click');
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"the-overlay"}},[(_vm.isVisible)?_c('div',{staticClass:"the-overlay the-overlay-enter",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onClick($event)}}}):_vm._e()])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TheOverlay = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//

var SLIDE_MENU_API = 'https://udn.com/newmedia/election2020/menu/menu.php';

var script$4 = {
  name: 'TheSlideMenu',
  components: {
    SvgSymbol: SvgSymbol
  },
  props: {
    activeId: { type: String, required: true },
    opened: { type: Boolean, required: true }
  },
  data: function data () {
    return {
      xhr: null,
      data: []
    }
  },
  methods: {
    onRequestStateChange: function onRequestStateChange (event) {
      if (this.xhr.readyState === XMLHttpRequest.DONE) {
        if (this.xhr.status !== 200) {
          console.warn(("[TheSlideMenu] request failed. status code=" + (this.xhr.status) + " text=\"" + (this.xhr.statusText) + "\""));
          return
        }
        var data = [];
        try {
          data = JSON.parse(this.xhr.responseText);
        } catch (err) {
          console.warn("[TheSlideMenu] request failed of JSON.parse error");
          console.warn(err);
        }
        this.data = [].concat( data );
      }
    }
  },
  created: function created () {
    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener('readystatechange', this.onRequestStateChange);
    this.xhr.open('GET', SLIDE_MENU_API);
    this.xhr.send();
  },
  mounted: function mounted () {
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"the-slide-menu"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"}],staticClass:"the-slide-menu"},[_c('div',{staticClass:"the-slide-menu__head"},[_c('div',{staticClass:"the-slide-menu__title"},[_c('SvgSymbol',{staticClass:"the-slide-menu__title-bg",attrs:{"use":"#slide-menu-title-bg"}}),_vm._v(" "),_c('div',{staticClass:"the-slide-menu__title-text"},[_vm._v("看懂2020")])],1)]),_vm._v(" "),_c('div',{staticClass:"the-slide-menu__body"},[_c('ul',{staticClass:"the-slide-menu__link-list"},_vm._l((_vm.data),function(item){return _c('li',{key:("" + (item.project) + (item.title) + (item.url)),staticClass:"the-slide-menu__link-item"},[_c('a',{staticClass:"the-slide-menu__link-btn",class:{ 'the-slide-menu__link-btn--active': item.project === _vm.activeId },attrs:{"href":item.url,"title":item.title,"target":item.project === _vm.activeId ? '_self' : '_blank'}},[_c('span',{staticClass:"the-slide-menu__link-label"},[_vm._v(_vm._s(item.title))])])])}),0)])])])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TheSlideMenu = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

var isLocked = false;
var pageYOffsetBeforeLocked = 0;

function lockScroll (bool) {
  if ( bool === void 0 ) bool = true;

  var body = document.body;
  if (isLocked === bool) {
    return
  }
  isLocked = bool;
  if (!isLocked) {
    body.style.position = '';
    body.style.overflow = '';
    body.style.top = '';
    body.style.width = '';
    window.scrollTo(0, pageYOffsetBeforeLocked);
    pageYOffsetBeforeLocked = 0;
  } else {
    pageYOffsetBeforeLocked = window.pageYOffset;
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
    body.style.top = (-pageYOffsetBeforeLocked) + "px";
    body.style.width = '100%';
  }
}

var lockscroll = {
  name: 'lockscroll',
  bind: function bind (el, binding, vnode, oldVnode) {
    // [bind hook]
    lockScroll(binding.value);
  },
  inserted: function inserted (el, binding, vnode, oldVnode) {
    // [inserted hook]
  },
  update: function update (el, binding, vnode, oldVnode) {
    // [update hook]
  },
  componentUpdated: function componentUpdated (el, binding, vnode, oldVnode) {
    // [componentUpdated hook]
    lockScroll(binding.value);
  },
  unbind: function unbind (el, binding, vnode, oldVnode) {
    // [unbind hook]
    lockScroll(false);
  }
};

//

var script$5 = {
  name: 'TheMenu',
  components: {
    SvgInlineResource: SvgInlineResource,
    SvgSymbol: SvgSymbol,
    TheOverlay: TheOverlay,
    TheSlideMenu: TheSlideMenu
  },
  directives: {
    lockscroll: lockscroll
  },
  props: {
    projectId: { type: String, required: true },
    projectUrl: { type: String, required: true },
    shareUrl: { type: String, default: '' },
    shareText: { type: String, default: '' },
    title: { type: String, default: '' },
    hamburgerColor: { type: String }
  },
  data: function data () {
    var isMobile = this.$device.mobile();
    var isInApp = this.$inApp.isInApp;
    var runtimeDomains = [
      'udn.com',
      'newmedia.udn.com.tw',
      'localhost'
    ];
    return {
      isMobile: isMobile,
      isInApp: isInApp,
      runtimeDomains: runtimeDomains,
      isHamburgerClicked: false,
      isSlideMenuOpened: false,
      socailSharedUrl: '',
      socailSharedText: ''
    }
  },
  computed: {
    btnHamburgerStyle: function btnHamburgerStyle () {
      if (!this.hamburgerColor) {
        return {}
      }
      return {
        'background-color': this.hamburgerColor,
        'border': ("1px solid " + (this.hamburgerColor))
      }
    },
    iconHamburgerClassName: function iconHamburgerClassName () {
      return {
        'the-menu__icon--hamburger-no-animation': !this.isHamburgerClicked,
        'the-menu__icon--hamburger-close': this.isSlideMenuOpened
      }
    },
    lineSharedUrl: function lineSharedUrl () {
      // desktop
      if (!this.isMobile) {
        return ("https://social-plugins.line.me/lineit/share?text=" + (encodeURIComponent(this.socailSharedText)) + "&url=" + (encodeURIComponent(this.socailSharedUrl)))
      }
      // mobile
      if (!this.isInApp) {
        return ("https://line.naver.jp/R/msg/text/?" + (encodeURIComponent(this.socailSharedText)) + "%0D%0A" + (encodeURIComponent(this.socailSharedUrl)))
      }
      // mobile in-app webview
      return ("https://line.naver.jp/R/msg/text/?" + (encodeURIComponent(this.socailSharedText)) + "%0D%0A" + (encodeURIComponent(this.socailSharedUrl)))
    },
    lineSharedTarget: function lineSharedTarget () {
      if (!this.isMobile) {
        return '_blank'
      }
      return '_self'
    }
  },
  watch: {
    $route: {
      // immediate: true,
      handler: function handler (value, lastValue) {
        this.updateSharedInfo();
      }
    }
  },
  methods: {
    onHamburgerClick: function onHamburgerClick (event) {
      this.isHamburgerClicked = true;
      this.isSlideMenuOpened = !this.isSlideMenuOpened;
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Menu',
        'eventAction': 'Click',
        'eventLabel': 'Click_Menu'
      });
      console.log(("@" + (this.$options.name) + " [hamburgerClick]"));
    },
    onShareToLine: function onShareToLine () {
      console.log(("@" + (this.$options.name) + " [shareToLine]"), this.socailSharedUrl, this.socailSharedText);
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Share',
        'eventAction': 'Click',
        'eventLabel': 'Click_Line'
      });
    },
    onShareFacebook: function onShareFacebook () {
      console.log(("@" + (this.$options.name) + " [shareToFacebook]"), this.socailSharedUrl, this.socailSharedText);
      this.$ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Share',
        'eventAction': 'Click',
        'eventLabel': 'Click_FB'
      });
      this.shareToFacebook(null);
    },
    onOverlayClick: function onOverlayClick () {
      this.isSlideMenuOpened = !this.isSlideMenuOpened;
    },
    updateSharedInfo: function updateSharedInfo () {
      var ref = window.location;
      var host = ref.host;
      var hostname = ref.hostname;
      var pathname = ref.pathname;
      var url = this.shareUrl;
      var text = this.shareText;
      // there is no specific shareUrl property
      if (!url) {
        if (this.$route && this.$router && this.$router.options.mode === 'history') {
          // inferred from vue-router
          console.log(("@" + (this.$options.name) + " [shared url] inferred from \"vue-router\""));
          url = "" + (this.projectUrl.replace(/\/$/, '')) + (this.$route.path);
          if (this.runtimeDomains.indexOf(hostname) !== -1) {
            var segments = url.replace(/^https?:\/\//, '').split('/');
            segments.shift();
            segments.unshift(host);
            url = "https://" + (segments.join('/'));
          }
        } else {
          // inferred from runtime location or projectUrl
          if (this.runtimeDomains.indexOf(hostname) !== -1) {
            console.log(("@" + (this.$options.name) + " [shared url] inferred from runtime \"location\""));
            url = "https://" + host + pathname;
          } else {
            console.log(("@" + (this.$options.name) + " [shared url] inferred from property \"project-url\""));
            url = this.projectUrl;
          }
        }
        text = document.title;
      } else {
        console.log(("@" + (this.$options.name) + " [shared url] inferred from property \"share-url\""));
      }
      this.socailSharedUrl = url;
      this.socailSharedText = text;
    },
    shareToFacebook: function shareToFacebook (url) {
      if ( url === void 0 ) url = '';

      var socailSharedUrl = (url || this.socailSharedUrl).replace(/^http:\/\//, 'https://');
      var fbShareConfig = {
        method: 'share',
        display: 'popup',
        href: socailSharedUrl
      };
      window.FB && window.FB.ui(fbShareConfig);
    }
  },
  mounted: function mounted () {
    this.updateSharedInfo();
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"lockscroll",rawName:"v-lockscroll",value:(_vm.isSlideMenuOpened),expression:"isSlideMenuOpened"}],staticClass:"the-menu"},[_c('SvgInlineResource',[_c('symbol',{attrs:{"id":"spinner","viewBox":"0 0 50 50"}},[_c('g',[_c('path',{attrs:{"d":"M25.251 6.461c-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615V6.461z"}},[_c('animateTransform',{attrs:{"attributeType":"xml","attributeName":"transform","type":"rotate","from":"0 25 25","to":"360 25 25","dur":"0.4s","repeatCount":"indefinite"}})],1)])]),_vm._v(" "),_c('symbol',{attrs:{"id":"close","viewBox":"0 0 24 24"}},[_c('g',[_c('path',{attrs:{"d":"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"clear","viewBox":"0 0 24 24"}},[_c('g',[_c('path',{attrs:{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"info","viewBox":"0 0 24 24"}},[_c('g',[_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"hamburger","viewBox":"0 0 24 24"}},[_c('g',[_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"pdf","viewBox":"0 0 24 24"}},[_c('g',[_c('path',{attrs:{"fill":"none","d":"M0 0h24v24H0z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"facebook","viewBox":"0 0 63.5 63.5"}},[_c('g',[_c('path',{attrs:{"d":"M34.07,46.75V33.07h4.6l.68-5.34H34.07v-3.4c0-1.55.43-2.6,2.65-2.6h2.82V17a36.38,36.38,0,0,0-4.11-.21c-4.08,0-6.87,2.49-6.87,7.05v3.93H24v5.34h4.6V46.75Z"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"line","viewBox":"0 0 36 36.5"}},[_c('g',[_c('path',{attrs:{"d":"M6.67,22.89h3.81a1,1,0,0,0,1-1v-.08a1,1,0,0,0-1-1H7.74V14.58a1,1,0,0,0-1-1H6.67a1,1,0,0,0-1,1V21.9A1,1,0,0,0,6.67,22.89ZM30.32,18.3v-.08a1,1,0,0,0-1-1H26.58V15.67h2.75a1,1,0,0,0,1-1V14.6a1,1,0,0,0-1-1H25.52a1,1,0,0,0-1,1v7.32a1,1,0,0,0,1,1h3.81a1,1,0,0,0,1-1v-.08a1,1,0,0,0-1-1H26.58V19.29h2.75a1,1,0,0,0,1-1ZM23,22.59h0a1,1,0,0,0,.28-.69V14.58a1,1,0,0,0-1-1H22.2a1,1,0,0,0-1,1v4.3l-3.57-4.79a1,1,0,0,0-.86-.5H16.7a1,1,0,0,0-1,1V21.9a1,1,0,0,0,1,1h.08a1,1,0,0,0,1-1V17.52l3.59,4.91.08.1h0a.75.75,0,0,0,.38.28,1,1,0,0,0,.38.08h.08a.93.93,0,0,0,.46-.12.55.55,0,0,0,.24-.18Zm-9.72.3h.08a1,1,0,0,0,1-1V14.58a1,1,0,0,0-1-1h-.08a1,1,0,0,0-1,1V21.9a1,1,0,0,0,1,1Z"}})])]),_vm._v(" "),_c('symbol',{attrs:{"id":"slide-menu-title-bg","viewBox":"0 0 159 38"}},[_c('g',[_c('path',{attrs:{"fill":"#dddddd","fill-rule":"evenodd","d":"M12,6H141l18,32H12V6Z"}}),_vm._v(" "),_c('path',{attrs:{"fill":"#aaaaaa","fill-rule":"evenodd","d":"M0,0H129l18,32H0V0Z"}})])])]),_vm._v(" "),_c('TheOverlay',{attrs:{"visible":_vm.isSlideMenuOpened},on:{"click":_vm.onOverlayClick}}),_vm._v(" "),_c('TheSlideMenu',{attrs:{"opened":_vm.isSlideMenuOpened,"active-id":_vm.projectId}}),_vm._v(" "),_c('menu',{staticClass:"the-menu__list"},[_c('menuitem',{staticClass:"the-menu__item the-menu__item--hamburger"},[_c('button',{staticClass:"the-menu__btn the-menu__btn--hamburger",style:(_vm.btnHamburgerStyle),attrs:{"title":"選單"},on:{"click":function($event){$event.preventDefault();return _vm.onHamburgerClick($event)}}},[_c('div',{staticClass:"the-menu__icon the-menu__icon--hamburger",class:_vm.iconHamburgerClassName})])]),_vm._v(" "),_c('menuitem',{staticClass:"the-menu__item the-menu__item--facebook"},[_c('button',{staticClass:"the-menu__btn the-menu__btn--facebook",attrs:{"title":"透過 Facebook 分享"},on:{"click":function($event){$event.preventDefault();return _vm.onShareFacebook($event)}}},[_c('SvgSymbol',{staticClass:"the-menu__icon the-menu__icon--facebook",attrs:{"use":"#facebook"}})],1)]),_vm._v(" "),_c('menuitem',{staticClass:"the-menu__item the-menu__item--line"},[_c('a',{staticClass:"the-menu__btn the-menu__btn--line",attrs:{"title":"透過 LINE 分享","target":_vm.lineSharedTarget,"href":_vm.lineSharedUrl},on:{"click":_vm.onShareToLine}},[_c('SvgSymbol',{staticClass:"the-menu__icon the-menu__icon--line",attrs:{"use":"#line"}})],1)])]),_vm._v(" "),_c('small',{staticClass:"the-menu__title"},[_vm._v(_vm._s(_vm.title))])],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TheMenu = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var isIntersectionSupported = typeof window.IntersectionObserver !== 'undefined';
if (!isIntersectionSupported) {
  console.warn('[v-inview] Broswer is not compatible with InstersectionObserver api, callback will be called immediatetly');
}

var intersectionOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};

var Inview = {
  observe: function observe (element, options) {
    if ( options === void 0 ) options = {};

    var callback = null;
    var threshold = 0.2;
    var data = {};
    if (typeof options === 'function') {
      callback = options;
    } else if (typeof options.callback === 'function') {
      callback = options.callback || null;
      threshold = options.threshold || threshold;
      data = options.data || {};
    }
    if (!callback) {
      return
    }
    if (!isIntersectionSupported) {
      callback(JSON.parse(JSON.stringify(data)));
      return
    }
    var observer = new IntersectionObserver(function (entries) {
      var isInview = Array.prototype.slice.call(entries)
        .some(function (entry) {
          if (entry.intersectionRatio > threshold) {
            callback(JSON.parse(JSON.stringify(data)));
            observer.unobserve(entry.target);
            observer.disconnect();
            return true
          }
        }, this);
      if (isInview) {
        element = null;
        options = null;
        observer = null;
      }
    }, intersectionOptions);

    var onLoadToObserve = function (event) {
      window.removeEventListener('load', onLoadToObserve);
      observer.observe(element);
      onLoadToObserve = null;
    };
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoadToObserve);
    } else {
      observer.observe(element);
    }
  }
};

var inview = {
  name: 'inview',
  bind: function bind (el, binding, vnode, oldVnode) {
    // [bind hook]
  },
  inserted: function inserted (el, binding, vnode, oldVnode) {
    // [inserted hook]
    Inview.observe(el, binding.value);
  },
  update: function update (el, binding, vnode, oldVnode) {
    // [update hook]
  },
  componentUpdated: function componentUpdated (el, binding, vnode, oldVnode) {
    // [componentUpdated hook]
  },
  unbind: function unbind (el, binding, vnode, oldVnode) {
    // [unbind hook]
  }
};

var filter = function (text, maxLen) {
  if ( maxLen === void 0 ) maxLen = 95;

  var len = text.length;
  if (len > maxLen) {
    return ((text.slice(0, maxLen)) + "...")
  }
  return text
};

var name = 'ellipsis';

var ellipsis = {
  filter: filter,
  name: name
};

var regexp = /(\d)(?=(\d{3})+(?!\d))/g;

var format = function (num) {
  var point;
  num = num.toString();
  point = num.lastIndexOf('.');
  if (point < 0) {
    return num.replace(regexp, '$1,')
  }
  return num.substr(0, point).replace(regexp, '$1,') + num.substr(point)
};

var filter$1 = function (value) {
  if (isNaN(value)) {
    return value
  }
  return format(value)
};

var name$1 = 'numeric';

var numeric = {
  filter: filter$1,
  name: name$1
};

var format$1 = function (num) {
  num = Number(num * 100).toFixed(2);
  return (num + "%")
};

var filter$2 = function (value) {
  if (isNaN(value)) {
    return value
  }
  return format$1(value)
};

var name$2 = 'percentage';

var percentage = {
  filter: filter$2,
  name: name$2
};

var version = 'v0.0.8';

var namespace = '';

function registerComponents (Vue, components) {
  if ( components === void 0 ) components = [];

  components.forEach(function (component) { return Vue.component(("" + namespace + (component.name)), component); });
}

function registerDirectives (Vue, directives) {
  if ( directives === void 0 ) directives = [];

  directives.forEach(function (directive) { return Vue.directive(("" + namespace + (directive.name)), directive); });
}

function registerFilters (Vue, filters) {
  if ( filters === void 0 ) filters = [];

  filters.forEach(function (filter) { return Vue.filter(("" + namespace + (filter.name)), filter.filter); });
}

function install (Vue, options) {
  if ( options === void 0 ) options = {};

  if (install.installed) {
    return
  }
  install.installed = true;
  Vue.device = Vue.prototype.$device = device;
  Vue.inApp = Vue.prototype.$inApp = new DetectInApp(window.navigator.userAgent);
  Vue.ga = Vue.prototype.$ga = ga;
  var register = options.register; if ( register === void 0 ) register = true;
  if (register) {
    registerComponents(Vue, [ TheUdnLogo, TheMenu, SvgInlineResource, SvgSymbol ]);
    registerDirectives(Vue, [ inview, lockscroll ]);
    registerFilters(Vue, [ ellipsis, numeric, percentage ]);
  }
}

var plugin = {
  version: version,
  install: install,
  // components
  TheUdnLogo: TheUdnLogo,
  TheMenu: TheMenu,
  SvgInlineResource: SvgInlineResource,
  SvgSymbol: SvgSymbol,
  // directives
  inview: inview,
  lockscroll: lockscroll,
  // filters
  numeric: numeric,
  percentage: percentage
};

// auto install plugin in browser environment
var runtimeVue = null;
if (typeof window !== 'undefined') {
  runtimeVue = window.Vue || null;
} else if (typeof global !== 'undefined') {
  runtimeVue = global.Vue || null;
}
if (runtimeVue) {
  runtimeVue.use(plugin);
}

export default plugin;
export { SvgInlineResource, SvgSymbol, TheMenu, TheUdnLogo, install, inview, lockscroll, numeric, percentage, version };
//# sourceMappingURL=udn-election2020-shared-lib.esm.js.map

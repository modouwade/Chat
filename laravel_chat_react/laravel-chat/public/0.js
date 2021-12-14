(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      messages: [],
      newMessage: '',
      users: [],
      activeUser: false,
      typingTimer: false
    };
  },
  created: function created() {
    var _this = this;

    this.fetchMessages();
    Echo.join('chat').here(function (user) {
      _this.users = user;
    }).joining(function (user) {
      _this.users.push(user);
    }).leaving(function (user) {
      _this.users = _this.users.filter(function (u) {
        return u.id != user.id;
      });
    }).listen('MessageSent', function (event) {
      _this.messages.push(event.message);
    }).listenForWhisper('typing', function (user) {
      _this.activeUser = user;

      if (_this.typingTimer) {
        clearTimeout(_this.typingTimer);
      }

      _this.typingTimer = setTimeout(function () {
        _this.activeUser = false;
      }, 1000);
    });
  },
  methods: {
    fetchMessages: function fetchMessages() {
      var _this2 = this;

      axios.get('messages').then(function (response) {
        _this2.messages = response.data;
      });
    },
    sendMessage: function sendMessage() {
      this.messages.push({
        user: this.user,
        message: this.newMessage
      });
      axios.post('messages', {
        message: this.newMessage
      });
      this.newMessage = '';
    },
    sendTypingEvent: function sendTypingEvent() {
      Echo.join('chat').whisper('typing', this.user);
      console.log(this.user.name + ' is typing now');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-8" }, [
      _c("div", { staticClass: "card card-default" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Messages")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-0" }, [
          _c(
            "ul",
            {
              directives: [{ name: "chat-scroll", rawName: "v-chat-scroll" }],
              staticClass: "list-unstyled",
              staticStyle: { height: "300px", "overflow-y": "scroll" }
            },
            _vm._l(_vm.messages, function(message, index) {
              return _c("li", { key: index, staticClass: "p-2" }, [
                _c("strong", [_vm._v(_vm._s(message.user.name))]),
                _vm._v(
                  "\n                        " +
                    _vm._s(message.message) +
                    "\n                    "
                )
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newMessage,
              expression: "newMessage"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "message",
            placeholder: "Enter your message..."
          },
          domProps: { value: _vm.newMessage },
          on: {
            keydown: _vm.sendTypingEvent,
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.sendMessage($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newMessage = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm.activeUser
        ? _c("span", { staticClass: "text-muted" }, [
            _vm._v(_vm._s(_vm.activeUser.name) + " is typing...")
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-4" }, [
      _c("div", { staticClass: "card card-default" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Active Users")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "ul",
            _vm._l(_vm.users, function(user, index) {
              return _c("li", { key: index, staticClass: "py-2" }, [
                _vm._v(
                  "\n                         " +
                    _vm._s(user.name) +
                    "\n                     "
                )
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/assets/js/components/ChatMessages.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/ChatMessages.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessages.vue?vue&type=template&id=2915307b& */ "./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b&");
/* harmony import */ var _ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessages.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ChatMessages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ChatMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessages.vue?vue&type=template&id=2915307b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ChatMessages.vue?vue&type=template&id=2915307b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_2915307b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
// @ts-nocheck
!(function () {
  'use strict';
  function ssr_window_esm_isObject(obj) {
    return (
      null !== obj &&
      'object' == typeof obj &&
      'constructor' in obj &&
      obj.constructor === Object
    );
  }
  function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
      void 0 === target[key]
        ? (target[key] = src[key])
        : ssr_window_esm_isObject(src[key]) &&
          ssr_window_esm_isObject(target[key]) &&
          Object.keys(src[key]).length > 0 &&
          extend(target[key], src[key]);
    });
  }
  const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function ssr_window_esm_getDocument() {
    const doc = 'undefined' != typeof document ? document : {};
    return extend(doc, ssrDocument), doc;
  }
  const ssrWindow = {
    document: ssrDocument,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return '';
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      return 'undefined' == typeof setTimeout
        ? (callback(), null)
        : setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      'undefined' != typeof setTimeout && clearTimeout(id);
    },
  };
  function ssr_window_esm_getWindow() {
    const win = 'undefined' != typeof window ? window : {};
    return extend(win, ssrWindow), win;
  }
  class Dom7 extends Array {
    constructor(items) {
      'number' == typeof items
        ? super(items)
        : (super(...(items || [])),
          (function (obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, '__proto__', {
              get() {
                return proto;
              },
              set(value) {
                proto.__proto__ = value;
              },
            });
          })(this));
    }
  }
  function arrayFlat(arr = []) {
    const res = [];
    return (
      arr.forEach((el) => {
        Array.isArray(el) ? res.push(...arrayFlat(el)) : res.push(el);
      }),
      res
    );
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function dom7_esm_$(selector, context) {
    const window = ssr_window_esm_getWindow(),
      document = ssr_window_esm_getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if ('string' == typeof selector) {
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        0 === html.indexOf('<li') && (toCreate = 'ul'),
          0 === html.indexOf('<tr') && (toCreate = 'tbody'),
          (0 !== html.indexOf('<td') && 0 !== html.indexOf('<th')) ||
            (toCreate = 'tr'),
          0 === html.indexOf('<tbody') && (toCreate = 'table'),
          0 === html.indexOf('<option') && (toCreate = 'select');
        const tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;
        for (let i = 0; i < tempParent.childNodes.length; i += 1)
          arr.push(tempParent.childNodes[i]);
      } else
        arr = (function (selector, context) {
          if ('string' != typeof selector) return [selector];
          const a = [],
            res = context.querySelectorAll(selector);
          for (let i = 0; i < res.length; i += 1) a.push(res[i]);
          return a;
        })(selector.trim(), context || document);
    } else if (
      selector.nodeType ||
      selector === window ||
      selector === document
    )
      arr.push(selector);
    else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }
    return new Dom7(
      (function (arr) {
        const uniqueArray = [];
        for (let i = 0; i < arr.length; i += 1)
          -1 === uniqueArray.indexOf(arr[i]) && uniqueArray.push(arr[i]);
        return uniqueArray;
      })(arr),
    );
  }
  dom7_esm_$.fn = Dom7.prototype;
  const noTrigger = 'resize scroll'.split(' ');
  function shortcut(name) {
    return function (...args) {
      if (void 0 === args[0]) {
        for (let i = 0; i < this.length; i += 1)
          noTrigger.indexOf(name) < 0 &&
            (name in this[i]
              ? this[i][name]()
              : dom7_esm_$(this[i]).trigger(name));
        return this;
      }
      return this.on(name, ...args);
    };
  }
  shortcut('click'),
    shortcut('blur'),
    shortcut('focus'),
    shortcut('focusin'),
    shortcut('focusout'),
    shortcut('keyup'),
    shortcut('keydown'),
    shortcut('keypress'),
    shortcut('submit'),
    shortcut('change'),
    shortcut('mousedown'),
    shortcut('mousemove'),
    shortcut('mouseup'),
    shortcut('mouseenter'),
    shortcut('mouseleave'),
    shortcut('mouseout'),
    shortcut('mouseover'),
    shortcut('touchstart'),
    shortcut('touchend'),
    shortcut('touchmove'),
    shortcut('resize'),
    shortcut('scroll');
  const Methods = {
    addClass: function (...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')));
      return (
        this.forEach((el) => {
          el.classList.add(...classNames);
        }),
        this
      );
    },
    removeClass: function (...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')));
      return (
        this.forEach((el) => {
          el.classList.remove(...classNames);
        }),
        this
      );
    },
    hasClass: function (...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')));
      return (
        arrayFilter(
          this,
          (el) =>
            classNames.filter((className) => el.classList.contains(className))
              .length > 0,
        ).length > 0
      );
    },
    toggleClass: function (...classes) {
      const classNames = arrayFlat(classes.map((c) => c.split(' ')));
      this.forEach((el) => {
        classNames.forEach((className) => {
          el.classList.toggle(className);
        });
      });
    },
    attr: function (attrs, value) {
      if (1 === arguments.length && 'string' == typeof attrs)
        return this[0] ? this[0].getAttribute(attrs) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(attrs, value);
        else
          for (const attrName in attrs)
            (this[i][attrName] = attrs[attrName]),
              this[i].setAttribute(attrName, attrs[attrName]);
      return this;
    },
    removeAttr: function (attr) {
      for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
      return this;
    },
    transform: function (transform) {
      for (let i = 0; i < this.length; i += 1)
        this[i].style.transform = transform;
      return this;
    },
    transition: function (duration) {
      for (let i = 0; i < this.length; i += 1)
        this[i].style.transitionDuration =
          'string' != typeof duration ? `${duration}ms` : duration;
      return this;
    },
    on: function (...args) {
      let [eventType, targetSelector, listener, capture] = args;
      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (
          (eventData.indexOf(e) < 0 && eventData.unshift(e),
          dom7_esm_$(target).is(targetSelector))
        )
          listener.apply(target, eventData);
        else {
          const parents = dom7_esm_$(target).parents();
          for (let k = 0; k < parents.length; k += 1)
            dom7_esm_$(parents[k]).is(targetSelector) &&
              listener.apply(parents[k], eventData);
        }
      }
      function handleEvent(e) {
        const eventData = (e && e.target && e.target.dom7EventData) || [];
        eventData.indexOf(e) < 0 && eventData.unshift(e),
          listener.apply(this, eventData);
      }
      'function' == typeof args[1] &&
        (([eventType, listener, capture] = args), (targetSelector = void 0)),
        capture || (capture = !1);
      const events = eventType.split(' ');
      let j;
      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];
        if (targetSelector)
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            el.dom7LiveListeners || (el.dom7LiveListeners = {}),
              el.dom7LiveListeners[event] || (el.dom7LiveListeners[event] = []),
              el.dom7LiveListeners[event].push({
                listener: listener,
                proxyListener: handleLiveEvent,
              }),
              el.addEventListener(event, handleLiveEvent, capture);
          }
        else
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            el.dom7Listeners || (el.dom7Listeners = {}),
              el.dom7Listeners[event] || (el.dom7Listeners[event] = []),
              el.dom7Listeners[event].push({
                listener: listener,
                proxyListener: handleEvent,
              }),
              el.addEventListener(event, handleEvent, capture);
          }
      }
      return this;
    },
    off: function (...args) {
      let [eventType, targetSelector, listener, capture] = args;
      'function' == typeof args[1] &&
        (([eventType, listener, capture] = args), (targetSelector = void 0)),
        capture || (capture = !1);
      const events = eventType.split(' ');
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;
          if (
            (!targetSelector && el.dom7Listeners
              ? (handlers = el.dom7Listeners[event])
              : targetSelector &&
                el.dom7LiveListeners &&
                (handlers = el.dom7LiveListeners[event]),
            handlers && handlers.length)
          )
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];
              (listener && handler.listener === listener) ||
              (listener &&
                handler.listener &&
                handler.listener.dom7proxy &&
                handler.listener.dom7proxy === listener)
                ? (el.removeEventListener(
                    event,
                    handler.proxyListener,
                    capture,
                  ),
                  handlers.splice(k, 1))
                : listener ||
                  (el.removeEventListener(
                    event,
                    handler.proxyListener,
                    capture,
                  ),
                  handlers.splice(k, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...args) {
      const window = ssr_window_esm_getWindow(),
        events = args[0].split(' '),
        eventData = args[1];
      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];
        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: !0,
              cancelable: !0,
            });
            (el.dom7EventData = args.filter(
              (data, dataIndex) => dataIndex > 0,
            )),
              el.dispatchEvent(evt),
              (el.dom7EventData = []),
              delete el.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (callback) {
      const dom = this;
      return (
        callback &&
          dom.on('transitionend', function fireCallBack(e) {
            e.target === this &&
              (callback.call(this, e), dom.off('transitionend', fireCallBack));
          }),
        this
      );
    },
    outerWidth: function (includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(styles.getPropertyValue('margin-right')) +
            parseFloat(styles.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(styles.getPropertyValue('margin-top')) +
            parseFloat(styles.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const window = ssr_window_esm_getWindow();
      return this[0] ? window.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const window = ssr_window_esm_getWindow(),
          document = ssr_window_esm_getDocument(),
          el = this[0],
          box = el.getBoundingClientRect(),
          body = document.body,
          clientTop = el.clientTop || body.clientTop || 0,
          clientLeft = el.clientLeft || body.clientLeft || 0,
          scrollTop = el === window ? window.scrollY : el.scrollTop,
          scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft,
        };
      }
      return null;
    },
    css: function (props, value) {
      const window = ssr_window_esm_getWindow();
      let i;
      if (1 === arguments.length) {
        if ('string' != typeof props) {
          for (i = 0; i < this.length; i += 1)
            for (const prop in props) this[i].style[prop] = props[prop];
          return this;
        }
        if (this[0])
          return window.getComputedStyle(this[0], null).getPropertyValue(props);
      }
      if (2 === arguments.length && 'string' == typeof props) {
        for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
        return this;
      }
      return this;
    },
    each: function (callback) {
      return callback
        ? (this.forEach((el, index) => {
            callback.apply(el, [el, index]);
          }),
          this)
        : this;
    },
    html: function (html) {
      if (void 0 === html) return this[0] ? this[0].innerHTML : null;
      for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
      return this;
    },
    text: function (text) {
      if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
      for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
      return this;
    },
    is: function (selector) {
      const window = ssr_window_esm_getWindow(),
        document = ssr_window_esm_getDocument(),
        el = this[0];
      let compareWith, i;
      if (!el || void 0 === selector) return !1;
      if ('string' == typeof selector) {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        for (
          compareWith = dom7_esm_$(selector), i = 0;
          i < compareWith.length;
          i += 1
        )
          if (compareWith[i] === el) return !0;
        return !1;
      }
      if (selector === document) return el === document;
      if (selector === window) return el === window;
      if (selector.nodeType || selector instanceof Dom7) {
        for (
          compareWith = selector.nodeType ? [selector] : selector, i = 0;
          i < compareWith.length;
          i += 1
        )
          if (compareWith[i] === el) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let i,
        child = this[0];
      if (child) {
        for (i = 0; null !== (child = child.previousSibling); )
          1 === child.nodeType && (i += 1);
        return i;
      }
    },
    eq: function (index) {
      if (void 0 === index) return this;
      const length = this.length;
      if (index > length - 1) return dom7_esm_$([]);
      if (index < 0) {
        const returnIndex = length + index;
        return dom7_esm_$(returnIndex < 0 ? [] : [this[returnIndex]]);
      }
      return dom7_esm_$([this[index]]);
    },
    append: function (...els) {
      let newChild;
      const document = ssr_window_esm_getDocument();
      for (let k = 0; k < els.length; k += 1) {
        newChild = els[k];
        for (let i = 0; i < this.length; i += 1)
          if ('string' == typeof newChild) {
            const tempDiv = document.createElement('div');
            for (tempDiv.innerHTML = newChild; tempDiv.firstChild; )
              this[i].appendChild(tempDiv.firstChild);
          } else if (newChild instanceof Dom7)
            for (let j = 0; j < newChild.length; j += 1)
              this[i].appendChild(newChild[j]);
          else this[i].appendChild(newChild);
      }
      return this;
    },
    prepend: function (newChild) {
      const document = ssr_window_esm_getDocument();
      let i, j;
      for (i = 0; i < this.length; i += 1)
        if ('string' == typeof newChild) {
          const tempDiv = document.createElement('div');
          for (
            tempDiv.innerHTML = newChild, j = tempDiv.childNodes.length - 1;
            j >= 0;
            j -= 1
          )
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7)
          for (j = 0; j < newChild.length; j += 1)
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
      return this;
    },
    next: function (selector) {
      return this.length > 0
        ? selector
          ? this[0].nextElementSibling &&
            dom7_esm_$(this[0].nextElementSibling).is(selector)
            ? dom7_esm_$([this[0].nextElementSibling])
            : dom7_esm_$([])
          : this[0].nextElementSibling
          ? dom7_esm_$([this[0].nextElementSibling])
          : dom7_esm_$([])
        : dom7_esm_$([]);
    },
    nextAll: function (selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return dom7_esm_$([]);
      for (; el.nextElementSibling; ) {
        const next = el.nextElementSibling;
        selector
          ? dom7_esm_$(next).is(selector) && nextEls.push(next)
          : nextEls.push(next),
          (el = next);
      }
      return dom7_esm_$(nextEls);
    },
    prev: function (selector) {
      if (this.length > 0) {
        const el = this[0];
        return selector
          ? el.previousElementSibling &&
            dom7_esm_$(el.previousElementSibling).is(selector)
            ? dom7_esm_$([el.previousElementSibling])
            : dom7_esm_$([])
          : el.previousElementSibling
          ? dom7_esm_$([el.previousElementSibling])
          : dom7_esm_$([]);
      }
      return dom7_esm_$([]);
    },
    prevAll: function (selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return dom7_esm_$([]);
      for (; el.previousElementSibling; ) {
        const prev = el.previousElementSibling;
        selector
          ? dom7_esm_$(prev).is(selector) && prevEls.push(prev)
          : prevEls.push(prev),
          (el = prev);
      }
      return dom7_esm_$(prevEls);
    },
    parent: function (selector) {
      const parents = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (selector
            ? dom7_esm_$(this[i].parentNode).is(selector) &&
              parents.push(this[i].parentNode)
            : parents.push(this[i].parentNode));
      return dom7_esm_$(parents);
    },
    parents: function (selector) {
      const parents = [];
      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode;
        for (; parent; )
          selector
            ? dom7_esm_$(parent).is(selector) && parents.push(parent)
            : parents.push(parent),
            (parent = parent.parentNode);
      }
      return dom7_esm_$(parents);
    },
    closest: function (selector) {
      let closest = this;
      return void 0 === selector
        ? dom7_esm_$([])
        : (closest.is(selector) || (closest = closest.parents(selector).eq(0)),
          closest);
    },
    find: function (selector) {
      const foundElements = [];
      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);
        for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
      }
      return dom7_esm_$(foundElements);
    },
    children: function (selector) {
      const children = [];
      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;
        for (let j = 0; j < childNodes.length; j += 1)
          (selector && !dom7_esm_$(childNodes[j]).is(selector)) ||
            children.push(childNodes[j]);
      }
      return dom7_esm_$(children);
    },
    filter: function (callback) {
      return dom7_esm_$(arrayFilter(this, callback));
    },
    remove: function () {
      for (let i = 0; i < this.length; i += 1)
        this[i].parentNode && this[i].parentNode.removeChild(this[i]);
      return this;
    },
  };
  Object.keys(Methods).forEach((methodName) => {
    Object.defineProperty(dom7_esm_$.fn, methodName, {
      value: Methods[methodName],
      writable: !0,
    });
  });
  var dom = dom7_esm_$;
  function utils_nextTick(callback, delay) {
    return void 0 === delay && (delay = 0), setTimeout(callback, delay);
  }
  function utils_now() {
    return Date.now();
  }
  function utils_getTranslate(el, axis) {
    void 0 === axis && (axis = 'x');
    const window = ssr_window_esm_getWindow();
    let matrix, curTransform, transformMatrix;
    const curStyle = (function (el) {
      const window = ssr_window_esm_getWindow();
      let style;
      return (
        window.getComputedStyle && (style = window.getComputedStyle(el, null)),
        !style && el.currentStyle && (style = el.currentStyle),
        style || (style = el.style),
        style
      );
    })(el);
    return (
      window.WebKitCSSMatrix
        ? ((curTransform = curStyle.transform || curStyle.webkitTransform),
          curTransform.split(',').length > 6 &&
            (curTransform = curTransform
              .split(', ')
              .map((a) => a.replace(',', '.'))
              .join(', ')),
          (transformMatrix = new window.WebKitCSSMatrix(
            'none' === curTransform ? '' : curTransform,
          )))
        : ((transformMatrix =
            curStyle.MozTransform ||
            curStyle.OTransform ||
            curStyle.MsTransform ||
            curStyle.msTransform ||
            curStyle.transform ||
            curStyle
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,')),
          (matrix = transformMatrix.toString().split(','))),
      'x' === axis &&
        (curTransform = window.WebKitCSSMatrix
          ? transformMatrix.m41
          : 16 === matrix.length
          ? parseFloat(matrix[12])
          : parseFloat(matrix[4])),
      'y' === axis &&
        (curTransform = window.WebKitCSSMatrix
          ? transformMatrix.m42
          : 16 === matrix.length
          ? parseFloat(matrix[13])
          : parseFloat(matrix[5])),
      curTransform || 0
    );
  }
  function utils_isObject(o) {
    return (
      'object' == typeof o &&
      null !== o &&
      o.constructor &&
      'Object' === Object.prototype.toString.call(o).slice(8, -1)
    );
  }
  function isNode(node) {
    return 'undefined' != typeof window && void 0 !== window.HTMLElement
      ? node instanceof HTMLElement
      : node && (1 === node.nodeType || 11 === node.nodeType);
  }
  function utils_extend() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      noExtend = ['__proto__', 'constructor', 'prototype'];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != nextSource && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter(
          (key) => noExtend.indexOf(key) < 0,
        );
        for (
          let nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex += 1
        ) {
          const nextKey = keysArray[nextIndex],
            desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          void 0 !== desc &&
            desc.enumerable &&
            (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])
              ? nextSource[nextKey].__swiper__
                ? (to[nextKey] = nextSource[nextKey])
                : utils_extend(to[nextKey], nextSource[nextKey])
              : !utils_isObject(to[nextKey]) &&
                utils_isObject(nextSource[nextKey])
              ? ((to[nextKey] = {}),
                nextSource[nextKey].__swiper__
                  ? (to[nextKey] = nextSource[nextKey])
                  : utils_extend(to[nextKey], nextSource[nextKey]))
              : (to[nextKey] = nextSource[nextKey]));
        }
      }
    }
    return to;
  }
  function utils_setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let { swiper: swiper, targetPosition: targetPosition, side: side } = _ref;
    const window = ssr_window_esm_getWindow(),
      startPosition = -swiper.translate;
    let time,
      startTime = null;
    const duration = swiper.params.speed;
    (swiper.wrapperEl.style.scrollSnapType = 'none'),
      window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev',
      isOutOfBound = (current, target) =>
        ('next' === dir && current >= target) ||
        ('prev' === dir && current <= target),
      animate = () => {
        (time = new Date().getTime()), null === startTime && (startTime = time);
        const progress = Math.max(
            Math.min((time - startTime) / duration, 1),
            0,
          ),
          easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition =
          startPosition + easeProgress * (targetPosition - startPosition);
        if (
          (isOutOfBound(currentPosition, targetPosition) &&
            (currentPosition = targetPosition),
          swiper.wrapperEl.scrollTo({ [side]: currentPosition }),
          isOutOfBound(currentPosition, targetPosition))
        )
          return (
            (swiper.wrapperEl.style.overflow = 'hidden'),
            (swiper.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (swiper.wrapperEl.style.overflow = ''),
                swiper.wrapperEl.scrollTo({ [side]: currentPosition });
            }),
            void window.cancelAnimationFrame(swiper.cssModeFrameID)
          );
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };
    animate();
  }
  let support, deviceCached, browser;
  function getSupport() {
    return (
      support ||
        (support = (function () {
          const window = ssr_window_esm_getWindow(),
            document = ssr_window_esm_getDocument();
          return {
            smoothScroll:
              document.documentElement &&
              'scrollBehavior' in document.documentElement.style,
            touch: !!(
              'ontouchstart' in window ||
              (window.DocumentTouch && document instanceof window.DocumentTouch)
            ),
            passiveListener: (function () {
              let supportsPassive = !1;
              try {
                const opts = Object.defineProperty({}, 'passive', {
                  get() {
                    supportsPassive = !0;
                  },
                });
                window.addEventListener('testPassiveListener', null, opts);
              } catch (e) {}
              return supportsPassive;
            })(),
            gestures: 'ongesturestart' in window,
          };
        })()),
      support
    );
  }
  function getDevice(overrides) {
    return (
      void 0 === overrides && (overrides = {}),
      deviceCached ||
        (deviceCached = (function (_temp) {
          let { userAgent: userAgent } = void 0 === _temp ? {} : _temp;
          const support = getSupport(),
            window = ssr_window_esm_getWindow(),
            platform = window.navigator.platform,
            ua = userAgent || window.navigator.userAgent,
            device = { ios: !1, android: !1 },
            screenWidth = window.screen.width,
            screenHeight = window.screen.height,
            android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
          let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
            iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            windows = 'Win32' === platform;
          let macos = 'MacIntel' === platform;
          return (
            !ipad &&
              macos &&
              support.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].indexOf(`${screenWidth}x${screenHeight}`) >= 0 &&
              ((ipad = ua.match(/(Version)\/([\d.]+)/)),
              ipad || (ipad = [0, 1, '13_0_0']),
              (macos = !1)),
            android &&
              !windows &&
              ((device.os = 'android'), (device.android = !0)),
            (ipad || iphone || ipod) &&
              ((device.os = 'ios'), (device.ios = !0)),
            device
          );
        })(overrides)),
      deviceCached
    );
  }
  function getBrowser() {
    return (
      browser ||
        (browser = (function () {
          const window = ssr_window_esm_getWindow();
          return {
            isSafari: (function () {
              const ua = window.navigator.userAgent.toLowerCase();
              return (
                ua.indexOf('safari') >= 0 &&
                ua.indexOf('chrome') < 0 &&
                ua.indexOf('android') < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              window.navigator.userAgent,
            ),
          };
        })()),
      browser
    );
  }
  var events_emitter = {
    on(events, handler, priority) {
      const self = this;
      if ('function' != typeof handler) return self;
      const method = priority ? 'unshift' : 'push';
      return (
        events.split(' ').forEach((event) => {
          self.eventsListeners[event] || (self.eventsListeners[event] = []),
            self.eventsListeners[event][method](handler);
        }),
        self
      );
    },
    once(events, handler, priority) {
      const self = this;
      if ('function' != typeof handler) return self;
      function onceHandler() {
        self.off(events, onceHandler),
          onceHandler.__emitterProxy && delete onceHandler.__emitterProxy;
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          args[_key] = arguments[_key];
        handler.apply(self, args);
      }
      return (
        (onceHandler.__emitterProxy = handler),
        self.on(events, onceHandler, priority)
      );
    },
    onAny(handler, priority) {
      const self = this;
      if ('function' != typeof handler) return self;
      const method = priority ? 'unshift' : 'push';
      return (
        self.eventsAnyListeners.indexOf(handler) < 0 &&
          self.eventsAnyListeners[method](handler),
        self
      );
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      return index >= 0 && self.eventsAnyListeners.splice(index, 1), self;
    },
    off(events, handler) {
      const self = this;
      return self.eventsListeners
        ? (events.split(' ').forEach((event) => {
            void 0 === handler
              ? (self.eventsListeners[event] = [])
              : self.eventsListeners[event] &&
                self.eventsListeners[event].forEach((eventHandler, index) => {
                  (eventHandler === handler ||
                    (eventHandler.__emitterProxy &&
                      eventHandler.__emitterProxy === handler)) &&
                    self.eventsListeners[event].splice(index, 1);
                });
          }),
          self)
        : self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners) return self;
      let events, data, context;
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      )
        args[_key2] = arguments[_key2];
      'string' == typeof args[0] || Array.isArray(args[0])
        ? ((events = args[0]),
          (data = args.slice(1, args.length)),
          (context = self))
        : ((events = args[0].events),
          (data = args[0].data),
          (context = args[0].context || self)),
        data.unshift(context);
      return (
        (Array.isArray(events) ? events : events.split(' ')).forEach(
          (event) => {
            self.eventsAnyListeners &&
              self.eventsAnyListeners.length &&
              self.eventsAnyListeners.forEach((eventHandler) => {
                eventHandler.apply(context, [event, ...data]);
              }),
              self.eventsListeners &&
                self.eventsListeners[event] &&
                self.eventsListeners[event].forEach((eventHandler) => {
                  eventHandler.apply(context, data);
                });
          },
        ),
        self
      );
    },
  };
  var update = {
    updateSize: function () {
      const swiper = this;
      let width, height;
      const $el = swiper.$el;
      (width =
        void 0 !== swiper.params.width && null !== swiper.params.width
          ? swiper.params.width
          : $el[0].clientWidth),
        (height =
          void 0 !== swiper.params.height && null !== swiper.params.height
            ? swiper.params.height
            : $el[0].clientHeight),
        (0 === width && swiper.isHorizontal()) ||
          (0 === height && swiper.isVertical()) ||
          ((width =
            width -
            parseInt($el.css('padding-left') || 0, 10) -
            parseInt($el.css('padding-right') || 0, 10)),
          (height =
            height -
            parseInt($el.css('padding-top') || 0, 10) -
            parseInt($el.css('padding-bottom') || 0, 10)),
          Number.isNaN(width) && (width = 0),
          Number.isNaN(height) && (height = 0),
          Object.assign(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
          }));
    },
    updateSlides: function () {
      const swiper = this;
      function getDirectionLabel(property) {
        return swiper.isHorizontal()
          ? property
          : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom',
            }[property];
      }
      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }
      const params = swiper.params,
        {
          $wrapperEl: $wrapperEl,
          size: swiperSize,
          rtlTranslate: rtl,
          wrongRTL: wrongRTL,
        } = swiper,
        isVirtual = swiper.virtual && params.virtual.enabled,
        previousSlidesLength = isVirtual
          ? swiper.virtual.slides.length
          : swiper.slides.length,
        slides = $wrapperEl.children(`.${swiper.params.slideClass}`),
        slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [],
        slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;
      'function' == typeof offsetBefore &&
        (offsetBefore = params.slidesOffsetBefore.call(swiper));
      let offsetAfter = params.slidesOffsetAfter;
      'function' == typeof offsetAfter &&
        (offsetAfter = params.slidesOffsetAfter.call(swiper));
      const previousSnapGridLength = swiper.snapGrid.length,
        previousSlidesGridLength = swiper.slidesGrid.length;
      let spaceBetween = params.spaceBetween,
        slidePosition = -offsetBefore,
        prevSlideSize = 0,
        index = 0;
      if (void 0 === swiperSize) return;
      'string' == typeof spaceBetween &&
        spaceBetween.indexOf('%') >= 0 &&
        (spaceBetween =
          (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize),
        (swiper.virtualSize = -spaceBetween),
        rtl
          ? slides.css({ marginLeft: '', marginBottom: '', marginTop: '' })
          : slides.css({ marginRight: '', marginBottom: '', marginTop: '' }),
        params.centeredSlides &&
          params.cssMode &&
          (utils_setCSSProperty(
            swiper.wrapperEl,
            '--swiper-centered-offset-before',
            '',
          ),
          utils_setCSSProperty(
            swiper.wrapperEl,
            '--swiper-centered-offset-after',
            '',
          ));
      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
      let slideSize;
      gridEnabled && swiper.grid.initSlides(slidesLength);
      const shouldResetSlideSize =
        'auto' === params.slidesPerView &&
        params.breakpoints &&
        Object.keys(params.breakpoints).filter(
          (key) => void 0 !== params.breakpoints[key].slidesPerView,
        ).length > 0;
      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides.eq(i);
        if (
          (gridEnabled &&
            swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel),
          'none' !== slide.css('display'))
        ) {
          if ('auto' === params.slidesPerView) {
            shouldResetSlideSize &&
              (slides[i].style[getDirectionLabel('width')] = '');
            const slideStyles = getComputedStyle(slide[0]),
              currentTransform = slide[0].style.transform,
              currentWebKitTransform = slide[0].style.webkitTransform;
            if (
              (currentTransform && (slide[0].style.transform = 'none'),
              currentWebKitTransform &&
                (slide[0].style.webkitTransform = 'none'),
              params.roundLengths)
            )
              slideSize = swiper.isHorizontal()
                ? slide.outerWidth(!0)
                : slide.outerHeight(!0);
            else {
              const width = getDirectionPropertyValue(slideStyles, 'width'),
                paddingLeft = getDirectionPropertyValue(
                  slideStyles,
                  'padding-left',
                ),
                paddingRight = getDirectionPropertyValue(
                  slideStyles,
                  'padding-right',
                ),
                marginLeft = getDirectionPropertyValue(
                  slideStyles,
                  'margin-left',
                ),
                marginRight = getDirectionPropertyValue(
                  slideStyles,
                  'margin-right',
                ),
                boxSizing = slideStyles.getPropertyValue('box-sizing');
              if (boxSizing && 'border-box' === boxSizing)
                slideSize = width + marginLeft + marginRight;
              else {
                const { clientWidth: clientWidth, offsetWidth: offsetWidth } =
                  slide[0];
                slideSize =
                  width +
                  paddingLeft +
                  paddingRight +
                  marginLeft +
                  marginRight +
                  (offsetWidth - clientWidth);
              }
            }
            currentTransform && (slide[0].style.transform = currentTransform),
              currentWebKitTransform &&
                (slide[0].style.webkitTransform = currentWebKitTransform),
              params.roundLengths && (slideSize = Math.floor(slideSize));
          } else
            (slideSize =
              (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
              params.slidesPerView),
              params.roundLengths && (slideSize = Math.floor(slideSize)),
              slides[i] &&
                (slides[i].style[
                  getDirectionLabel('width')
                ] = `${slideSize}px`);
          slides[i] && (slides[i].swiperSlideSize = slideSize),
            slidesSizesGrid.push(slideSize),
            params.centeredSlides
              ? ((slidePosition =
                  slidePosition +
                  slideSize / 2 +
                  prevSlideSize / 2 +
                  spaceBetween),
                0 === prevSlideSize &&
                  0 !== i &&
                  (slidePosition =
                    slidePosition - swiperSize / 2 - spaceBetween),
                0 === i &&
                  (slidePosition =
                    slidePosition - swiperSize / 2 - spaceBetween),
                Math.abs(slidePosition) < 0.001 && (slidePosition = 0),
                params.roundLengths &&
                  (slidePosition = Math.floor(slidePosition)),
                index % params.slidesPerGroup == 0 &&
                  snapGrid.push(slidePosition),
                slidesGrid.push(slidePosition))
              : (params.roundLengths &&
                  (slidePosition = Math.floor(slidePosition)),
                (index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
                  swiper.params.slidesPerGroup ==
                  0 && snapGrid.push(slidePosition),
                slidesGrid.push(slidePosition),
                (slidePosition = slidePosition + slideSize + spaceBetween)),
            (swiper.virtualSize += slideSize + spaceBetween),
            (prevSlideSize = slideSize),
            (index += 1);
        }
      }
      if (
        ((swiper.virtualSize =
          Math.max(swiper.virtualSize, swiperSize) + offsetAfter),
        rtl &&
          wrongRTL &&
          ('slide' === params.effect || 'coverflow' === params.effect) &&
          $wrapperEl.css({
            width: `${swiper.virtualSize + params.spaceBetween}px`,
          }),
        params.setWrapperSize &&
          $wrapperEl.css({
            [getDirectionLabel('width')]: `${
              swiper.virtualSize + params.spaceBetween
            }px`,
          }),
        gridEnabled &&
          swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel),
        !params.centeredSlides)
      ) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)),
            snapGrid[i] <= swiper.virtualSize - swiperSize &&
              newSlidesGrid.push(slidesGridItem);
        }
        (snapGrid = newSlidesGrid),
          Math.floor(swiper.virtualSize - swiperSize) -
            Math.floor(snapGrid[snapGrid.length - 1]) >
            1 && snapGrid.push(swiper.virtualSize - swiperSize);
      }
      if (
        (0 === snapGrid.length && (snapGrid = [0]), 0 !== params.spaceBetween)
      ) {
        const key =
          swiper.isHorizontal() && rtl
            ? 'marginLeft'
            : getDirectionLabel('marginRight');
        slides
          .filter(
            (_, slideIndex) =>
              !params.cssMode || slideIndex !== slides.length - 1,
          )
          .css({ [key]: `${spaceBetween}px` });
      }
      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
          allSlidesSize +=
            slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        }),
          (allSlidesSize -= params.spaceBetween);
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap) =>
          snap < 0
            ? -offsetBefore
            : snap > maxSnap
            ? maxSnap + offsetAfter
            : snap,
        );
      }
      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        if (
          (slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize +=
              slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
          }),
          (allSlidesSize -= params.spaceBetween),
          allSlidesSize < swiperSize)
        ) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          }),
            slidesGrid.forEach((snap, snapIndex) => {
              slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
      }
      if (
        (Object.assign(swiper, {
          slides: slides,
          snapGrid: snapGrid,
          slidesGrid: slidesGrid,
          slidesSizesGrid: slidesSizesGrid,
        }),
        params.centeredSlides && params.cssMode && !params.centeredSlidesBounds)
      ) {
        utils_setCSSProperty(
          swiper.wrapperEl,
          '--swiper-centered-offset-before',
          -snapGrid[0] + 'px',
        ),
          utils_setCSSProperty(
            swiper.wrapperEl,
            '--swiper-centered-offset-after',
            swiper.size / 2 -
              slidesSizesGrid[slidesSizesGrid.length - 1] / 2 +
              'px',
          );
        const addToSnapGrid = -swiper.snapGrid[0],
          addToSlidesGrid = -swiper.slidesGrid[0];
        (swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid)),
          (swiper.slidesGrid = swiper.slidesGrid.map(
            (v) => v + addToSlidesGrid,
          ));
      }
      if (
        (slidesLength !== previousSlidesLength &&
          swiper.emit('slidesLengthChange'),
        snapGrid.length !== previousSnapGridLength &&
          (swiper.params.watchOverflow && swiper.checkOverflow(),
          swiper.emit('snapGridLengthChange')),
        slidesGrid.length !== previousSlidesGridLength &&
          swiper.emit('slidesGridLengthChange'),
        params.watchSlidesProgress && swiper.updateSlidesOffset(),
        !(
          isVirtual ||
          params.cssMode ||
          ('slide' !== params.effect && 'fade' !== params.effect)
        ))
      ) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`,
          hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
        slidesLength <= params.maxBackfaceHiddenSlides
          ? hasClassBackfaceClassAdded ||
            swiper.$el.addClass(backFaceHiddenClass)
          : hasClassBackfaceClassAdded &&
            swiper.$el.removeClass(backFaceHiddenClass);
      }
    },
    updateAutoHeight: function (speed) {
      const swiper = this,
        activeSlides = [],
        isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let i,
        newHeight = 0;
      'number' == typeof speed
        ? swiper.setTransition(speed)
        : !0 === speed && swiper.setTransition(swiper.params.speed);
      const getSlideByIndex = (index) =>
        isVirtual
          ? swiper.slides.filter(
              (el) =>
                parseInt(el.getAttribute('data-swiper-slide-index'), 10) ===
                index,
            )[0]
          : swiper.slides.eq(index)[0];
      if (
        'auto' !== swiper.params.slidesPerView &&
        swiper.params.slidesPerView > 1
      )
        if (swiper.params.centeredSlides)
          swiper.visibleSlides.each((slide) => {
            activeSlides.push(slide);
          });
        else
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
      else activeSlides.push(getSlideByIndex(swiper.activeIndex));
      for (i = 0; i < activeSlides.length; i += 1)
        if (void 0 !== activeSlides[i]) {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      (newHeight || 0 === newHeight) &&
        swiper.$wrapperEl.css('height', `${newHeight}px`);
    },
    updateSlidesOffset: function () {
      const swiper = this,
        slides = swiper.slides;
      for (let i = 0; i < slides.length; i += 1)
        slides[i].swiperSlideOffset = swiper.isHorizontal()
          ? slides[i].offsetLeft
          : slides[i].offsetTop;
    },
    updateSlidesProgress: function (translate) {
      void 0 === translate && (translate = (this && this.translate) || 0);
      const swiper = this,
        params = swiper.params,
        { slides: slides, rtlTranslate: rtl, snapGrid: snapGrid } = swiper;
      if (0 === slides.length) return;
      void 0 === slides[0].swiperSlideOffset && swiper.updateSlidesOffset();
      let offsetCenter = -translate;
      rtl && (offsetCenter = translate),
        slides.removeClass(params.slideVisibleClass),
        (swiper.visibleSlidesIndexes = []),
        (swiper.visibleSlides = []);
      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        params.cssMode &&
          params.centeredSlides &&
          (slideOffset -= slides[0].swiperSlideOffset);
        const slideProgress =
            (offsetCenter +
              (params.centeredSlides ? swiper.minTranslate() : 0) -
              slideOffset) /
            (slide.swiperSlideSize + params.spaceBetween),
          originalSlideProgress =
            (offsetCenter -
              snapGrid[0] +
              (params.centeredSlides ? swiper.minTranslate() : 0) -
              slideOffset) /
            (slide.swiperSlideSize + params.spaceBetween),
          slideBefore = -(offsetCenter - slideOffset),
          slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        ((slideBefore >= 0 && slideBefore < swiper.size - 1) ||
          (slideAfter > 1 && slideAfter <= swiper.size) ||
          (slideBefore <= 0 && slideAfter >= swiper.size)) &&
          (swiper.visibleSlides.push(slide),
          swiper.visibleSlidesIndexes.push(i),
          slides.eq(i).addClass(params.slideVisibleClass)),
          (slide.progress = rtl ? -slideProgress : slideProgress),
          (slide.originalProgress = rtl
            ? -originalSlideProgress
            : originalSlideProgress);
      }
      swiper.visibleSlides = dom(swiper.visibleSlides);
    },
    updateProgress: function (translate) {
      const swiper = this;
      if (void 0 === translate) {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        translate =
          (swiper && swiper.translate && swiper.translate * multiplier) || 0;
      }
      const params = swiper.params,
        translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      let {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd,
      } = swiper;
      const wasBeginning = isBeginning,
        wasEnd = isEnd;
      0 === translatesDiff
        ? ((progress = 0), (isBeginning = !0), (isEnd = !0))
        : ((progress = (translate - swiper.minTranslate()) / translatesDiff),
          (isBeginning = progress <= 0),
          (isEnd = progress >= 1)),
        Object.assign(swiper, {
          progress: progress,
          isBeginning: isBeginning,
          isEnd: isEnd,
        }),
        (params.watchSlidesProgress ||
          (params.centeredSlides && params.autoHeight)) &&
          swiper.updateSlidesProgress(translate),
        isBeginning && !wasBeginning && swiper.emit('reachBeginning toEdge'),
        isEnd && !wasEnd && swiper.emit('reachEnd toEdge'),
        ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) &&
          swiper.emit('fromEdge'),
        swiper.emit('progress', progress);
    },
    updateSlidesClasses: function () {
      const swiper = this,
        {
          slides: slides,
          params: params,
          $wrapperEl: $wrapperEl,
          activeIndex: activeIndex,
          realIndex: realIndex,
        } = swiper,
        isVirtual = swiper.virtual && params.virtual.enabled;
      let activeSlide;
      slides.removeClass(
        `${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`,
      ),
        (activeSlide = isVirtual
          ? swiper.$wrapperEl.find(
              `.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`,
            )
          : slides.eq(activeIndex)),
        activeSlide.addClass(params.slideActiveClass),
        params.loop &&
          (activeSlide.hasClass(params.slideDuplicateClass)
            ? $wrapperEl
                .children(
                  `.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`,
                )
                .addClass(params.slideDuplicateActiveClass)
            : $wrapperEl
                .children(
                  `.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`,
                )
                .addClass(params.slideDuplicateActiveClass));
      let nextSlide = activeSlide
        .nextAll(`.${params.slideClass}`)
        .eq(0)
        .addClass(params.slideNextClass);
      params.loop &&
        0 === nextSlide.length &&
        ((nextSlide = slides.eq(0)), nextSlide.addClass(params.slideNextClass));
      let prevSlide = activeSlide
        .prevAll(`.${params.slideClass}`)
        .eq(0)
        .addClass(params.slidePrevClass);
      params.loop &&
        0 === prevSlide.length &&
        ((prevSlide = slides.eq(-1)),
        prevSlide.addClass(params.slidePrevClass)),
        params.loop &&
          (nextSlide.hasClass(params.slideDuplicateClass)
            ? $wrapperEl
                .children(
                  `.${params.slideClass}:not(.${
                    params.slideDuplicateClass
                  })[data-swiper-slide-index="${nextSlide.attr(
                    'data-swiper-slide-index',
                  )}"]`,
                )
                .addClass(params.slideDuplicateNextClass)
            : $wrapperEl
                .children(
                  `.${params.slideClass}.${
                    params.slideDuplicateClass
                  }[data-swiper-slide-index="${nextSlide.attr(
                    'data-swiper-slide-index',
                  )}"]`,
                )
                .addClass(params.slideDuplicateNextClass),
          prevSlide.hasClass(params.slideDuplicateClass)
            ? $wrapperEl
                .children(
                  `.${params.slideClass}:not(.${
                    params.slideDuplicateClass
                  })[data-swiper-slide-index="${prevSlide.attr(
                    'data-swiper-slide-index',
                  )}"]`,
                )
                .addClass(params.slideDuplicatePrevClass)
            : $wrapperEl
                .children(
                  `.${params.slideClass}.${
                    params.slideDuplicateClass
                  }[data-swiper-slide-index="${prevSlide.attr(
                    'data-swiper-slide-index',
                  )}"]`,
                )
                .addClass(params.slideDuplicatePrevClass)),
        swiper.emitSlidesClasses();
    },
    updateActiveIndex: function (newActiveIndex) {
      const swiper = this,
        translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate,
        {
          slidesGrid: slidesGrid,
          snapGrid: snapGrid,
          params: params,
          activeIndex: previousIndex,
          realIndex: previousRealIndex,
          snapIndex: previousSnapIndex,
        } = swiper;
      let snapIndex,
        activeIndex = newActiveIndex;
      if (void 0 === activeIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1)
          void 0 !== slidesGrid[i + 1]
            ? translate >= slidesGrid[i] &&
              translate <
                slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
              ? (activeIndex = i)
              : translate >= slidesGrid[i] &&
                translate < slidesGrid[i + 1] &&
                (activeIndex = i + 1)
            : translate >= slidesGrid[i] && (activeIndex = i);
        params.normalizeSlideIndex &&
          (activeIndex < 0 || void 0 === activeIndex) &&
          (activeIndex = 0);
      }
      if (snapGrid.indexOf(translate) >= 0)
        snapIndex = snapGrid.indexOf(translate);
      else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex =
          skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
      if (
        (snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1),
        activeIndex === previousIndex)
      )
        return void (
          snapIndex !== previousSnapIndex &&
          ((swiper.snapIndex = snapIndex), swiper.emit('snapIndexChange'))
        );
      const realIndex = parseInt(
        swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') ||
          activeIndex,
        10,
      );
      Object.assign(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex,
      }),
        swiper.emit('activeIndexChange'),
        swiper.emit('snapIndexChange'),
        previousRealIndex !== realIndex && swiper.emit('realIndexChange'),
        (swiper.initialized || swiper.params.runCallbacksOnInit) &&
          swiper.emit('slideChange');
    },
    updateClickedSlide: function (e) {
      const swiper = this,
        params = swiper.params,
        slide = dom(e).closest(`.${params.slideClass}`)[0];
      let slideIndex,
        slideFound = !1;
      if (slide)
        for (let i = 0; i < swiper.slides.length; i += 1)
          if (swiper.slides[i] === slide) {
            (slideFound = !0), (slideIndex = i);
            break;
          }
      if (!slide || !slideFound)
        return (
          (swiper.clickedSlide = void 0), void (swiper.clickedIndex = void 0)
        );
      (swiper.clickedSlide = slide),
        swiper.virtual && swiper.params.virtual.enabled
          ? (swiper.clickedIndex = parseInt(
              dom(slide).attr('data-swiper-slide-index'),
              10,
            ))
          : (swiper.clickedIndex = slideIndex),
        params.slideToClickedSlide &&
          void 0 !== swiper.clickedIndex &&
          swiper.clickedIndex !== swiper.activeIndex &&
          swiper.slideToClickedSlide();
    },
  };
  var translate = {
    getTranslate: function (axis) {
      void 0 === axis && (axis = this.isHorizontal() ? 'x' : 'y');
      const {
        params: params,
        rtlTranslate: rtl,
        translate: translate,
        $wrapperEl: $wrapperEl,
      } = this;
      if (params.virtualTranslate) return rtl ? -translate : translate;
      if (params.cssMode) return translate;
      let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
      return (
        rtl && (currentTranslate = -currentTranslate), currentTranslate || 0
      );
    },
    setTranslate: function (translate, byController) {
      const swiper = this,
        {
          rtlTranslate: rtl,
          params: params,
          $wrapperEl: $wrapperEl,
          wrapperEl: wrapperEl,
          progress: progress,
        } = swiper;
      let newProgress,
        x = 0,
        y = 0;
      swiper.isHorizontal()
        ? (x = rtl ? -translate : translate)
        : (y = translate),
        params.roundLengths && ((x = Math.floor(x)), (y = Math.floor(y))),
        params.cssMode
          ? (wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
              swiper.isHorizontal() ? -x : -y)
          : params.virtualTranslate ||
            $wrapperEl.transform(`translate3d(${x}px, ${y}px, 0px)`),
        (swiper.previousTranslate = swiper.translate),
        (swiper.translate = swiper.isHorizontal() ? x : y);
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      (newProgress =
        0 === translatesDiff
          ? 0
          : (translate - swiper.minTranslate()) / translatesDiff),
        newProgress !== progress && swiper.updateProgress(translate),
        swiper.emit('setTranslate', swiper.translate, byController);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (
      translate,
      speed,
      runCallbacks,
      translateBounds,
      internal,
    ) {
      void 0 === translate && (translate = 0),
        void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0),
        void 0 === translateBounds && (translateBounds = !0);
      const swiper = this,
        { params: params, wrapperEl: wrapperEl } = swiper;
      if (swiper.animating && params.preventInteractionOnTransition) return !1;
      const minTranslate = swiper.minTranslate(),
        maxTranslate = swiper.maxTranslate();
      let newTranslate;
      if (
        ((newTranslate =
          translateBounds && translate > minTranslate
            ? minTranslate
            : translateBounds && translate < maxTranslate
            ? maxTranslate
            : translate),
        swiper.updateProgress(newTranslate),
        params.cssMode)
      ) {
        const isH = swiper.isHorizontal();
        if (0 === speed)
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
          if (!swiper.support.smoothScroll)
            return (
              animateCSSModeScroll({
                swiper: swiper,
                targetPosition: -newTranslate,
                side: isH ? 'left' : 'top',
              }),
              !0
            );
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth',
          });
        }
        return !0;
      }
      return (
        0 === speed
          ? (swiper.setTransition(0),
            swiper.setTranslate(newTranslate),
            runCallbacks &&
              (swiper.emit('beforeTransitionStart', speed, internal),
              swiper.emit('transitionEnd')))
          : (swiper.setTransition(speed),
            swiper.setTranslate(newTranslate),
            runCallbacks &&
              (swiper.emit('beforeTransitionStart', speed, internal),
              swiper.emit('transitionStart')),
            swiper.animating ||
              ((swiper.animating = !0),
              swiper.onTranslateToWrapperTransitionEnd ||
                (swiper.onTranslateToWrapperTransitionEnd = function (e) {
                  swiper &&
                    !swiper.destroyed &&
                    e.target === this &&
                    (swiper.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      swiper.onTranslateToWrapperTransitionEnd,
                    ),
                    swiper.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      swiper.onTranslateToWrapperTransitionEnd,
                    ),
                    (swiper.onTranslateToWrapperTransitionEnd = null),
                    delete swiper.onTranslateToWrapperTransitionEnd,
                    runCallbacks && swiper.emit('transitionEnd'));
                }),
              swiper.$wrapperEl[0].addEventListener(
                'transitionend',
                swiper.onTranslateToWrapperTransitionEnd,
              ),
              swiper.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                swiper.onTranslateToWrapperTransitionEnd,
              ))),
        !0
      );
    },
  };
  function transitionEmit(_ref) {
    let {
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: step,
    } = _ref;
    const { activeIndex: activeIndex, previousIndex: previousIndex } = swiper;
    let dir = direction;
    if (
      (dir ||
        (dir =
          activeIndex > previousIndex
            ? 'next'
            : activeIndex < previousIndex
            ? 'prev'
            : 'reset'),
      swiper.emit(`transition${step}`),
      runCallbacks && activeIndex !== previousIndex)
    ) {
      if ('reset' === dir)
        return void swiper.emit(`slideResetTransition${step}`);
      swiper.emit(`slideChangeTransition${step}`),
        'next' === dir
          ? swiper.emit(`slideNextTransition${step}`)
          : swiper.emit(`slidePrevTransition${step}`);
    }
  }
  var slide = {
    slideTo: function (index, speed, runCallbacks, internal, initial) {
      if (
        (void 0 === index && (index = 0),
        void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0),
        'number' != typeof index && 'string' != typeof index)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`,
        );
      if ('string' == typeof index) {
        const indexAsNumber = parseInt(index, 10);
        if (!isFinite(indexAsNumber))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`,
          );
        index = indexAsNumber;
      }
      const swiper = this;
      let slideIndex = index;
      slideIndex < 0 && (slideIndex = 0);
      const {
        params: params,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        previousIndex: previousIndex,
        activeIndex: activeIndex,
        rtlTranslate: rtl,
        wrapperEl: wrapperEl,
        enabled: enabled,
      } = swiper;
      if (
        (swiper.animating && params.preventInteractionOnTransition) ||
        (!enabled && !internal && !initial)
      )
        return !1;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      let snapIndex =
        skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1),
        (activeIndex || params.initialSlide || 0) === (previousIndex || 0) &&
          runCallbacks &&
          swiper.emit('beforeSlideChangeStart');
      const translate = -snapGrid[snapIndex];
      if ((swiper.updateProgress(translate), params.normalizeSlideIndex))
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(100 * translate),
            normalizedGrid = Math.floor(100 * slidesGrid[i]),
            normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
          void 0 !== slidesGrid[i + 1]
            ? normalizedTranslate >= normalizedGrid &&
              normalizedTranslate <
                normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
              ? (slideIndex = i)
              : normalizedTranslate >= normalizedGrid &&
                normalizedTranslate < normalizedGridNext &&
                (slideIndex = i + 1)
            : normalizedTranslate >= normalizedGrid && (slideIndex = i);
        }
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (
          !swiper.allowSlideNext &&
          translate < swiper.translate &&
          translate < swiper.minTranslate()
        )
          return !1;
        if (
          !swiper.allowSlidePrev &&
          translate > swiper.translate &&
          translate > swiper.maxTranslate() &&
          (activeIndex || 0) !== slideIndex
        )
          return !1;
      }
      let direction;
      if (
        ((direction =
          slideIndex > activeIndex
            ? 'next'
            : slideIndex < activeIndex
            ? 'prev'
            : 'reset'),
        (rtl && -translate === swiper.translate) ||
          (!rtl && translate === swiper.translate))
      )
        return (
          swiper.updateActiveIndex(slideIndex),
          params.autoHeight && swiper.updateAutoHeight(),
          swiper.updateSlidesClasses(),
          'slide' !== params.effect && swiper.setTranslate(translate),
          'reset' !== direction &&
            (swiper.transitionStart(runCallbacks, direction),
            swiper.transitionEnd(runCallbacks, direction)),
          !1
        );
      if (params.cssMode) {
        const isH = swiper.isHorizontal(),
          t = rtl ? translate : -translate;
        if (0 === speed) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          isVirtual &&
            ((swiper.wrapperEl.style.scrollSnapType = 'none'),
            (swiper._immediateVirtual = !0)),
            (wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t),
            isVirtual &&
              requestAnimationFrame(() => {
                (swiper.wrapperEl.style.scrollSnapType = ''),
                  (swiper._swiperImmediateVirtual = !1);
              });
        } else {
          if (!swiper.support.smoothScroll)
            return (
              animateCSSModeScroll({
                swiper: swiper,
                targetPosition: t,
                side: isH ? 'left' : 'top',
              }),
              !0
            );
          wrapperEl.scrollTo({ [isH ? 'left' : 'top']: t, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        swiper.setTransition(speed),
        swiper.setTranslate(translate),
        swiper.updateActiveIndex(slideIndex),
        swiper.updateSlidesClasses(),
        swiper.emit('beforeTransitionStart', speed, internal),
        swiper.transitionStart(runCallbacks, direction),
        0 === speed
          ? swiper.transitionEnd(runCallbacks, direction)
          : swiper.animating ||
            ((swiper.animating = !0),
            swiper.onSlideToWrapperTransitionEnd ||
              (swiper.onSlideToWrapperTransitionEnd = function (e) {
                swiper &&
                  !swiper.destroyed &&
                  e.target === this &&
                  (swiper.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    swiper.onSlideToWrapperTransitionEnd,
                  ),
                  swiper.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    swiper.onSlideToWrapperTransitionEnd,
                  ),
                  (swiper.onSlideToWrapperTransitionEnd = null),
                  delete swiper.onSlideToWrapperTransitionEnd,
                  swiper.transitionEnd(runCallbacks, direction));
              }),
            swiper.$wrapperEl[0].addEventListener(
              'transitionend',
              swiper.onSlideToWrapperTransitionEnd,
            ),
            swiper.$wrapperEl[0].addEventListener(
              'webkitTransitionEnd',
              swiper.onSlideToWrapperTransitionEnd,
            )),
        !0
      );
    },
    slideToLoop: function (index, speed, runCallbacks, internal) {
      void 0 === index && (index = 0),
        void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0);
      const swiper = this;
      let newIndex = index;
      return (
        swiper.params.loop && (newIndex += swiper.loopedSlides),
        swiper.slideTo(newIndex, speed, runCallbacks, internal)
      );
    },
    slideNext: function (speed, runCallbacks, internal) {
      void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0);
      const swiper = this,
        { animating: animating, enabled: enabled, params: params } = swiper;
      if (!enabled) return swiper;
      let perGroup = params.slidesPerGroup;
      'auto' === params.slidesPerView &&
        1 === params.slidesPerGroup &&
        params.slidesPerGroupAuto &&
        (perGroup = Math.max(swiper.slidesPerViewDynamic('current', !0), 1));
      const increment =
        swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return !1;
        swiper.loopFix(),
          (swiper._clientLeft = swiper.$wrapperEl[0].clientLeft);
      }
      return params.rewind && swiper.isEnd
        ? swiper.slideTo(0, speed, runCallbacks, internal)
        : swiper.slideTo(
            swiper.activeIndex + increment,
            speed,
            runCallbacks,
            internal,
          );
    },
    slidePrev: function (speed, runCallbacks, internal) {
      void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0);
      const swiper = this,
        {
          params: params,
          animating: animating,
          snapGrid: snapGrid,
          slidesGrid: slidesGrid,
          rtlTranslate: rtlTranslate,
          enabled: enabled,
        } = swiper;
      if (!enabled) return swiper;
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return !1;
        swiper.loopFix(),
          (swiper._clientLeft = swiper.$wrapperEl[0].clientLeft);
      }
      function normalize(val) {
        return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val);
      }
      const normalizedTranslate = normalize(
          rtlTranslate ? swiper.translate : -swiper.translate,
        ),
        normalizedSnapGrid = snapGrid.map((val) => normalize(val));
      let prevSnap =
        snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
      if (void 0 === prevSnap && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          normalizedTranslate >= snap && (prevSnapIndex = snapIndex);
        }),
          void 0 !== prevSnapIndex &&
            (prevSnap =
              snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]);
      }
      let prevIndex = 0;
      if (
        (void 0 !== prevSnap &&
          ((prevIndex = slidesGrid.indexOf(prevSnap)),
          prevIndex < 0 && (prevIndex = swiper.activeIndex - 1),
          'auto' === params.slidesPerView &&
            1 === params.slidesPerGroup &&
            params.slidesPerGroupAuto &&
            ((prevIndex =
              prevIndex - swiper.slidesPerViewDynamic('previous', !0) + 1),
            (prevIndex = Math.max(prevIndex, 0)))),
        params.rewind && swiper.isBeginning)
      ) {
        const lastIndex =
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
            ? swiper.virtual.slides.length - 1
            : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
      }
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    },
    slideReset: function (speed, runCallbacks, internal) {
      return (
        void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0),
        this.slideTo(this.activeIndex, speed, runCallbacks, internal)
      );
    },
    slideToClosest: function (speed, runCallbacks, internal, threshold) {
      void 0 === speed && (speed = this.params.speed),
        void 0 === runCallbacks && (runCallbacks = !0),
        void 0 === threshold && (threshold = 0.5);
      const swiper = this;
      let index = swiper.activeIndex;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index),
        snapIndex =
          skip + Math.floor((index - skip) / swiper.params.slidesPerGroup),
        translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      if (translate >= swiper.snapGrid[snapIndex]) {
        const currentSnap = swiper.snapGrid[snapIndex];
        translate - currentSnap >
          (swiper.snapGrid[snapIndex + 1] - currentSnap) * threshold &&
          (index += swiper.params.slidesPerGroup);
      } else {
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        translate - prevSnap <=
          (swiper.snapGrid[snapIndex] - prevSnap) * threshold &&
          (index -= swiper.params.slidesPerGroup);
      }
      return (
        (index = Math.max(index, 0)),
        (index = Math.min(index, swiper.slidesGrid.length - 1)),
        swiper.slideTo(index, speed, runCallbacks, internal)
      );
    },
    slideToClickedSlide: function () {
      const swiper = this,
        { params: params, $wrapperEl: $wrapperEl } = swiper,
        slidesPerView =
          'auto' === params.slidesPerView
            ? swiper.slidesPerViewDynamic()
            : params.slidesPerView;
      let realIndex,
        slideToIndex = swiper.clickedIndex;
      if (params.loop) {
        if (swiper.animating) return;
        (realIndex = parseInt(
          dom(swiper.clickedSlide).attr('data-swiper-slide-index'),
          10,
        )),
          params.centeredSlides
            ? slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
              slideToIndex >
                swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
              ? (swiper.loopFix(),
                (slideToIndex = $wrapperEl
                  .children(
                    `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`,
                  )
                  .eq(0)
                  .index()),
                utils_nextTick(() => {
                  swiper.slideTo(slideToIndex);
                }))
              : swiper.slideTo(slideToIndex)
            : slideToIndex > swiper.slides.length - slidesPerView
            ? (swiper.loopFix(),
              (slideToIndex = $wrapperEl
                .children(
                  `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`,
                )
                .eq(0)
                .index()),
              utils_nextTick(() => {
                swiper.slideTo(slideToIndex);
              }))
            : swiper.slideTo(slideToIndex);
      } else swiper.slideTo(slideToIndex);
    },
  };
  var loop = {
    loopCreate: function () {
      const swiper = this,
        document = ssr_window_esm_getDocument(),
        { params: params, $wrapperEl: $wrapperEl } = swiper,
        $selector =
          $wrapperEl.children().length > 0
            ? dom($wrapperEl.children()[0].parentNode)
            : $wrapperEl;
      $selector
        .children(`.${params.slideClass}.${params.slideDuplicateClass}`)
        .remove();
      let slides = $selector.children(`.${params.slideClass}`);
      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum =
          params.slidesPerGroup - (slides.length % params.slidesPerGroup);
        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = dom(document.createElement('div')).addClass(
              `${params.slideClass} ${params.slideBlankClass}`,
            );
            $selector.append(blankNode);
          }
          slides = $selector.children(`.${params.slideClass}`);
        }
      }
      'auto' !== params.slidesPerView ||
        params.loopedSlides ||
        (params.loopedSlides = slides.length),
        (swiper.loopedSlides = Math.ceil(
          parseFloat(params.loopedSlides || params.slidesPerView, 10),
        )),
        (swiper.loopedSlides += params.loopAdditionalSlides),
        swiper.loopedSlides > slides.length &&
          (swiper.loopedSlides = slides.length);
      const prependSlides = [],
        appendSlides = [];
      slides.each((el, index) => {
        const slide = dom(el);
        index < swiper.loopedSlides && appendSlides.push(el),
          index < slides.length &&
            index >= slides.length - swiper.loopedSlides &&
            prependSlides.push(el),
          slide.attr('data-swiper-slide-index', index);
      });
      for (let i = 0; i < appendSlides.length; i += 1)
        $selector.append(
          dom(appendSlides[i].cloneNode(!0)).addClass(
            params.slideDuplicateClass,
          ),
        );
      for (let i = prependSlides.length - 1; i >= 0; i -= 1)
        $selector.prepend(
          dom(prependSlides[i].cloneNode(!0)).addClass(
            params.slideDuplicateClass,
          ),
        );
    },
    loopFix: function () {
      const swiper = this;
      swiper.emit('beforeLoopFix');
      const {
        activeIndex: activeIndex,
        slides: slides,
        loopedSlides: loopedSlides,
        allowSlidePrev: allowSlidePrev,
        allowSlideNext: allowSlideNext,
        snapGrid: snapGrid,
        rtlTranslate: rtl,
      } = swiper;
      let newIndex;
      (swiper.allowSlidePrev = !0), (swiper.allowSlideNext = !0);
      const diff = -snapGrid[activeIndex] - swiper.getTranslate();
      if (activeIndex < loopedSlides) {
        (newIndex = slides.length - 3 * loopedSlides + activeIndex),
          (newIndex += loopedSlides);
        swiper.slideTo(newIndex, 0, !1, !0) &&
          0 !== diff &&
          swiper.setTranslate(
            (rtl ? -swiper.translate : swiper.translate) - diff,
          );
      } else if (activeIndex >= slides.length - loopedSlides) {
        (newIndex = -slides.length + activeIndex + loopedSlides),
          (newIndex += loopedSlides);
        swiper.slideTo(newIndex, 0, !1, !0) &&
          0 !== diff &&
          swiper.setTranslate(
            (rtl ? -swiper.translate : swiper.translate) - diff,
          );
      }
      (swiper.allowSlidePrev = allowSlidePrev),
        (swiper.allowSlideNext = allowSlideNext),
        swiper.emit('loopFix');
    },
    loopDestroy: function () {
      const { $wrapperEl: $wrapperEl, params: params, slides: slides } = this;
      $wrapperEl
        .children(
          `.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`,
        )
        .remove(),
        slides.removeAttr('data-swiper-slide-index');
    },
  };
  function onTouchStart(event) {
    const swiper = this,
      document = ssr_window_esm_getDocument(),
      window = ssr_window_esm_getWindow(),
      data = swiper.touchEventsData,
      { params: params, touches: touches, enabled: enabled } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    !swiper.animating && params.cssMode && params.loop && swiper.loopFix();
    let e = event;
    e.originalEvent && (e = e.originalEvent);
    let $targetEl = dom(e.target);
    if (
      'wrapper' === params.touchEventsTarget &&
      !$targetEl.closest(swiper.wrapperEl).length
    )
      return;
    if (
      ((data.isTouchEvent = 'touchstart' === e.type),
      !data.isTouchEvent && 'which' in e && 3 === e.which)
    )
      return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    !!params.noSwipingClass &&
      '' !== params.noSwipingClass &&
      e.target &&
      e.target.shadowRoot &&
      event.path &&
      event.path[0] &&
      ($targetEl = dom(event.path[0]));
    const noSwipingSelector = params.noSwipingSelector
        ? params.noSwipingSelector
        : `.${params.noSwipingClass}`,
      isTargetShadow = !(!e.target || !e.target.shadowRoot);
    if (
      params.noSwiping &&
      (isTargetShadow
        ? (function (selector, base) {
            return (
              void 0 === base && (base = this),
              (function __closestFrom(el) {
                return el &&
                  el !== ssr_window_esm_getDocument() &&
                  el !== ssr_window_esm_getWindow()
                  ? (el.assignedSlot && (el = el.assignedSlot),
                    el.closest(selector) ||
                      __closestFrom(el.getRootNode().host))
                  : null;
              })(base)
            );
          })(noSwipingSelector, e.target)
        : $targetEl.closest(noSwipingSelector)[0])
    )
      return void (swiper.allowClick = !0);
    if (params.swipeHandler && !$targetEl.closest(params.swipeHandler)[0])
      return;
    (touches.currentX =
      'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
      (touches.currentY =
        'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY);
    const startX = touches.currentX,
      startY = touches.currentY,
      edgeSwipeDetection =
        params.edgeSwipeDetection || params.iOSEdgeSwipeDetection,
      edgeSwipeThreshold =
        params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= window.innerWidth - edgeSwipeThreshold)
    ) {
      if ('prevent' !== edgeSwipeDetection) return;
      event.preventDefault();
    }
    if (
      (Object.assign(data, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (touches.startX = startX),
      (touches.startY = startY),
      (data.touchStartTime = utils_now()),
      (swiper.allowClick = !0),
      swiper.updateSize(),
      (swiper.swipeDirection = void 0),
      params.threshold > 0 && (data.allowThresholdMove = !1),
      'touchstart' !== e.type)
    ) {
      let preventDefault = !0;
      $targetEl.is(data.focusableElements) &&
        ((preventDefault = !1),
        'SELECT' === $targetEl[0].nodeName && (data.isTouched = !1)),
        document.activeElement &&
          dom(document.activeElement).is(data.focusableElements) &&
          document.activeElement !== $targetEl[0] &&
          document.activeElement.blur();
      const shouldPreventDefault =
        preventDefault &&
        swiper.allowTouchMove &&
        params.touchStartPreventDefault;
      (!params.touchStartForcePreventDefault && !shouldPreventDefault) ||
        $targetEl[0].isContentEditable ||
        e.preventDefault();
    }
    swiper.params.freeMode &&
      swiper.params.freeMode.enabled &&
      swiper.freeMode &&
      swiper.animating &&
      !params.cssMode &&
      swiper.freeMode.onTouchStart(),
      swiper.emit('touchStart', e);
  }
  function onTouchMove(event) {
    const document = ssr_window_esm_getDocument(),
      swiper = this,
      data = swiper.touchEventsData,
      {
        params: params,
        touches: touches,
        rtlTranslate: rtl,
        enabled: enabled,
      } = swiper;
    if (!enabled) return;
    let e = event;
    if ((e.originalEvent && (e = e.originalEvent), !data.isTouched))
      return void (
        data.startMoving &&
        data.isScrolling &&
        swiper.emit('touchMoveOpposite', e)
      );
    if (data.isTouchEvent && 'touchmove' !== e.type) return;
    const targetTouch =
        'touchmove' === e.type &&
        e.targetTouches &&
        (e.targetTouches[0] || e.changedTouches[0]),
      pageX = 'touchmove' === e.type ? targetTouch.pageX : e.pageX,
      pageY = 'touchmove' === e.type ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper)
      return (touches.startX = pageX), void (touches.startY = pageY);
    if (!swiper.allowTouchMove)
      return (
        dom(e.target).is(data.focusableElements) || (swiper.allowClick = !1),
        void (
          data.isTouched &&
          (Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
          }),
          (data.touchStartTime = utils_now()))
        )
      );
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop)
      if (swiper.isVertical()) {
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        )
          return (data.isTouched = !1), void (data.isMoved = !1);
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      )
        return;
    if (
      data.isTouchEvent &&
      document.activeElement &&
      e.target === document.activeElement &&
      dom(e.target).is(data.focusableElements)
    )
      return (data.isMoved = !0), void (swiper.allowClick = !1);
    if (
      (data.allowTouchCallbacks && swiper.emit('touchMove', e),
      e.targetTouches && e.targetTouches.length > 1)
    )
      return;
    (touches.currentX = pageX), (touches.currentY = pageY);
    const diffX = touches.currentX - touches.startX,
      diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold
    )
      return;
    if (void 0 === data.isScrolling) {
      let touchAngle;
      (swiper.isHorizontal() && touches.currentY === touches.startY) ||
      (swiper.isVertical() && touches.currentX === touches.startX)
        ? (data.isScrolling = !1)
        : diffX * diffX + diffY * diffY >= 25 &&
          ((touchAngle =
            (180 * Math.atan2(Math.abs(diffY), Math.abs(diffX))) / Math.PI),
          (data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle));
    }
    if (
      (data.isScrolling && swiper.emit('touchMoveOpposite', e),
      void 0 === data.startMoving &&
        ((touches.currentX === touches.startX &&
          touches.currentY === touches.startY) ||
          (data.startMoving = !0)),
      data.isScrolling)
    )
      return void (data.isTouched = !1);
    if (!data.startMoving) return;
    (swiper.allowClick = !1),
      !params.cssMode && e.cancelable && e.preventDefault(),
      params.touchMoveStopPropagation && !params.nested && e.stopPropagation(),
      data.isMoved ||
        (params.loop && !params.cssMode && swiper.loopFix(),
        (data.startTranslate = swiper.getTranslate()),
        swiper.setTransition(0),
        swiper.animating &&
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
        (data.allowMomentumBounce = !1),
        !params.grabCursor ||
          (!0 !== swiper.allowSlideNext && !0 !== swiper.allowSlidePrev) ||
          swiper.setGrabCursor(!0),
        swiper.emit('sliderFirstMove', e)),
      swiper.emit('sliderMove', e),
      (data.isMoved = !0);
    let diff = swiper.isHorizontal() ? diffX : diffY;
    (touches.diff = diff),
      (diff *= params.touchRatio),
      rtl && (diff = -diff),
      (swiper.swipeDirection = diff > 0 ? 'prev' : 'next'),
      (data.currentTranslate = diff + data.startTranslate);
    let disableParentSwiper = !0,
      resistanceRatio = params.resistanceRatio;
    if (
      (params.touchReleaseOnEdges && (resistanceRatio = 0),
      diff > 0 && data.currentTranslate > swiper.minTranslate()
        ? ((disableParentSwiper = !1),
          params.resistance &&
            (data.currentTranslate =
              swiper.minTranslate() -
              1 +
              (-swiper.minTranslate() + data.startTranslate + diff) **
                resistanceRatio))
        : diff < 0 &&
          data.currentTranslate < swiper.maxTranslate() &&
          ((disableParentSwiper = !1),
          params.resistance &&
            (data.currentTranslate =
              swiper.maxTranslate() +
              1 -
              (swiper.maxTranslate() - data.startTranslate - diff) **
                resistanceRatio)),
      disableParentSwiper && (e.preventedByNestedSwiper = !0),
      !swiper.allowSlideNext &&
        'next' === swiper.swipeDirection &&
        data.currentTranslate < data.startTranslate &&
        (data.currentTranslate = data.startTranslate),
      !swiper.allowSlidePrev &&
        'prev' === swiper.swipeDirection &&
        data.currentTranslate > data.startTranslate &&
        (data.currentTranslate = data.startTranslate),
      swiper.allowSlidePrev ||
        swiper.allowSlideNext ||
        (data.currentTranslate = data.startTranslate),
      params.threshold > 0)
    ) {
      if (!(Math.abs(diff) > params.threshold || data.allowThresholdMove))
        return void (data.currentTranslate = data.startTranslate);
      if (!data.allowThresholdMove)
        return (
          (data.allowThresholdMove = !0),
          (touches.startX = touches.currentX),
          (touches.startY = touches.currentY),
          (data.currentTranslate = data.startTranslate),
          void (touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY)
        );
    }
    params.followFinger &&
      !params.cssMode &&
      (((params.freeMode && params.freeMode.enabled && swiper.freeMode) ||
        params.watchSlidesProgress) &&
        (swiper.updateActiveIndex(), swiper.updateSlidesClasses()),
      swiper.params.freeMode &&
        params.freeMode.enabled &&
        swiper.freeMode &&
        swiper.freeMode.onTouchMove(),
      swiper.updateProgress(data.currentTranslate),
      swiper.setTranslate(data.currentTranslate));
  }
  function onTouchEnd(event) {
    const swiper = this,
      data = swiper.touchEventsData,
      {
        params: params,
        touches: touches,
        rtlTranslate: rtl,
        slidesGrid: slidesGrid,
        enabled: enabled,
      } = swiper;
    if (!enabled) return;
    let e = event;
    if (
      (e.originalEvent && (e = e.originalEvent),
      data.allowTouchCallbacks && swiper.emit('touchEnd', e),
      (data.allowTouchCallbacks = !1),
      !data.isTouched)
    )
      return (
        data.isMoved && params.grabCursor && swiper.setGrabCursor(!1),
        (data.isMoved = !1),
        void (data.startMoving = !1)
      );
    params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (!0 === swiper.allowSlideNext || !0 === swiper.allowSlidePrev) &&
      swiper.setGrabCursor(!1);
    const touchEndTime = utils_now(),
      timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || (e.composedPath && e.composedPath());
      swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target),
        swiper.emit('tap click', e),
        timeDiff < 300 &&
          touchEndTime - data.lastClickTime < 300 &&
          swiper.emit('doubleTap doubleClick', e);
    }
    if (
      ((data.lastClickTime = utils_now()),
      utils_nextTick(() => {
        swiper.destroyed || (swiper.allowClick = !0);
      }),
      !data.isTouched ||
        !data.isMoved ||
        !swiper.swipeDirection ||
        0 === touches.diff ||
        data.currentTranslate === data.startTranslate)
    )
      return (
        (data.isTouched = !1), (data.isMoved = !1), void (data.startMoving = !1)
      );
    let currentPos;
    if (
      ((data.isTouched = !1),
      (data.isMoved = !1),
      (data.startMoving = !1),
      (currentPos = params.followFinger
        ? rtl
          ? swiper.translate
          : -swiper.translate
        : -data.currentTranslate),
      params.cssMode)
    )
      return;
    if (swiper.params.freeMode && params.freeMode.enabled)
      return void swiper.freeMode.onTouchEnd({ currentPos: currentPos });
    let stopIndex = 0,
      groupSize = swiper.slidesSizesGrid[0];
    for (
      let i = 0;
      i < slidesGrid.length;
      i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
    ) {
      const increment =
        i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      void 0 !== slidesGrid[i + increment]
        ? currentPos >= slidesGrid[i] &&
          currentPos < slidesGrid[i + increment] &&
          ((stopIndex = i),
          (groupSize = slidesGrid[i + increment] - slidesGrid[i]))
        : currentPos >= slidesGrid[i] &&
          ((stopIndex = i),
          (groupSize =
            slidesGrid[slidesGrid.length - 1] -
            slidesGrid[slidesGrid.length - 2]));
    }
    let rewindFirstIndex = null,
      rewindLastIndex = null;
    params.rewind &&
      (swiper.isBeginning
        ? (rewindLastIndex =
            swiper.params.virtual &&
            swiper.params.virtual.enabled &&
            swiper.virtual
              ? swiper.virtual.slides.length - 1
              : swiper.slides.length - 1)
        : swiper.isEnd && (rewindFirstIndex = 0));
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize,
      increment =
        stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) return void swiper.slideTo(swiper.activeIndex);
      'next' === swiper.swipeDirection &&
        (ratio >= params.longSwipesRatio
          ? swiper.slideTo(
              params.rewind && swiper.isEnd
                ? rewindFirstIndex
                : stopIndex + increment,
            )
          : swiper.slideTo(stopIndex)),
        'prev' === swiper.swipeDirection &&
          (ratio > 1 - params.longSwipesRatio
            ? swiper.slideTo(stopIndex + increment)
            : null !== rewindLastIndex &&
              ratio < 0 &&
              Math.abs(ratio) > params.longSwipesRatio
            ? swiper.slideTo(rewindLastIndex)
            : swiper.slideTo(stopIndex));
    } else {
      if (!params.shortSwipes) return void swiper.slideTo(swiper.activeIndex);
      swiper.navigation &&
      (e.target === swiper.navigation.nextEl ||
        e.target === swiper.navigation.prevEl)
        ? e.target === swiper.navigation.nextEl
          ? swiper.slideTo(stopIndex + increment)
          : swiper.slideTo(stopIndex)
        : ('next' === swiper.swipeDirection &&
            swiper.slideTo(
              null !== rewindFirstIndex
                ? rewindFirstIndex
                : stopIndex + increment,
            ),
          'prev' === swiper.swipeDirection &&
            swiper.slideTo(
              null !== rewindLastIndex ? rewindLastIndex : stopIndex,
            ));
    }
  }
  function onResize() {
    const swiper = this,
      { params: params, el: el } = swiper;
    if (el && 0 === el.offsetWidth) return;
    params.breakpoints && swiper.setBreakpoint();
    const {
      allowSlideNext: allowSlideNext,
      allowSlidePrev: allowSlidePrev,
      snapGrid: snapGrid,
    } = swiper;
    (swiper.allowSlideNext = !0),
      (swiper.allowSlidePrev = !0),
      swiper.updateSize(),
      swiper.updateSlides(),
      swiper.updateSlidesClasses(),
      ('auto' === params.slidesPerView || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.isBeginning &&
      !swiper.params.centeredSlides
        ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0)
        : swiper.slideTo(swiper.activeIndex, 0, !1, !0),
      swiper.autoplay &&
        swiper.autoplay.running &&
        swiper.autoplay.paused &&
        swiper.autoplay.run(),
      (swiper.allowSlidePrev = allowSlidePrev),
      (swiper.allowSlideNext = allowSlideNext),
      swiper.params.watchOverflow &&
        snapGrid !== swiper.snapGrid &&
        swiper.checkOverflow();
  }
  function onClick(e) {
    const swiper = this;
    swiper.enabled &&
      (swiper.allowClick ||
        (swiper.params.preventClicks && e.preventDefault(),
        swiper.params.preventClicksPropagation &&
          swiper.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function onScroll() {
    const swiper = this,
      {
        wrapperEl: wrapperEl,
        rtlTranslate: rtlTranslate,
        enabled: enabled,
      } = swiper;
    if (!enabled) return;
    let newProgress;
    (swiper.previousTranslate = swiper.translate),
      swiper.isHorizontal()
        ? (swiper.translate = -wrapperEl.scrollLeft)
        : (swiper.translate = -wrapperEl.scrollTop),
      0 === swiper.translate && (swiper.translate = 0),
      swiper.updateActiveIndex(),
      swiper.updateSlidesClasses();
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    (newProgress =
      0 === translatesDiff
        ? 0
        : (swiper.translate - swiper.minTranslate()) / translatesDiff),
      newProgress !== swiper.progress &&
        swiper.updateProgress(
          rtlTranslate ? -swiper.translate : swiper.translate,
        ),
      swiper.emit('setTranslate', swiper.translate, !1);
  }
  let dummyEventAttached = !1;
  function dummyEventListener() {}
  const events = (swiper, method) => {
    const document = ssr_window_esm_getDocument(),
      {
        params: params,
        touchEvents: touchEvents,
        el: el,
        wrapperEl: wrapperEl,
        device: device,
        support: support,
      } = swiper,
      capture = !!params.nested,
      domMethod = 'on' === method ? 'addEventListener' : 'removeEventListener',
      swiperMethod = method;
    if (support.touch) {
      const passiveListener = !(
        'touchstart' !== touchEvents.start ||
        !support.passiveListener ||
        !params.passiveListeners
      ) && { passive: !0, capture: !1 };
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener),
        el[domMethod](
          touchEvents.move,
          swiper.onTouchMove,
          support.passiveListener ? { passive: !1, capture: capture } : capture,
        ),
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener),
        touchEvents.cancel &&
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } else
      el[domMethod](touchEvents.start, swiper.onTouchStart, !1),
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture),
        document[domMethod](touchEvents.end, swiper.onTouchEnd, !1);
    (params.preventClicks || params.preventClicksPropagation) &&
      el[domMethod]('click', swiper.onClick, !0),
      params.cssMode && wrapperEl[domMethod]('scroll', swiper.onScroll),
      params.updateOnWindowResize
        ? swiper[swiperMethod](
            device.ios || device.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            onResize,
            !0,
          )
        : swiper[swiperMethod]('observerUpdate', onResize, !0);
  };
  var core_events = {
    attachEvents: function () {
      const swiper = this,
        document = ssr_window_esm_getDocument(),
        { params: params, support: support } = swiper;
      (swiper.onTouchStart = onTouchStart.bind(swiper)),
        (swiper.onTouchMove = onTouchMove.bind(swiper)),
        (swiper.onTouchEnd = onTouchEnd.bind(swiper)),
        params.cssMode && (swiper.onScroll = onScroll.bind(swiper)),
        (swiper.onClick = onClick.bind(swiper)),
        support.touch &&
          !dummyEventAttached &&
          (document.addEventListener('touchstart', dummyEventListener),
          (dummyEventAttached = !0)),
        events(swiper, 'on');
    },
    detachEvents: function () {
      events(this, 'off');
    },
  };
  const isGridEnabled = (swiper, params) =>
    swiper.grid && params.grid && params.grid.rows > 1;
  var breakpoints = {
    setBreakpoint: function () {
      const swiper = this,
        {
          activeIndex: activeIndex,
          initialized: initialized,
          loopedSlides: loopedSlides = 0,
          params: params,
          $el: $el,
        } = swiper,
        breakpoints = params.breakpoints;
      if (
        !breakpoints ||
        (breakpoints && 0 === Object.keys(breakpoints).length)
      )
        return;
      const breakpoint = swiper.getBreakpoint(
        breakpoints,
        swiper.params.breakpointsBase,
        swiper.el,
      );
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      const breakpointParams =
          (breakpoint in breakpoints ? breakpoints[breakpoint] : void 0) ||
          swiper.originalParams,
        wasMultiRow = isGridEnabled(swiper, params),
        isMultiRow = isGridEnabled(swiper, breakpointParams),
        wasEnabled = params.enabled;
      wasMultiRow && !isMultiRow
        ? ($el.removeClass(
            `${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`,
          ),
          swiper.emitContainerClasses())
        : !wasMultiRow &&
          isMultiRow &&
          ($el.addClass(`${params.containerModifierClass}grid`),
          ((breakpointParams.grid.fill &&
            'column' === breakpointParams.grid.fill) ||
            (!breakpointParams.grid.fill && 'column' === params.grid.fill)) &&
            $el.addClass(`${params.containerModifierClass}grid-column`),
          swiper.emitContainerClasses());
      const directionChanged =
          breakpointParams.direction &&
          breakpointParams.direction !== params.direction,
        needsReLoop =
          params.loop &&
          (breakpointParams.slidesPerView !== params.slidesPerView ||
            directionChanged);
      directionChanged && initialized && swiper.changeDirection(),
        utils_extend(swiper.params, breakpointParams);
      const isEnabled = swiper.params.enabled;
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      }),
        wasEnabled && !isEnabled
          ? swiper.disable()
          : !wasEnabled && isEnabled && swiper.enable(),
        (swiper.currentBreakpoint = breakpoint),
        swiper.emit('_beforeBreakpoint', breakpointParams),
        needsReLoop &&
          initialized &&
          (swiper.loopDestroy(),
          swiper.loopCreate(),
          swiper.updateSlides(),
          swiper.slideTo(
            activeIndex - loopedSlides + swiper.loopedSlides,
            0,
            !1,
          )),
        swiper.emit('breakpoint', breakpointParams);
    },
    getBreakpoint: function (breakpoints, base, containerEl) {
      if (
        (void 0 === base && (base = 'window'),
        !breakpoints || ('container' === base && !containerEl))
      )
        return;
      let breakpoint = !1;
      const window = ssr_window_esm_getWindow(),
        currentHeight =
          'window' === base ? window.innerHeight : containerEl.clientHeight,
        points = Object.keys(breakpoints).map((point) => {
          if ('string' == typeof point && 0 === point.indexOf('@')) {
            const minRatio = parseFloat(point.substr(1));
            return { value: currentHeight * minRatio, point: point };
          }
          return { value: point, point: point };
        });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
      for (let i = 0; i < points.length; i += 1) {
        const { point: point, value: value } = points[i];
        'window' === base
          ? window.matchMedia(`(min-width: ${value}px)`).matches &&
            (breakpoint = point)
          : value <= containerEl.clientWidth && (breakpoint = point);
      }
      return breakpoint || 'max';
    },
  };
  var classes = {
    addClasses: function () {
      const {
          classNames: classNames,
          params: params,
          rtl: rtl,
          $el: $el,
          device: device,
          support: support,
        } = this,
        suffixes = (function (entries, prefix) {
          const resultClasses = [];
          return (
            entries.forEach((item) => {
              'object' == typeof item
                ? Object.keys(item).forEach((classNames) => {
                    item[classNames] && resultClasses.push(prefix + classNames);
                  })
                : 'string' == typeof item && resultClasses.push(prefix + item);
            }),
            resultClasses
          );
        })(
          [
            'initialized',
            params.direction,
            { 'pointer-events': !support.touch },
            { 'free-mode': this.params.freeMode && params.freeMode.enabled },
            { autoheight: params.autoHeight },
            { rtl: rtl },
            { grid: params.grid && params.grid.rows > 1 },
            {
              'grid-column':
                params.grid &&
                params.grid.rows > 1 &&
                'column' === params.grid.fill,
            },
            { android: device.android },
            { ios: device.ios },
            { 'css-mode': params.cssMode },
            { centered: params.cssMode && params.centeredSlides },
          ],
          params.containerModifierClass,
        );
      classNames.push(...suffixes),
        $el.addClass([...classNames].join(' ')),
        this.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: $el, classNames: classNames } = this;
      $el.removeClass(classNames.join(' ')), this.emitContainerClasses();
    },
  };
  var defaults = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function moduleExtendParams(params, allModulesParams) {
    return function (obj) {
      void 0 === obj && (obj = {});
      const moduleParamName = Object.keys(obj)[0],
        moduleParams = obj[moduleParamName];
      'object' == typeof moduleParams && null !== moduleParams
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >=
            0 &&
            !0 === params[moduleParamName] &&
            (params[moduleParamName] = { auto: !0 }),
          moduleParamName in params && 'enabled' in moduleParams
            ? (!0 === params[moduleParamName] &&
                (params[moduleParamName] = { enabled: !0 }),
              'object' != typeof params[moduleParamName] ||
                'enabled' in params[moduleParamName] ||
                (params[moduleParamName].enabled = !0),
              params[moduleParamName] ||
                (params[moduleParamName] = { enabled: !1 }),
              utils_extend(allModulesParams, obj))
            : utils_extend(allModulesParams, obj))
        : utils_extend(allModulesParams, obj);
    };
  }
  const prototypes = {
      eventsEmitter: events_emitter,
      update: update,
      translate: translate,
      transition: {
        setTransition: function (duration, byController) {
          const swiper = this;
          swiper.params.cssMode || swiper.$wrapperEl.transition(duration),
            swiper.emit('setTransition', duration, byController);
        },
        transitionStart: function (runCallbacks, direction) {
          void 0 === runCallbacks && (runCallbacks = !0);
          const swiper = this,
            { params: params } = swiper;
          params.cssMode ||
            (params.autoHeight && swiper.updateAutoHeight(),
            transitionEmit({
              swiper: swiper,
              runCallbacks: runCallbacks,
              direction: direction,
              step: 'Start',
            }));
        },
        transitionEnd: function (runCallbacks, direction) {
          void 0 === runCallbacks && (runCallbacks = !0);
          const { params: params } = this;
          (this.animating = !1),
            params.cssMode ||
              (this.setTransition(0),
              transitionEmit({
                swiper: this,
                runCallbacks: runCallbacks,
                direction: direction,
                step: 'End',
              }));
        },
      },
      slide: slide,
      loop: loop,
      grabCursor: {
        setGrabCursor: function (moving) {
          if (
            this.support.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode
          )
            return;
          const el =
            'container' === this.params.touchEventsTarget
              ? this.el
              : this.wrapperEl;
          (el.style.cursor = 'move'),
            (el.style.cursor = moving ? 'grabbing' : 'grab');
        },
        unsetGrabCursor: function () {
          this.support.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this[
              'container' === this.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = '');
        },
      },
      events: core_events,
      breakpoints: breakpoints,
      checkOverflow: {
        checkOverflow: function () {
          const swiper = this,
            { isLocked: wasLocked, params: params } = swiper,
            { slidesOffsetBefore: slidesOffsetBefore } = params;
          if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1,
              lastSlideRightEdge =
                swiper.slidesGrid[lastSlideIndex] +
                swiper.slidesSizesGrid[lastSlideIndex] +
                2 * slidesOffsetBefore;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
          } else swiper.isLocked = 1 === swiper.snapGrid.length;
          !0 === params.allowSlideNext &&
            (swiper.allowSlideNext = !swiper.isLocked),
            !0 === params.allowSlidePrev &&
              (swiper.allowSlidePrev = !swiper.isLocked),
            wasLocked && wasLocked !== swiper.isLocked && (swiper.isEnd = !1),
            wasLocked !== swiper.isLocked &&
              swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        },
      },
      classes: classes,
      images: {
        loadImage: function (
          imageEl,
          src,
          srcset,
          sizes,
          checkForComplete,
          callback,
        ) {
          const window = ssr_window_esm_getWindow();
          let image;
          function onReady() {
            callback && callback();
          }
          dom(imageEl).parent('picture')[0] ||
          (imageEl.complete && checkForComplete)
            ? onReady()
            : src
            ? ((image = new window.Image()),
              (image.onload = onReady),
              (image.onerror = onReady),
              sizes && (image.sizes = sizes),
              srcset && (image.srcset = srcset),
              src && (image.src = src))
            : onReady();
        },
        preloadImages: function () {
          const swiper = this;
          function onReady() {
            null != swiper &&
              swiper &&
              !swiper.destroyed &&
              (void 0 !== swiper.imagesLoaded && (swiper.imagesLoaded += 1),
              swiper.imagesLoaded === swiper.imagesToLoad.length &&
                (swiper.params.updateOnImagesReady && swiper.update(),
                swiper.emit('imagesReady')));
          }
          swiper.imagesToLoad = swiper.$el.find('img');
          for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
            const imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(
              imageEl,
              imageEl.currentSrc || imageEl.getAttribute('src'),
              imageEl.srcset || imageEl.getAttribute('srcset'),
              imageEl.sizes || imageEl.getAttribute('sizes'),
              !0,
              onReady,
            );
          }
        },
      },
    },
    extendedDefaults = {};
  class Swiper {
    constructor() {
      let el, params;
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      )
        args[_key] = arguments[_key];
      if (
        (1 === args.length &&
        args[0].constructor &&
        'Object' === Object.prototype.toString.call(args[0]).slice(8, -1)
          ? (params = args[0])
          : ([el, params] = args),
        params || (params = {}),
        (params = utils_extend({}, params)),
        el && !params.el && (params.el = el),
        params.el && dom(params.el).length > 1)
      ) {
        const swipers = [];
        return (
          dom(params.el).each((containerEl) => {
            const newParams = utils_extend({}, params, { el: containerEl });
            swipers.push(new Swiper(newParams));
          }),
          swipers
        );
      }
      const swiper = this;
      (swiper.__swiper__ = !0),
        (swiper.support = getSupport()),
        (swiper.device = getDevice({ userAgent: params.userAgent })),
        (swiper.browser = getBrowser()),
        (swiper.eventsListeners = {}),
        (swiper.eventsAnyListeners = []),
        (swiper.modules = [...swiper.__modules__]),
        params.modules &&
          Array.isArray(params.modules) &&
          swiper.modules.push(...params.modules);
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          swiper: swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper),
        });
      });
      const swiperParams = utils_extend({}, defaults, allModulesParams);
      return (
        (swiper.params = utils_extend(
          {},
          swiperParams,
          extendedDefaults,
          params,
        )),
        (swiper.originalParams = utils_extend({}, swiper.params)),
        (swiper.passedParams = utils_extend({}, params)),
        swiper.params &&
          swiper.params.on &&
          Object.keys(swiper.params.on).forEach((eventName) => {
            swiper.on(eventName, swiper.params.on[eventName]);
          }),
        swiper.params &&
          swiper.params.onAny &&
          swiper.onAny(swiper.params.onAny),
        (swiper.$ = dom),
        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el: el,
          classNames: [],
          slides: dom(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return 'horizontal' === swiper.params.direction;
          },
          isVertical() {
            return 'vertical' === swiper.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          touchEvents: (function () {
            const touch = [
                'touchstart',
                'touchmove',
                'touchend',
                'touchcancel',
              ],
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            return (
              (swiper.touchEventsTouch = {
                start: touch[0],
                move: touch[1],
                end: touch[2],
                cancel: touch[3],
              }),
              (swiper.touchEventsDesktop = {
                start: desktop[0],
                move: desktop[1],
                end: desktop[2],
              }),
              swiper.support.touch || !swiper.params.simulateTouch
                ? swiper.touchEventsTouch
                : swiper.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: swiper.params.focusableElements,
            lastClickTime: utils_now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: swiper.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        swiper.emit('_swiper'),
        swiper.params.init && swiper.init(),
        swiper
      );
    }
    enable() {
      const swiper = this;
      swiper.enabled ||
        ((swiper.enabled = !0),
        swiper.params.grabCursor && swiper.setGrabCursor(),
        swiper.emit('enable'));
    }
    disable() {
      const swiper = this;
      swiper.enabled &&
        ((swiper.enabled = !1),
        swiper.params.grabCursor && swiper.unsetGrabCursor(),
        swiper.emit('disable'));
    }
    setProgress(progress, speed) {
      progress = Math.min(Math.max(progress, 0), 1);
      const min = this.minTranslate(),
        current = (this.maxTranslate() - min) * progress + min;
      this.translateTo(current, void 0 === speed ? 0 : speed),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className
        .split(' ')
        .filter(
          (className) =>
            0 === className.indexOf('swiper') ||
            0 === className.indexOf(swiper.params.containerModifierClass),
        );
      swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      return slideEl.className
        .split(' ')
        .filter(
          (className) =>
            0 === className.indexOf('swiper-slide') ||
            0 === className.indexOf(swiper.params.slideClass),
        )
        .join(' ');
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.each((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({ slideEl: slideEl, classNames: classNames }),
          swiper.emit('_slideClass', slideEl, classNames);
      }),
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
      void 0 === view && (view = 'current'), void 0 === exact && (exact = !1);
      const {
        params: params,
        slides: slides,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid,
        size: swiperSize,
        activeIndex: activeIndex,
      } = this;
      let spv = 1;
      if (params.centeredSlides) {
        let breakLoop,
          slideSize = slides[activeIndex].swiperSlideSize;
        for (let i = activeIndex + 1; i < slides.length; i += 1)
          slides[i] &&
            !breakLoop &&
            ((slideSize += slides[i].swiperSlideSize),
            (spv += 1),
            slideSize > swiperSize && (breakLoop = !0));
        for (let i = activeIndex - 1; i >= 0; i -= 1)
          slides[i] &&
            !breakLoop &&
            ((slideSize += slides[i].swiperSlideSize),
            (spv += 1),
            slideSize > swiperSize && (breakLoop = !0));
      } else if ('current' === view)
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          (exact
            ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] <
              swiperSize
            : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) &&
            (spv += 1);
        }
      else
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          slidesGrid[activeIndex] - slidesGrid[i] < swiperSize && (spv += 1);
        }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const { snapGrid: snapGrid, params: params } = swiper;
      function setTranslate() {
        const translateValue = swiper.rtlTranslate
            ? -1 * swiper.translate
            : swiper.translate,
          newTranslate = Math.min(
            Math.max(translateValue, swiper.maxTranslate()),
            swiper.minTranslate(),
          );
        swiper.setTranslate(newTranslate),
          swiper.updateActiveIndex(),
          swiper.updateSlidesClasses();
      }
      let translated;
      params.breakpoints && swiper.setBreakpoint(),
        swiper.updateSize(),
        swiper.updateSlides(),
        swiper.updateProgress(),
        swiper.updateSlidesClasses(),
        swiper.params.freeMode && swiper.params.freeMode.enabled
          ? (setTranslate(),
            swiper.params.autoHeight && swiper.updateAutoHeight())
          : ((translated =
              ('auto' === swiper.params.slidesPerView ||
                swiper.params.slidesPerView > 1) &&
              swiper.isEnd &&
              !swiper.params.centeredSlides
                ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0)
                : swiper.slideTo(swiper.activeIndex, 0, !1, !0)),
            translated || setTranslate()),
        params.watchOverflow &&
          snapGrid !== swiper.snapGrid &&
          swiper.checkOverflow(),
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
      void 0 === needUpdate && (needUpdate = !0);
      const swiper = this,
        currentDirection = swiper.params.direction;
      return (
        newDirection ||
          (newDirection =
            'horizontal' === currentDirection ? 'vertical' : 'horizontal'),
        newDirection === currentDirection ||
          ('horizontal' !== newDirection && 'vertical' !== newDirection) ||
          (swiper.$el
            .removeClass(
              `${swiper.params.containerModifierClass}${currentDirection}`,
            )
            .addClass(`${swiper.params.containerModifierClass}${newDirection}`),
          swiper.emitContainerClasses(),
          (swiper.params.direction = newDirection),
          swiper.slides.each((slideEl) => {
            'vertical' === newDirection
              ? (slideEl.style.width = '')
              : (slideEl.style.height = '');
          }),
          swiper.emit('changeDirection'),
          needUpdate && swiper.update()),
        swiper
      );
    }
    mount(el) {
      const swiper = this;
      if (swiper.mounted) return !0;
      const $el = dom(el || swiper.params.el);
      if (!(el = $el[0])) return !1;
      el.swiper = swiper;
      const getWrapperSelector = () =>
        `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
      let $wrapperEl = (() => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
          return (res.children = (options) => $el.children(options)), res;
        }
        return $el.children(getWrapperSelector());
      })();
      if (0 === $wrapperEl.length && swiper.params.createElements) {
        const wrapper = ssr_window_esm_getDocument().createElement('div');
        ($wrapperEl = dom(wrapper)),
          (wrapper.className = swiper.params.wrapperClass),
          $el.append(wrapper),
          $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
            $wrapperEl.append(slideEl);
          });
      }
      return (
        Object.assign(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: !0,
          rtl: 'rtl' === el.dir.toLowerCase() || 'rtl' === $el.css('direction'),
          rtlTranslate:
            'horizontal' === swiper.params.direction &&
            ('rtl' === el.dir.toLowerCase() || 'rtl' === $el.css('direction')),
          wrongRTL: '-webkit-box' === $wrapperEl.css('display'),
        }),
        !0
      );
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      return (
        !1 === swiper.mount(el) ||
          (swiper.emit('beforeInit'),
          swiper.params.breakpoints && swiper.setBreakpoint(),
          swiper.addClasses(),
          swiper.params.loop && swiper.loopCreate(),
          swiper.updateSize(),
          swiper.updateSlides(),
          swiper.params.watchOverflow && swiper.checkOverflow(),
          swiper.params.grabCursor && swiper.enabled && swiper.setGrabCursor(),
          swiper.params.preloadImages && swiper.preloadImages(),
          swiper.params.loop
            ? swiper.slideTo(
                swiper.params.initialSlide + swiper.loopedSlides,
                0,
                swiper.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : swiper.slideTo(
                swiper.params.initialSlide,
                0,
                swiper.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          swiper.attachEvents(),
          (swiper.initialized = !0),
          swiper.emit('init'),
          swiper.emit('afterInit')),
        swiper
      );
    }
    destroy(deleteInstance, cleanStyles) {
      void 0 === deleteInstance && (deleteInstance = !0),
        void 0 === cleanStyles && (cleanStyles = !0);
      const swiper = this,
        {
          params: params,
          $el: $el,
          $wrapperEl: $wrapperEl,
          slides: slides,
        } = swiper;
      return (
        void 0 === swiper.params ||
          swiper.destroyed ||
          (swiper.emit('beforeDestroy'),
          (swiper.initialized = !1),
          swiper.detachEvents(),
          params.loop && swiper.loopDestroy(),
          cleanStyles &&
            (swiper.removeClasses(),
            $el.removeAttr('style'),
            $wrapperEl.removeAttr('style'),
            slides &&
              slides.length &&
              slides
                .removeClass(
                  [
                    params.slideVisibleClass,
                    params.slideActiveClass,
                    params.slideNextClass,
                    params.slidePrevClass,
                  ].join(' '),
                )
                .removeAttr('style')
                .removeAttr('data-swiper-slide-index')),
          swiper.emit('destroy'),
          Object.keys(swiper.eventsListeners).forEach((eventName) => {
            swiper.off(eventName);
          }),
          !1 !== deleteInstance &&
            ((swiper.$el[0].swiper = null),
            (function (obj) {
              const object = obj;
              Object.keys(object).forEach((key) => {
                try {
                  object[key] = null;
                } catch (e) {}
                try {
                  delete object[key];
                } catch (e) {}
              });
            })(swiper)),
          (swiper.destroyed = !0)),
        null
      );
    }
    static extendDefaults(newDefaults) {
      utils_extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
      const modules = Swiper.prototype.__modules__;
      'function' == typeof mod && modules.indexOf(mod) < 0 && modules.push(mod);
    }
    static use(module) {
      return Array.isArray(module)
        ? (module.forEach((m) => Swiper.installModule(m)), Swiper)
        : (Swiper.installModule(module), Swiper);
    }
  }
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  }),
    Swiper.use([
      function (_ref) {
        let { swiper: swiper, on: on, emit: emit } = _ref;
        const window = ssr_window_esm_getWindow();
        let observer = null,
          animationFrame = null;
        const resizeHandler = () => {
            swiper &&
              !swiper.destroyed &&
              swiper.initialized &&
              (emit('beforeResize'), emit('resize'));
          },
          orientationChangeHandler = () => {
            swiper &&
              !swiper.destroyed &&
              swiper.initialized &&
              emit('orientationchange');
          };
        on('init', () => {
          swiper.params.resizeObserver && void 0 !== window.ResizeObserver
            ? swiper &&
              !swiper.destroyed &&
              swiper.initialized &&
              ((observer = new ResizeObserver((entries) => {
                animationFrame = window.requestAnimationFrame(() => {
                  const { width: width, height: height } = swiper;
                  let newWidth = width,
                    newHeight = height;
                  entries.forEach((_ref2) => {
                    let {
                      contentBoxSize: contentBoxSize,
                      contentRect: contentRect,
                      target: target,
                    } = _ref2;
                    (target && target !== swiper.el) ||
                      ((newWidth = contentRect
                        ? contentRect.width
                        : (contentBoxSize[0] || contentBoxSize).inlineSize),
                      (newHeight = contentRect
                        ? contentRect.height
                        : (contentBoxSize[0] || contentBoxSize).blockSize));
                  }),
                    (newWidth === width && newHeight === height) ||
                      resizeHandler();
                });
              })),
              observer.observe(swiper.el))
            : (window.addEventListener('resize', resizeHandler),
              window.addEventListener(
                'orientationchange',
                orientationChangeHandler,
              ));
        }),
          on('destroy', () => {
            animationFrame && window.cancelAnimationFrame(animationFrame),
              observer &&
                observer.unobserve &&
                swiper.el &&
                (observer.unobserve(swiper.el), (observer = null)),
              window.removeEventListener('resize', resizeHandler),
              window.removeEventListener(
                'orientationchange',
                orientationChangeHandler,
              );
          });
      },
      function (_ref) {
        let {
          swiper: swiper,
          extendParams: extendParams,
          on: on,
          emit: emit,
        } = _ref;
        const observers = [],
          window = ssr_window_esm_getWindow(),
          attach = function (target, options) {
            void 0 === options && (options = {});
            const observer = new (window.MutationObserver ||
              window.WebkitMutationObserver)((mutations) => {
              if (1 === mutations.length)
                return void emit('observerUpdate', mutations[0]);
              const observerUpdate = function () {
                emit('observerUpdate', mutations[0]);
              };
              window.requestAnimationFrame
                ? window.requestAnimationFrame(observerUpdate)
                : window.setTimeout(observerUpdate, 0);
            });
            observer.observe(target, {
              attributes: void 0 === options.attributes || options.attributes,
              childList: void 0 === options.childList || options.childList,
              characterData:
                void 0 === options.characterData || options.characterData,
            }),
              observers.push(observer);
          };
        extendParams({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1,
        }),
          on('init', () => {
            if (swiper.params.observer) {
              if (swiper.params.observeParents) {
                const containerParents = swiper.$el.parents();
                for (let i = 0; i < containerParents.length; i += 1)
                  attach(containerParents[i]);
              }
              attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren,
              }),
                attach(swiper.$wrapperEl[0], { attributes: !1 });
            }
          }),
          on('destroy', () => {
            observers.forEach((observer) => {
              observer.disconnect();
            }),
              observers.splice(0, observers.length);
          });
      },
    ]);
  var core = Swiper;
  function create_element_if_not_defined_createElementIfNotDefined(
    swiper,
    originalParams,
    params,
    checkProps,
  ) {
    const document = ssr_window_esm_getDocument();
    return (
      swiper.params.createElements &&
        Object.keys(checkProps).forEach((key) => {
          if (!params[key] && !0 === params.auto) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            element ||
              ((element = document.createElement('div')),
              (element.className = checkProps[key]),
              swiper.$el.append(element)),
              (params[key] = element),
              (originalParams[key] = element);
          }
        }),
      params
    );
  }
  function Navigation(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit,
    } = _ref;
    function getEl(el) {
      let $el;
      return (
        el &&
          (($el = dom(el)),
          swiper.params.uniqueNavElements &&
            'string' == typeof el &&
            $el.length > 1 &&
            1 === swiper.$el.find(el).length &&
            ($el = swiper.$el.find(el))),
        $el
      );
    }
    function toggleEl($el, disabled) {
      const params = swiper.params.navigation;
      $el &&
        $el.length > 0 &&
        ($el[disabled ? 'addClass' : 'removeClass'](params.disabledClass),
        $el[0] && 'BUTTON' === $el[0].tagName && ($el[0].disabled = disabled),
        swiper.params.watchOverflow &&
          swiper.enabled &&
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass));
    }
    function update() {
      if (swiper.params.loop) return;
      const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
      toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind),
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault(),
        (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) &&
          swiper.slidePrev();
    }
    function onNextClick(e) {
      e.preventDefault(),
        (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) &&
          swiper.slideNext();
    }
    function init() {
      const params = swiper.params.navigation;
      if (
        ((swiper.params.navigation =
          create_element_if_not_defined_createElementIfNotDefined(
            swiper,
            swiper.originalParams.navigation,
            swiper.params.navigation,
            { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
          )),
        !params.nextEl && !params.prevEl)
      )
        return;
      const $nextEl = getEl(params.nextEl),
        $prevEl = getEl(params.prevEl);
      $nextEl && $nextEl.length > 0 && $nextEl.on('click', onNextClick),
        $prevEl && $prevEl.length > 0 && $prevEl.on('click', onPrevClick),
        Object.assign(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0],
        }),
        swiper.enabled ||
          ($nextEl && $nextEl.addClass(params.lockClass),
          $prevEl && $prevEl.addClass(params.lockClass));
    }
    function destroy() {
      const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
      $nextEl &&
        $nextEl.length &&
        ($nextEl.off('click', onNextClick),
        $nextEl.removeClass(swiper.params.navigation.disabledClass)),
        $prevEl &&
          $prevEl.length &&
          ($prevEl.off('click', onPrevClick),
          $prevEl.removeClass(swiper.params.navigation.disabledClass));
    }
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    }),
      (swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      on('init', () => {
        init(), update();
      }),
      on('toEdge fromEdge lock unlock', () => {
        update();
      }),
      on('destroy', () => {
        destroy();
      }),
      on('enable disable', () => {
        const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
        $nextEl &&
          $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.navigation.lockClass,
          ),
          $prevEl &&
            $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](
              swiper.params.navigation.lockClass,
            );
      }),
      on('click', (_s, e) => {
        const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation,
          targetEl = e.target;
        if (
          swiper.params.navigation.hideOnClick &&
          !dom(targetEl).is($prevEl) &&
          !dom(targetEl).is($nextEl)
        ) {
          if (
            swiper.pagination &&
            swiper.params.pagination &&
            swiper.params.pagination.clickable &&
            (swiper.pagination.el === targetEl ||
              swiper.pagination.el.contains(targetEl))
          )
            return;
          let isHidden;
          $nextEl
            ? (isHidden = $nextEl.hasClass(
                swiper.params.navigation.hiddenClass,
              ))
            : $prevEl &&
              (isHidden = $prevEl.hasClass(
                swiper.params.navigation.hiddenClass,
              )),
            emit(!0 === isHidden ? 'navigationShow' : 'navigationHide'),
            $nextEl &&
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass),
            $prevEl &&
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }),
      Object.assign(swiper.navigation, {
        update: update,
        init: init,
        destroy: destroy,
      });
  }
  function classes_to_selector_classesToSelector(classes) {
    return (
      void 0 === classes && (classes = ''),
      `.${classes
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')}`
    );
  }
  function Pagination(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit,
    } = _ref;
    const pfx = 'swiper-pagination';
    let bulletSize;
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: 'bullets',
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
      },
    }),
      (swiper.pagination = { el: null, $el: null, bullets: [] });
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return (
        !swiper.params.pagination.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        0 === swiper.pagination.$el.length
      );
    }
    function setSideBullets($bulletEl, position) {
      const { bulletActiveClass: bulletActiveClass } = swiper.params.pagination;
      $bulletEl[position]()
        .addClass(`${bulletActiveClass}-${position}`)
        [position]()
        .addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
      const rtl = swiper.rtl,
        params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.slides.length
            : swiper.slides.length,
        $el = swiper.pagination.$el;
      let current;
      const total = swiper.params.loop
        ? Math.ceil(
            (slidesLength - 2 * swiper.loopedSlides) /
              swiper.params.slidesPerGroup,
          )
        : swiper.snapGrid.length;
      if (
        (swiper.params.loop
          ? ((current = Math.ceil(
              (swiper.activeIndex - swiper.loopedSlides) /
                swiper.params.slidesPerGroup,
            )),
            current > slidesLength - 1 - 2 * swiper.loopedSlides &&
              (current -= slidesLength - 2 * swiper.loopedSlides),
            current > total - 1 && (current -= total),
            current < 0 &&
              'bullets' !== swiper.params.paginationType &&
              (current = total + current))
          : (current =
              void 0 !== swiper.snapIndex
                ? swiper.snapIndex
                : swiper.activeIndex || 0),
        'bullets' === params.type &&
          swiper.pagination.bullets &&
          swiper.pagination.bullets.length > 0)
      ) {
        const bullets = swiper.pagination.bullets;
        let firstIndex, lastIndex, midIndex;
        if (
          (params.dynamicBullets &&
            ((bulletSize = bullets
              .eq(0)
              [swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
            $el.css(
              swiper.isHorizontal() ? 'width' : 'height',
              bulletSize * (params.dynamicMainBullets + 4) + 'px',
            ),
            params.dynamicMainBullets > 1 &&
              void 0 !== swiper.previousIndex &&
              ((dynamicBulletIndex +=
                current - (swiper.previousIndex - swiper.loopedSlides || 0)),
              dynamicBulletIndex > params.dynamicMainBullets - 1
                ? (dynamicBulletIndex = params.dynamicMainBullets - 1)
                : dynamicBulletIndex < 0 && (dynamicBulletIndex = 0)),
            (firstIndex = Math.max(current - dynamicBulletIndex, 0)),
            (lastIndex =
              firstIndex +
              (Math.min(bullets.length, params.dynamicMainBullets) - 1)),
            (midIndex = (lastIndex + firstIndex) / 2)),
          bullets.removeClass(
            ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
              .map((suffix) => `${params.bulletActiveClass}${suffix}`)
              .join(' '),
          ),
          $el.length > 1)
        )
          bullets.each((bullet) => {
            const $bullet = dom(bullet),
              bulletIndex = $bullet.index();
            bulletIndex === current &&
              $bullet.addClass(params.bulletActiveClass),
              params.dynamicBullets &&
                (bulletIndex >= firstIndex &&
                  bulletIndex <= lastIndex &&
                  $bullet.addClass(`${params.bulletActiveClass}-main`),
                bulletIndex === firstIndex && setSideBullets($bullet, 'prev'),
                bulletIndex === lastIndex && setSideBullets($bullet, 'next'));
          });
        else {
          const $bullet = bullets.eq(current),
            bulletIndex = $bullet.index();
          if (
            ($bullet.addClass(params.bulletActiveClass), params.dynamicBullets)
          ) {
            const $firstDisplayedBullet = bullets.eq(firstIndex),
              $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1)
              bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
            if (swiper.params.loop)
              if (bulletIndex >= bullets.length) {
                for (let i = params.dynamicMainBullets; i >= 0; i -= 1)
                  bullets
                    .eq(bullets.length - i)
                    .addClass(`${params.bulletActiveClass}-main`);
                bullets
                  .eq(bullets.length - params.dynamicMainBullets - 1)
                  .addClass(`${params.bulletActiveClass}-prev`);
              } else
                setSideBullets($firstDisplayedBullet, 'prev'),
                  setSideBullets($lastDisplayedBullet, 'next');
            else
              setSideBullets($firstDisplayedBullet, 'prev'),
                setSideBullets($lastDisplayedBullet, 'next');
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(
              bullets.length,
              params.dynamicMainBullets + 4,
            ),
            bulletsOffset =
              (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
              midIndex * bulletSize,
            offsetProp = rtl ? 'right' : 'left';
          bullets.css(
            swiper.isHorizontal() ? offsetProp : 'top',
            `${bulletsOffset}px`,
          );
        }
      }
      if (
        ('fraction' === params.type &&
          ($el
            .find(classes_to_selector_classesToSelector(params.currentClass))
            .text(params.formatFractionCurrent(current + 1)),
          $el
            .find(classes_to_selector_classesToSelector(params.totalClass))
            .text(params.formatFractionTotal(total))),
        'progressbar' === params.type)
      ) {
        let progressbarDirection;
        progressbarDirection = params.progressbarOpposite
          ? swiper.isHorizontal()
            ? 'vertical'
            : 'horizontal'
          : swiper.isHorizontal()
          ? 'horizontal'
          : 'vertical';
        const scale = (current + 1) / total;
        let scaleX = 1,
          scaleY = 1;
        'horizontal' === progressbarDirection
          ? (scaleX = scale)
          : (scaleY = scale),
          $el
            .find(
              classes_to_selector_classesToSelector(
                params.progressbarFillClass,
              ),
            )
            .transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`)
            .transition(swiper.params.speed);
      }
      'custom' === params.type && params.renderCustom
        ? ($el.html(params.renderCustom(swiper, current + 1, total)),
          emit('paginationRender', $el[0]))
        : emit('paginationUpdate', $el[0]),
        swiper.params.watchOverflow &&
          swiper.enabled &&
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.slides.length
            : swiper.slides.length,
        $el = swiper.pagination.$el;
      let paginationHTML = '';
      if ('bullets' === params.type) {
        let numberOfBullets = swiper.params.loop
          ? Math.ceil(
              (slidesLength - 2 * swiper.loopedSlides) /
                swiper.params.slidesPerGroup,
            )
          : swiper.snapGrid.length;
        swiper.params.freeMode &&
          swiper.params.freeMode.enabled &&
          !swiper.params.loop &&
          numberOfBullets > slidesLength &&
          (numberOfBullets = slidesLength);
        for (let i = 0; i < numberOfBullets; i += 1)
          params.renderBullet
            ? (paginationHTML += params.renderBullet.call(
                swiper,
                i,
                params.bulletClass,
              ))
            : (paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`);
        $el.html(paginationHTML),
          (swiper.pagination.bullets = $el.find(
            classes_to_selector_classesToSelector(params.bulletClass),
          ));
      }
      'fraction' === params.type &&
        ((paginationHTML = params.renderFraction
          ? params.renderFraction.call(
              swiper,
              params.currentClass,
              params.totalClass,
            )
          : `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`),
        $el.html(paginationHTML)),
        'progressbar' === params.type &&
          ((paginationHTML = params.renderProgressbar
            ? params.renderProgressbar.call(swiper, params.progressbarFillClass)
            : `<span class="${params.progressbarFillClass}"></span>`),
          $el.html(paginationHTML)),
        'custom' !== params.type &&
          emit('paginationRender', swiper.pagination.$el[0]);
    }
    function init() {
      swiper.params.pagination =
        create_element_if_not_defined_createElementIfNotDefined(
          swiper,
          swiper.originalParams.pagination,
          swiper.params.pagination,
          { el: 'swiper-pagination' },
        );
      const params = swiper.params.pagination;
      if (!params.el) return;
      let $el = dom(params.el);
      0 !== $el.length &&
        (swiper.params.uniqueNavElements &&
          'string' == typeof params.el &&
          $el.length > 1 &&
          (($el = swiper.$el.find(params.el)),
          $el.length > 1 &&
            ($el = $el.filter(
              (el) => dom(el).parents('.swiper')[0] === swiper.el,
            ))),
        'bullets' === params.type &&
          params.clickable &&
          $el.addClass(params.clickableClass),
        $el.addClass(params.modifierClass + params.type),
        $el.addClass(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass,
        ),
        'bullets' === params.type &&
          params.dynamicBullets &&
          ($el.addClass(`${params.modifierClass}${params.type}-dynamic`),
          (dynamicBulletIndex = 0),
          params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)),
        'progressbar' === params.type &&
          params.progressbarOpposite &&
          $el.addClass(params.progressbarOppositeClass),
        params.clickable &&
          $el.on(
            'click',
            classes_to_selector_classesToSelector(params.bulletClass),
            function (e) {
              e.preventDefault();
              let index = dom(this).index() * swiper.params.slidesPerGroup;
              swiper.params.loop && (index += swiper.loopedSlides),
                swiper.slideTo(index);
            },
          ),
        Object.assign(swiper.pagination, { $el: $el, el: $el[0] }),
        swiper.enabled || $el.addClass(params.lockClass));
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass),
        $el.removeClass(params.modifierClass + params.type),
        $el.removeClass(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass,
        ),
        swiper.pagination.bullets &&
          swiper.pagination.bullets.removeClass &&
          swiper.pagination.bullets.removeClass(params.bulletActiveClass),
        params.clickable &&
          $el.off(
            'click',
            classes_to_selector_classesToSelector(params.bulletClass),
          );
    }
    on('init', () => {
      init(), render(), update();
    }),
      on('activeIndexChange', () => {
        (swiper.params.loop || void 0 === swiper.snapIndex) && update();
      }),
      on('snapIndexChange', () => {
        swiper.params.loop || update();
      }),
      on('slidesLengthChange', () => {
        swiper.params.loop && (render(), update());
      }),
      on('snapGridLengthChange', () => {
        swiper.params.loop || (render(), update());
      }),
      on('destroy', () => {
        destroy();
      }),
      on('enable disable', () => {
        const { $el: $el } = swiper.pagination;
        $el &&
          $el[swiper.enabled ? 'removeClass' : 'addClass'](
            swiper.params.pagination.lockClass,
          );
      }),
      on('lock unlock', () => {
        update();
      }),
      on('click', (_s, e) => {
        const targetEl = e.target,
          { $el: $el } = swiper.pagination;
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          $el.length > 0 &&
          !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)
        ) {
          if (
            swiper.navigation &&
            ((swiper.navigation.nextEl &&
              targetEl === swiper.navigation.nextEl) ||
              (swiper.navigation.prevEl &&
                targetEl === swiper.navigation.prevEl))
          )
            return;
          const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
          emit(!0 === isHidden ? 'paginationShow' : 'paginationHide'),
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      }),
      Object.assign(swiper.pagination, {
        render: render,
        update: update,
        init: init,
        destroy: destroy,
      });
  }
  function Autoplay(_ref) {
    let timeout,
      { swiper: swiper, extendParams: extendParams, on: on, emit: emit } = _ref;
    function run() {
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay = swiper.params.autoplay.delay;
      $activeSlideEl.attr('data-swiper-autoplay') &&
        (delay =
          $activeSlideEl.attr('data-swiper-autoplay') ||
          swiper.params.autoplay.delay),
        clearTimeout(timeout),
        (timeout = utils_nextTick(() => {
          let autoplayResult;
          swiper.params.autoplay.reverseDirection
            ? swiper.params.loop
              ? (swiper.loopFix(),
                (autoplayResult = swiper.slidePrev(
                  swiper.params.speed,
                  !0,
                  !0,
                )),
                emit('autoplay'))
              : swiper.isBeginning
              ? swiper.params.autoplay.stopOnLastSlide
                ? stop()
                : ((autoplayResult = swiper.slideTo(
                    swiper.slides.length - 1,
                    swiper.params.speed,
                    !0,
                    !0,
                  )),
                  emit('autoplay'))
              : ((autoplayResult = swiper.slidePrev(
                  swiper.params.speed,
                  !0,
                  !0,
                )),
                emit('autoplay'))
            : swiper.params.loop
            ? (swiper.loopFix(),
              (autoplayResult = swiper.slideNext(swiper.params.speed, !0, !0)),
              emit('autoplay'))
            : swiper.isEnd
            ? swiper.params.autoplay.stopOnLastSlide
              ? stop()
              : ((autoplayResult = swiper.slideTo(
                  0,
                  swiper.params.speed,
                  !0,
                  !0,
                )),
                emit('autoplay'))
            : ((autoplayResult = swiper.slideNext(swiper.params.speed, !0, !0)),
              emit('autoplay')),
            ((swiper.params.cssMode && swiper.autoplay.running) ||
              !1 === autoplayResult) &&
              run();
        }, delay));
    }
    function start() {
      return (
        void 0 === timeout &&
        !swiper.autoplay.running &&
        ((swiper.autoplay.running = !0), emit('autoplayStart'), run(), !0)
      );
    }
    function stop() {
      return (
        !!swiper.autoplay.running &&
        void 0 !== timeout &&
        (timeout && (clearTimeout(timeout), (timeout = void 0)),
        (swiper.autoplay.running = !1),
        emit('autoplayStop'),
        !0)
      );
    }
    function pause(speed) {
      swiper.autoplay.running &&
        (swiper.autoplay.paused ||
          (timeout && clearTimeout(timeout),
          (swiper.autoplay.paused = !0),
          0 !== speed && swiper.params.autoplay.waitForTransition
            ? ['transitionend', 'webkitTransitionEnd'].forEach((event) => {
                swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
              })
            : ((swiper.autoplay.paused = !1), run())));
    }
    function onVisibilityChange() {
      const document = ssr_window_esm_getDocument();
      'hidden' === document.visibilityState &&
        swiper.autoplay.running &&
        pause(),
        'visible' === document.visibilityState &&
          swiper.autoplay.paused &&
          (run(), (swiper.autoplay.paused = !1));
    }
    function onTransitionEnd(e) {
      swiper &&
        !swiper.destroyed &&
        swiper.$wrapperEl &&
        e.target === swiper.$wrapperEl[0] &&
        (['transitionend', 'webkitTransitionEnd'].forEach((event) => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        }),
        (swiper.autoplay.paused = !1),
        swiper.autoplay.running ? run() : stop());
    }
    function onMouseEnter() {
      swiper.params.autoplay.disableOnInteraction
        ? stop()
        : (emit('autoplayPause'), pause()),
        ['transitionend', 'webkitTransitionEnd'].forEach((event) => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
      swiper.params.autoplay.disableOnInteraction ||
        ((swiper.autoplay.paused = !1), emit('autoplayResume'), run());
    }
    (swiper.autoplay = { running: !1, paused: !1 }),
      extendParams({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      on('init', () => {
        if (swiper.params.autoplay.enabled) {
          start();
          ssr_window_esm_getDocument().addEventListener(
            'visibilitychange',
            onVisibilityChange,
          ),
            swiper.params.autoplay.pauseOnMouseEnter &&
              (swiper.$el.on('mouseenter', onMouseEnter),
              swiper.$el.on('mouseleave', onMouseLeave));
        }
      }),
      on('beforeTransitionStart', (_s, speed, internal) => {
        swiper.autoplay.running &&
          (internal || !swiper.params.autoplay.disableOnInteraction
            ? swiper.autoplay.pause(speed)
            : stop());
      }),
      on('sliderFirstMove', () => {
        swiper.autoplay.running &&
          (swiper.params.autoplay.disableOnInteraction ? stop() : pause());
      }),
      on('touchEnd', () => {
        swiper.params.cssMode &&
          swiper.autoplay.paused &&
          !swiper.params.autoplay.disableOnInteraction &&
          run();
      }),
      on('destroy', () => {
        swiper.$el.off('mouseenter', onMouseEnter),
          swiper.$el.off('mouseleave', onMouseLeave),
          swiper.autoplay.running && stop();
        ssr_window_esm_getDocument().removeEventListener(
          'visibilitychange',
          onVisibilityChange,
        );
      }),
      Object.assign(swiper.autoplay, {
        pause: pause,
        run: run,
        start: start,
        stop: stop,
      });
  }
  function _typeof(obj) {
    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            }),
      _typeof(obj)
    );
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor))
      throw new TypeError('Cannot call a class as a function');
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      (descriptor.enumerable = descriptor.enumerable || !1),
        (descriptor.configurable = !0),
        'value' in descriptor && (descriptor.writable = !0),
        Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    return (
      protoProps && _defineProperties(Constructor.prototype, protoProps),
      staticProps && _defineProperties(Constructor, staticProps),
      Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
      Constructor
    );
  }
  function _inherits(subClass, superClass) {
    if ('function' != typeof superClass && null !== superClass)
      throw new TypeError('Super expression must either be null or a function');
    (subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(subClass, 'prototype', { writable: !1 }),
      superClass && _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function () {
      var result,
        Super = _getPrototypeOf(Derived);
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else result = Super.apply(this, arguments);
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && ('object' === _typeof(call) || 'function' == typeof call))
      return call;
    if (void 0 !== call)
      throw new TypeError(
        'Derived constructors may only return object or undefined',
      );
    return (function (self) {
      if (void 0 === self)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return self;
    })(self);
  }
  function _wrapNativeSuper(Class) {
    var _cache = 'function' == typeof Map ? new Map() : void 0;
    return (
      (_wrapNativeSuper = function (Class) {
        if (
          null === Class ||
          ((fn = Class),
          -1 === Function.toString.call(fn).indexOf('[native code]'))
        )
          return Class;
        var fn;
        if ('function' != typeof Class)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        if (void 0 !== _cache) {
          if (_cache.has(Class)) return _cache.get(Class);
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
          return _construct(
            Class,
            arguments,
            _getPrototypeOf(this).constructor,
          );
        }
        return (
          (Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          _setPrototypeOf(Wrapper, Class)
        );
      }),
      _wrapNativeSuper(Class)
    );
  }
  function _construct(Parent, args, Class) {
    return (
      (_construct = _isNativeReflectConstruct()
        ? Reflect.construct.bind()
        : function (Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var instance = new (Function.bind.apply(Parent, a))();
            return (
              Class && _setPrototypeOf(instance, Class.prototype), instance
            );
          }),
      _construct.apply(null, arguments)
    );
  }
  function _isNativeReflectConstruct() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function _setPrototypeOf(o, p) {
    return (
      (_setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (o, p) {
            return (o.__proto__ = p), o;
          }),
      _setPrototypeOf(o, p)
    );
  }
  function _getPrototypeOf(o) {
    return (
      (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          }),
      _getPrototypeOf(o)
    );
  }
  var Slideshow = (function (_HTMLElement) {
      _inherits(Slideshow, _HTMLElement);
      var _super = _createSuper(Slideshow);
      function Slideshow() {
        var _this2$querySelector,
          _this2$querySelector2,
          _this2$querySelector3,
          _this2;
        return (
          _classCallCheck(this, Slideshow),
          ((_this2 = _super.call(this)).autoSlides =
            null ===
              (_this2$querySelector = _this2.querySelector(
                '.as-auto-rotate-slides',
              )) || void 0 === _this2$querySelector
              ? void 0
              : _this2$querySelector.value),
          (_this2.mbAutoSlides =
            null ===
              (_this2$querySelector2 = _this2.querySelector(
                '.as-mobile-auto-rotate-slides',
              )) || void 0 === _this2$querySelector2
              ? void 0
              : _this2$querySelector2.value),
          (_this2.intervalTime =
            null ===
              (_this2$querySelector3 = _this2.querySelector(
                '.as-change-slides-every',
              )) || void 0 === _this2$querySelector3
              ? void 0
              : _this2$querySelector3.value),
          (_this2.swiperContainer = _this2.querySelector(
            '.as-slideshow-banner-swiper',
          )),
          (_this2.isOpenSwiper = !!_this2.swiperContainer),
          (_this2.swiperInstantiation = null),
          (_this2.PC_DEVICE = 'PC'),
          (_this2.MOB_DEVICE = 'mob'),
          (_this2.device = null),
          _this2.init(),
          _this2.addEventListener('click', function (e) {
            if (e.target.classList.contains('play-action')) {
              var video = _this2.getActiveVideo();
              e.target.classList.contains('play')
                ? (video.pause(), e.target.classList.remove('play'))
                : _this2.preparePlay(video, e.target),
                e.stopPropagation();
            }
          }),
          _this2
        );
      }
      return (
        _createClass(Slideshow, [
          {
            key: 'init',
            value: function () {
              var _this3 = this;
              this.changeViewport(),
                this.initSwiper(),
                this.initTextMarquee(),
                window.addEventListener('resize', function () {
                  _this3.changeViewport();
                });
            },
          },
          {
            key: 'initTextMarquee',
            value: function () {
              customElements.get('text-marquee') ||
                window.customElements.define('text-marquee', TextMarquee);
            },
          },
          {
            key: 'changeViewport',
            value: function () {
              var w = window.innerWidth;
              if (w <= 768 && this.device !== this.MOB_DEVICE) {
                if (
                  ((this.device = this.MOB_DEVICE), !this.swiperInstantiation)
                )
                  return;
                'true' === this.mbAutoSlides &&
                  this.swiperInstantiation.autoplay.start();
              } else if (w > 768 && this.device !== this.PC_DEVICE) {
                if (((this.device = this.PC_DEVICE), !this.swiperInstantiation))
                  return;
                'true' === this.autoSlides &&
                  this.swiperInstantiation.autoplay.start();
              }
            },
          },
          {
            key: 'initParameter',
            value: function () {
              var _this = this,
                options = {
                  modules: [Navigation, Pagination, Autoplay],
                  slidesPerView: 1,
                  spaceBetween: 0,
                  loop: !0,
                  pagination: { el: '.swiper-pagination', clickable: !0 },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                  on: {
                    slideChange: function (swiper) {
                      _this.pauseAllMedia();
                    },
                    beforeSlideChangeStart: function () {
                      if (_this.swiperInstantiation) {
                        var playHandler = _this.querySelector(
                          '.swiper-slide-active .play-action',
                        );
                        null == playHandler ||
                          playHandler.classList.remove('play');
                      }
                    },
                    slideChangeTransitionEnd: function (swiper) {
                      if (_this.swiperInstantiation) {
                        var video = _this.getActiveVideo();
                        if (video && video.autoplay) {
                          var playHandler = _this.querySelector(
                            '.swiper-slide-active .play-action',
                          );
                          if (playHandler) return;
                          _this.preparePlay(video, playHandler);
                        }
                      }
                    },
                  },
                };
              return (
                ('true' !== this.autoSlides && 'true' !== this.mbAutoSlides) ||
                  (options.autoplay = {
                    delay: 1e3 * this.intervalTime,
                    disableOnInteraction: !0,
                    pauseOnMouseEnter: !0,
                  }),
                options
              );
            },
          },
          {
            key: 'getActiveVideo',
            value: function () {
              var activeCSS = this.isOpenSwiper ? '.swiper-slide-active' : '';
              return this.device === this.PC_DEVICE
                ? this.querySelector(''.concat(activeCSS, ' .pc-video'))
                : this.querySelector(''.concat(activeCSS, '  .mob-video'));
            },
          },
          {
            key: 'videoAutoPlay',
            value: function (video, playHandler) {
              var _this$swiperInstantia;
              playHandler.classList.add('play'),
                null === (_this$swiperInstantia = this.swiperInstantiation) ||
                  void 0 === _this$swiperInstantia ||
                  _this$swiperInstantia.autoplay.stop(),
                video.loop ||
                  video.addEventListener(
                    'ended',
                    this.swiperAutoplay.bind(this, video, playHandler),
                  ),
                document.removeEventListener(
                  'touchstart',
                  this.preparePlay.bind(this, video, playHandler),
                  { passive: !0 },
                );
            },
          },
          {
            key: 'preparePlay',
            value: function (video, playHandler) {
              var _this4 = this;
              video.play &&
                video
                  .play()
                  .then(function (res) {
                    playHandler.classList.remove('d-none'),
                      _this4.videoAutoPlay(video, playHandler);
                  })
                  .catch(function (err) {
                    playHandler.classList.add('d-none'),
                      playHandler.classList.remove('play'),
                      _this4.manualPlay(video, playHandler);
                  });
            },
          },
          {
            key: 'manualPlay',
            value: function (video, playHandler) {
              document.addEventListener(
                'touchstart',
                this.preparePlay.bind(this, video, playHandler),
                { passive: !0 },
              );
            },
          },
          {
            key: 'swiperAutoplay',
            value: function (video, playHandler) {
              var _this$swiperInstantia2;
              (playHandler.classList.remove('play'),
              (this.device === this.PC_DEVICE && 'true' === this.autoSlides) ||
                (this.device === this.MOB_DEVICE &&
                  'true' === this.mbAutoSlides)) &&
                (null === (_this$swiperInstantia2 = this.swiperInstantiation) ||
                  void 0 === _this$swiperInstantia2 ||
                  _this$swiperInstantia2.autoplay.start());
              video.removeEventListener(
                'ended',
                this.swiperAutoplay.bind(this, video, playHandler),
              );
            },
          },
          {
            key: 'pauseAllMedia',
            value: function () {
              this.querySelectorAll('video').forEach(function (video) {
                video.pause(),
                  0 !== video.currentTime && (video.currentTime = 0);
              });
            },
          },
          {
            key: 'initSwiper',
            value: function () {
              var _this5 = this;
              this.isOpenSwiper &&
                (this.swiperInstantiation = new core(
                  this.swiperContainer,
                  this.initParameter(),
                ));
              var video = this.getActiveVideo();
              if (video) {
                var playHandler = this.querySelector('.play-action');
                this.isOpenSwiper ||
                  (video.addEventListener('playing', function () {
                    playHandler.classList.add('play');
                  }),
                  video.addEventListener('ended', function () {
                    playHandler.classList.remove('play');
                  }));
                var io = new IntersectionObserver(function (entires) {
                  entires.forEach(function (entry) {
                    video.autoplay && _this5.preparePlay(video, playHandler),
                      io.unobserve(video);
                  });
                });
                io.observe(video);
              }
            },
          },
        ]),
        Slideshow
      );
    })(_wrapNativeSuper(HTMLElement)),
    TextMarquee = (function (_HTMLElement2) {
      _inherits(TextMarquee, _HTMLElement2);
      var _super2 = _createSuper(TextMarquee);
      function TextMarquee() {
        var _this6$querySelector, _this6;
        return (
          _classCallCheck(this, TextMarquee),
          ((_this6 = _super2.call(this)).effectTime =
            (null ===
              (_this6$querySelector = _this6.querySelector(
                '.as-change-effect-gap',
              )) || void 0 === _this6$querySelector
              ? void 0
              : _this6$querySelector.value) || 1),
          (_this6.Marquee = Array.from(_this6.children)),
          _this6.Marquee.length <= 1
            ? _possibleConstructorReturn(_this6)
            : ((_this6.timer = null), _this6.init(), _this6)
        );
      }
      return (
        _createClass(TextMarquee, [
          {
            key: 'init',
            value: function () {
              var _this7 = this,
                index = 0,
                oldIndex = len - 1,
                len = this.Marquee.length;
              this.timer = setInterval(function () {
                (oldIndex = -1 === index ? len - 1 : index),
                  (index += 1),
                  (_this7.Marquee[index].style.transform =
                    'matrix(1, 0, 0, 1, 0, 1)'),
                  (_this7.Marquee[index].style.opacity = '1'),
                  (_this7.Marquee[oldIndex].style.transform =
                    'matrix(1, 0, 0, 1, 0, 91)'),
                  (_this7.Marquee[oldIndex].style.opacity = '0'),
                  index >= len - 1 && (index = -1);
              }, 1e3 * this.effectTime);
            },
          },
        ]),
        TextMarquee
      );
    })(_wrapNativeSuper(HTMLElement));
  customElements.get('slideshow-banner') ||
    window.customElements.define('slideshow-banner', Slideshow);
})();

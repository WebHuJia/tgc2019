webpackJsonp([8],{

/***/ "3guR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mockPartners = mockPartners;
exports.mockNewslistData = mockNewslistData;
exports.default = {
    navbar: {
        navs: [{
            title: "首页",
            key: "home",
            url: "/2019/index.html",
            mUrl: "/2019/m/index.html"
        }, {
            title: "正在直播",
            key: "living",
            // url: "/2019/living.html",
            mUrl: "/2019/m/living.html"
            // url: "javascript:alert('敬请期待')",
            // mUrl: "javascript:alert('敬请期待')",
        }, {
            title: "关于TGC",
            key: "about",
            url: "/2019/about.html",
            mUrl: "/2019/m/about.html"
        }, {
            title: "最新资讯",
            key: "news",
            url: "/2019/newslist.html",
            mUrl: "/2019/m/newslist.html"
        }, {
            title: "现场详情",
            key: "scene",
            // url: "/2019/scene.html",
            // mUrl: "/2019/m/scene.html"
            url: "javascript:alert('敬请期待')",
            mUrl: "javascript:alert('敬请期待')",
        }],
        logo: __webpack_require__("ZmHP"),
        // smoothScroll: true,
        // smoothScrollOffset: 30,
        offsetTop: 0
    },
    scene: {
        tabs: [{
            title: '场馆指引',
            key: 'venue',
            url: '#venue'
        },
        // {
        //     title: '活动日程',
        //     key: 'agenda',
        //     url: '#agenda',
        // },
        {
            title: '周边地图',
            key: 'maps',
            url: '#maps'
        }, {
            title: '帮助中心',
            key: 'helps',
            url: '#helps'
        }]
    },
    helps: {
        list: [{
            title: "TGC2019的活动时间/地点？",
            lines: ['<strong>活动时间：</strong>2019年1月17日至2019年1月20日', '<strong>活动地点：</strong>成都，新世纪环球中心<br/>成都市武侯区天府大道北段1700号']
        }, {
            title: "有关TGC2019的购票信息",
            lines: ['<strong>售票渠道：</strong>猫眼演出/猫眼APP', '<strong>售票时间：</strong>2019年1月9日至1月20日', '<strong>票价：</strong>单场门票18元（由于每天的门票分上、下午两场，请购买门票时注意场次，过期失效）']
        }, {
            title: "购买TGC2019门票可获得的权益？",
            lines: ['海洋公园内凭票入场，其余区域无需门票，门票当日单场有效。', '【上午场】10:00至14:30', '【下午场】15:00至20:00']
        }, {
            title: "官网购买的门票是否可退换？",
            lines: ['门票一经售出无法退换，请提前确认好行程及购买场次。如不确定，可活动当天至现场售票处购票。如遇人流高峰，需要等待排队入场。']
        }, {
            title: "购票后是否可获得发票？",
            lines: ['门票购买后可提供发票，请联系猫眼演出客服，客服热线：10105335。']
        }]
    },
    // 周边地图经纬度
    mapLatLng: {
        lat: 30.568871,
        lng: 104.065376
    },
    carouselNews: {
        list: [{
            title: "slide 1",
            img: "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg",
            url: "http://up.qq.com/webplat/info/news_version3/7694/34951/35283/35364/m20491/201804/712026.shtml"
        }, {
            title: "slide 2",
            img: "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg",
            url: "http://up.qq.com/webplat/info/news_version3/7694/34951/35283/35364/m20491/201804/712026.shtml"
        }, {
            title: "slide 3",
            img: "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg",
            url: "http://up.qq.com/webplat/info/news_version3/7694/34951/35283/35364/m20491/201804/712026.shtml"
        }, {
            title: "slide 4",
            img: "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg",
            url: "http://up.qq.com/webplat/info/news_version3/7694/34951/35283/35364/m20491/201804/712026.shtml"
        }]
    },
    gicpBizId: 148,
    // 新闻列表tab的v4配置
    newsTabList: {
        pc: [{
            title: "全部",
            // id: 8325,
            id: 3769,
            tag: 'iTarget'
        }],
        m: [{
            title: "全部",
            // id: 8329,
            id: 3770,
            tag: 'iTarget'
        }]
    },
    // 新闻轮播图的v4配置 
    newsCarousel: {
        pc: 8335,
        m: 8336
    },
    // 合作伙伴的v4配置
    partners: {
        pc: [{
            title: '指导单位',
            id: 8468
        }, {
            title: '主办方',
            id: 8398
        }, {
            title: '场地合作方',
            id: 8399
        }, {
            title: '参展品牌及业务',
            id: 8400,
            page: 1
        }, {
            title: '参展品牌及业务',
            id: 8400,
            page: 2
        }, {
            title: '合作伙伴',
            id: 8401
        }],
        m: [{
            title: '指导单位',
            id: 8469
        }, {
            title: '主办方',
            id: 8403
        }, {
            title: '场地合作方',
            id: 8404
        }, {
            title: '参展品牌及业务',
            id: 8405,
            page: 1
        }, {
            title: '参展品牌及业务',
            id: 8405,
            page: 2
        }, {
            title: '合作伙伴',
            id: 8406
        }]
    },
    cci: {
        pc: 8390,
        m: 8391
    },
    // 广告
    ads: {
        pc: 8337,
        m: 8338
    },
    living: {
        tabs: [{
            title: "1月17日",
            id: 8384
        }, {
            title: "1月18日",
            id: 8385
        }, {
            title: "1月19日",
            id: 8386
        }, {
            title: "1月20日",
            id: 8387
        }]
    },
    misc: {
        list: [["联系电话：+86 xxx-xxx-xxx", "商务合作：xxx@tencent.com", "公司地址：深圳市南山区xxxxxxx"], ["客服办公时间：周一至周日 9:00-21:00", "客服支持：xxx@tencent.com"]]
    },
    vid: {
        vid: "y0827w3qjnv"
    },
    lpQrcode: {
        img: __webpack_require__("cK//")
    }
};
function mockPartners() {
    var img = "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg";
    var imgs = [];
    for (var i = 0; i < 24; i++) {
        imgs.push(img);
    }

    return {
        imgs: imgs
    };
}

function mockNewslistData() {
    var tabs = ["全部", "赛事", "活动", "科技新游"];
    var item = {
        title: "光荣之巅-单排鸡王争霸赛报名开始！",
        abs: "内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要",
        img: "//game.gtimg.cn/images/game/2018/common/img/defaults/default-slide.jpg",
        url: "/webplat/info/news_version3/32644/33111/33214/33215/m19346/201803/698167.shtml",
        release: "03/08",
        tag: "hot"
    };

    var data = tabs.map(function (tab) {
        var title = tab;
        var list = [];
        for (var i = 0; i < 5; i++) {
            list.push(item);
        }

        return {
            title: title,
            list: list
        };
    });

    return {
        tabs: data
    };
}

/***/ }),

/***/ "4wc8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8YpU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("XkPa");

var _index = __webpack_require__("3guR");

var _index2 = _interopRequireDefault(_index);

var _v4DataService = __webpack_require__("lbly");

var _utils = __webpack_require__("fdFc");

var _index3 = __webpack_require__("Fln9");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("ZM+j");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// modules
var aPmMap = {
    5435: "am",
    5436: "pm"
};

init();

function init() {
    initTabs();
    (0, _utils.hideElsForEmbedingLittleProgram)();
}

function initTabs() {
    // 初始化新闻资讯列表
    (0, _v4DataService.getV4NewsTabsData)({
        bizId: _index2.default.gicpBizId,
        tabs: _index2.default.living.tabs,
        source: "web_m",
        pageSize: 100,
        type: "m",
        formateFn: formatAnchorInfo
    }).then(function (tabList) {
        classifyLivingListByPeriod(tabList);
        (0, _index4.default)(".row-living .mod-tabs-living", {
            data: {
                tabs: tabList
            }
        });

        _index2.default.navbar.cur = "living";
        (0, _index6.default)(".mod-navbar", {
            data: _index2.default.navbar
        });
    });
}

function formatAnchorInfo(_ref) {
    var item = _ref.item;

    return {
        title: item.sTitle,
        subTitle: item.sAuthor,
        period: aPmMap[item.sExt1],
        img: item.sIMG,
        url: item.sRedirectURL,
        platform: item.sDesc
    };
}

function classifyLivingListByPeriod(tabs) {
    tabs.map(function (tab) {
        var am = [];
        var pm = [];

        tab.list.map(function (item) {
            if (item.period === "am") {
                am.push(item);
            }
            if (item.period === "pm") {
                pm.push(item);
            }
        });

        // tab.am = mockData(am);
        // tab.pm = mockData(pm);
        tab.am = am;
        tab.pm = pm;
    });
}

function mockData(list) {
    var repeatItem = list[0];
    if (repeatItem) {
        for (var i = 0; i < 10; i++) {
            list.push(repeatItem);
        }
    }

    return list;
}

/***/ }),

/***/ "8idU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Usage: $(element).scrollToTop([position])

module.exports = function (Zepto) {
  ;(function ($) {
    // only allow one scroll to top operation to be in progress at a time,
    // which is probably what you want
    var scrollToTopInProgress = false;

    $.fn.scrollToTop = function (position) {
      var $this = this,
          targetY = position || 0,
          initialY = $this.scrollTop(),
          lastY = initialY,
          delta = targetY - initialY,

      // duration in ms, make it a bit shorter for short distances
      // this is not scientific and you might want to adjust this for
      // your preferences
      speed = Math.min(750, Math.min(1500, Math.abs(initialY - targetY))),

      // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
      start,
          t,
          y,

      // use requestAnimationFrame or polyfill
      frame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        setTimeout(callback, 15);
      },
          cancelScroll = function cancelScroll() {
        abort();
      };

      // abort if already in progress or nothing to scroll 
      if (scrollToTopInProgress) return;
      if (delta == 0) return;

      // quint ease-in-out smoothing, from
      // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
      function smooth(pos) {
        if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 5);
        return 0.5 * (Math.pow(pos - 2, 5) + 2);
      }

      function abort() {
        $this.off('touchstart', cancelScroll);
        scrollToTopInProgress = false;
      }

      // when there's a touch detected while scrolling is in progress, abort
      // the scrolling (emulates native scrolling behavior)
      $this.on('touchstart', cancelScroll);
      scrollToTopInProgress = true;

      // start rendering away! note the function given to frame
      // is named "render" so we can reference it again further down
      frame(function render(now) {
        if (!scrollToTopInProgress) return;
        if (!start) start = now;
        // calculate t, position of animation in [0..1]
        t = Math.min(1, Math.max((now - start) / speed, 0));
        // calculate the new scrollTop position (don't forget to smooth)
        y = Math.round(initialY + delta * smooth(t));
        // bracket scrollTop so we're never over-scrolling
        if (delta > 0 && y > targetY) y = targetY;
        if (delta < 0 && y < targetY) y = targetY;
        // only actually set scrollTop if there was a change fromt he last frame
        if (lastY != y) $this.scrollTop(y);
        lastY = y;
        // if we're not done yet, queue up an other frame to render,
        // or clean up
        if (y !== targetY) frame(render);else abort();
      });
    };
  })(Zepto);
};

/***/ }),

/***/ "Fln9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

__webpack_require__("4wc8");

var _swiper = __webpack_require__("gsqX");

var _swiper2 = _interopRequireDefault(_swiper);

__webpack_require__("v2ns");

var _index = __webpack_require__("m989");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(id, options) {
    var $wrapper = $("" + id);
    var data = options.data;

    var slideControllers = [];

    render(data);
    initSlides();
    bindEvent();

    function render(data) {
        var html = (0, _index2.default)(data);

        $wrapper.html(html);
    }

    function initSlides() {
        var slideContainers = $wrapper.find(".content-wrapper .tab-content-anchor-wrapper");
        slideContainers.forEach(function (container) {
            var $container = $(container);
            var controller = new _swiper2.default(container, {
                slidesPerView: 3,
                spaceBetween: 5
                // on: {
                //     transitionStart() {
                //         $wrapper
                //             .find(".tabs li")
                //             .eq(this.realIndex)
                //             .addClass("on")
                //             .siblings()
                //             .removeClass("on");
                //     }
                // }
            });
            slideControllers.push(controller);

            $container.closest('.tab-content-anchor-period-wrapper').on("tap", ".carousel-nav", function (ev) {
                var $el = $(ev.currentTarget);
                if ($el.hasClass('nav-prev')) {
                    controller.slidePrev();
                } else {
                    controller.slideNext();
                }
            });
        });
    }

    function onTouchTab(ev) {
        var $el = $(ev.currentTarget);
        var index = $el.index();

        $wrapper.find(".tabs li").eq(index).addClass("on").siblings().removeClass("on");

        $wrapper.find(".tab-content").eq(index).addClass("on").siblings().removeClass("on");

        getOnShowSlideControllersByIndex(index).map(function (controller) {
            return controller.update();
        });
    }

    function bindEvent() {
        $wrapper.on("tap", ".tabs li", onTouchTab);
    }

    function getOnShowSlideControllersByIndex(index) {
        var controllers = void 0;
        switch (index) {
            case 0:
                controllers = slideControllers.slice(0, 2);
                break;
            case 1:
                controllers = slideControllers.slice(2, 4);
                break;
            case 2:
                controllers = slideControllers.slice(4, 6);
                break;
            case 3:
                controllers = slideControllers.slice(6, 8);
                break;

            default:
                break;
        }

        return controllers;
    }
}

/***/ }),

/***/ "Oktl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X6PD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScriptFx;
/**
 * @file zepto的getScript polyfill
 *   zepto本身没有getScript方法，但使用v4接口都是script数据，用getScript方法便于获取数据
 */

function getScriptFx($) {
    if (!$.getScript || typeof $.getScript === "function") {
        $.getScript = function (src, func) {
            var script = document.createElement("script");
            script.async = "async";
            script.src = src;
            if (func) {
                script.onload = func;
            }
            document.getElementsByTagName("head")[0].appendChild(script);
        };
    }
}

/***/ }),

/***/ "XkPa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZM+j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector, options) {
    var $container = $("" + selector);
    var data = options.data;
    // 加载scrolltotop插件

    (0, _scrolltop2.default)($);

    render(data);
    fixBottom(handleOffsetBottom(data.offsetTop));
    if (data.smoothScroll) {
        bindSmoothScroll(data);
    }

    function handleOffsetBottom(offsetTop) {
        offsetTop = +offsetTop;
        offsetTop = Number.isNaN(offsetTop) ? 0 : offsetTop;

        return offsetTop;
    }

    function render(data) {
        var html = (0, _index2.default)(data);
        $container.html(html);
    }

    function fixBottom(offsetTop) {
        var $el = $container.find(".blocks-navbar-affix");
        var $affix = $container.find(".blocks-navbar-affix .affix");
        // 垫片dom，在affix元素fixed时占位
        var $shim = $container.find(".blocks-navbar-affix .shim");
        var winH = $(window).height();

        fixBottomInner();

        function fixBottomInner() {
            var scrollTop = getScroll(window, true) + winH;
            var elOffset = getOffset($el.get(0));

            if (elOffset.top - offsetTop >= scrollTop) {
                $affix.addClass("fixed").css("bottom", offsetTop).css("width", $el.get(0).offsetWidth);

                $shim.css("display", "");
                $shim.css("width", $el.get(0).clientWidth);
                $shim.css("height", $affix.get(0).clientHeight);
            } else {
                $affix.removeClass("fixed").css("width", "");

                $shim.css("display", "none");
            }
        }

        $(window).on("scroll", function (ev) {
            fixBottomInner();
        });
    }

    function getScroll(target, top) {
        var prop = top ? "pageYOffset" : "pageXOffset";
        var method = top ? "scrollTop" : "scrollLeft";
        var ret = target[prop];
        if (typeof ret !== "number") {
            ret = window.document.documentElement[method];
        }
        return ret;
    }

    function getOffset(element) {
        var rect = element.getBoundingClientRect();
        var scrollTop = getScroll(window, true);
        var scrollLeft = getScroll(window);
        var docEl = window.document.body;
        var clientTop = docEl.clientTop || 0;
        var clientLeft = docEl.clientLeft || 0;
        return {
            top: rect.top + scrollTop - clientTop,
            left: rect.left + scrollLeft - clientLeft
        };
    }

    function bindSmoothScroll(data) {
        var smoothScrollOffset = data.smoothScrollOffset || 0;
        $container.on("click", ".affix ul li", function (ev) {
            var $el = $(ev.currentTarget);
            var anchor = $el.attr("data-anchor");
            var $anchor = $(anchor);

            if (!$anchor.length) {
                throw new Error("导航对应的锚点dom不存在");
            }
            var scrollTop = getScroll(window, true);
            var top = $anchor.get(0).getBoundingClientRect().top + scrollTop - smoothScrollOffset;
            $(window).scrollToTop(top);
        });
    }
};

__webpack_require__("Oktl");

var _index = __webpack_require__("vWas");

var _index2 = _interopRequireDefault(_index);

var _scrolltop = __webpack_require__("8idU");

var _scrolltop2 = _interopRequireDefault(_scrolltop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "ZmHP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "//game.gtimg.cn/images/game/act/a20181206tgc/img/logo.23b8028.jpg";

/***/ }),

/***/ "cK//":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "//game.gtimg.cn/images/game/act/a20181206tgc/img/qr-lg.0bf507d.jpg";

/***/ }),

/***/ "dk2q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = promisePolyfill;
function promisePolyfill() {

  if (window.Promise) {
    return;
  }

  /**
   * @this {Promise}
   */
  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        return constructor.reject(reason);
      });
    });
  }

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  /**
   * @constructor
   * @param {Function} fn
   */
  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */
    this._state = 0;
    /** @type {!boolean} */
    this._handled = false;
    /** @type {Promise|undefined} */
    this._value = undefined;
    /** @type {!Array<!Function>} */
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  /**
   * @constructor
   */
  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.prototype['finally'] = finallyConstructor;

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /** @suppress {undefinedVars} */
  var globalNS = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  }();

  if (!('Promise' in globalNS)) {
    globalNS['Promise'] = Promise;
  } else if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("162o").setImmediate, __webpack_require__("DuR2")))

/***/ }),

/***/ "fdFc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleResponse = handleResponse;
exports.formatV4NewsData = formatV4NewsData;
exports.getNewsDetailUrl = getNewsDetailUrl;
exports.formatV4RedirectData = formatV4RedirectData;
exports.extractV4CoverImg = extractV4CoverImg;
exports.getRandomScriptObjName = getRandomScriptObjName;
exports.findDomByClass = findDomByClass;
exports.hideElsForEmbedingLittleProgram = hideElsForEmbedingLittleProgram;
exports.getUrlParameter = getUrlParameter;
exports.showMask = showMask;
exports.hideMask = hideMask;
exports.isInMiniProgram = isInMiniProgram;
exports.makePcFrameworkCenter = makePcFrameworkCenter;

var _lodash = __webpack_require__("y3TV");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 浮层遮罩的class，需要放在.wrapper下
var maskClass = "global-mask";

/**
 * 处理v4返回的数据格式
 * @param {Object} res
 * @param {string} type 数据类型，资讯列表和详情的数据格式略有不同
 */
function handleResponse(res) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "list";

    if (res.status !== 0) {
        return {
            failed: true,
            msg: res.msg
        };
    }

    var ret = void 0;
    switch (type) {
        case "list":
            ret = res.msg.result;
            break;
        case "detail":
            ret = res.msg;
            break;
    }

    return ret;
}

/**
 * 把新闻列表的v4的属性转成组件通用的属性
 * @param {Object} item
 * @param {string} type pc or m
 * @return {Object}
 */
function formatV4NewsData(_ref) {
    var item = _ref.item,
        type = _ref.type;

    return {
        id: item.iNewsId,
        title: item.sTitle,
        url: item.sUrl || getNewsDetailUrl({ id: item.iNewsId, type: type }),
        img: item.sIMG,
        time: item.sIdxTime.split(" ")[0]
    };
}

function getNewsDetailUrl(_ref2) {
    var id = _ref2.id,
        type = _ref2.type;

    return "/2019" + (type === "pc" ? "" : "/m") + "/newsdetail.html?newsid=" + id;
}

/**
 * 把跳转类（轮播图，没有详情页，只需要跳转链接）的v4属性转换成通用属性
 * @param {Object} item
 * @return {Object}
 */
function formatV4RedirectData(item) {
    return {
        title: item.sTitle,
        url: item.sRedirectURL,
        img: item.sIMG
    };
}

/**
 * 从v4数据的sCoverMap字段中提取第一张图片的url
 * @param {string} coverMap
 * @return {string}
 */
function extractV4CoverImg(coverMap) {
    var o = JSON.parse(coverMap);
    return (0, _lodash2.default)(o, "One.Url");
}

/**
 * 随机变量名
 */
function getRandomScriptObjName() {
    return "NewsObj" + Date.now() + Math.round(Math.random() * 1000);
}

/**
 * 查找一个dom，如果不存在则创建一个
 * @param {string} selector 需要查找的dom的选择器
 * @param {string|Function?} html dom的html结构，如果dom不存在则需要用它创建dom
 * @param {string?} appendClass 该dom的上层dom的选择器，如果dom不存在则append到它里面
 *
 * @return {DOM}
 */
function findDomByClass(_ref3) {
    var selector = _ref3.selector,
        html = _ref3.html,
        appendClass = _ref3.appendClass;

    var $dom = $(selector);
    if (!$dom.length) {
        if (!html) {
            return null;
        }

        if (typeof html === "function") {
            $dom = $(html());
        } else {
            $dom = $(html);
        }
        $(appendClass).append($dom);
    }

    return $dom;
}

/**
 * 在小程序内嵌官网页面时，根据query标识决定隐藏一些元素
 */
function hideElsForEmbedingLittleProgram() {
    return isInMiniProgram().then(function (ret) {
        if (ret) {
            $(".btn-ticket-entrance").hide();
            $(".mod-navbar").hide();
            $(".blocks-lp-qrcode").hide();
            // logo墙所有的链接不跳转
            var $p = $(".blocks-partners");
            if ($p.length) {
                $p.find(".list a").attr("href", "javascript:;");
            }
            // 所有文创的
            var $gg = $(".blocks-carousel-gg");
            if ($gg.length) {
                $gg.find('.swiper-slide a').attr("href", "javascript:;");
            }
            if (location.href.indexOf("/scene.html") > -1) {
                $(".mod-kv").hide();
                $(".wrapper").css("background", "#fff");
                setTimeout(function () {
                    $(".blocks-tabs-scene .tabs").hide();
                }, 300);
            }
        }
    }).catch(function (err) {
        console.log(err);
    });
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showMask() {
    var $mask = $(".wrapper ." + maskClass);
    $mask.show();
}

function hideMask() {
    $(".wrapper ." + maskClass).hide();
}

function isInMiniProgram() {
    return new Promise(function (resolve) {
        if (!wx || !wx.miniProgram) {
            return Promise.resolve(false);
        }

        wx.miniProgram.getEnv(function (res) {
            console.log(res.miniprogram); // true
            resolve(res.miniprogram);
        });
    });
}

// 让pc页面的主体居中显示，如果被遮挡的话
function makePcFrameworkCenter() {
    var winW = $(window).width();
    var $brand = $('.row-brand .mod-brand-video');
    var brandW = $brand.width();
    var $body = $('.body-wrapper');
    var bodyW = $body.width();

    if (brandW > winW) {
        $brand.css('left', -(brandW - winW) / 2);
    }
    if (bodyW > winW) {
        $body.css('left', -(bodyW - winW) / 2);
    }
}

/***/ }),

/***/ "lbly":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getV4NewsTabsData = getV4NewsTabsData;
exports.getV4TagNewsData = getV4TagNewsData;
exports.getNewsCarouselData = getNewsCarouselData;
exports.getPartnersData = getPartnersData;
exports.getCCIData = getCCIData;
exports.getAdsData = getAdsData;
exports.getMapData = getMapData;

var _utils = __webpack_require__("fdFc");

var _getScriptFx = __webpack_require__("X6PD");

var _getScriptFx2 = _interopRequireDefault(_getScriptFx);

var _index = __webpack_require__("3guR");

var _index2 = _interopRequireDefault(_index);

var _promisePolyfill = __webpack_require__("dk2q");

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _promisePolyfill2.default)();

(0, _getScriptFx2.default)($);

var v4ApiPrefix = "//apps.game.qq.com/wmp/v3.1/";
var mapZlkUrl = "//grsm.qq.com/zlkdatasys/zlkdatasys/data_zlk_tgc2018cgzydt.json";

function getV4TagNewsApiUrl(_ref) {
    var bizId = _ref.bizId,
        id = _ref.id,
        source = _ref.source,
        objName = _ref.objName;

    return v4ApiPrefix + "?p0=" + bizId + "&p1=searchNewsKeywordsList&order=sIdxTime&r0=script&r1=" + objName + "&type=iTag&id=" + id + "&source=" + source;
}
/**
 * 用Gicp数据插件请求资讯tabs的数据
 * @param {Object} params
 *
 * @return {Promise}
 */
function getV4NewsTabsData(_ref2) {
    var bizId = _ref2.bizId,
        tabs = _ref2.tabs,
        source = _ref2.source,
        pageSize = _ref2.pageSize,
        type = _ref2.type,
        tag = _ref2.tag,
        formateFn = _ref2.formateFn;

    var promises = tabs.map(function (item, index) {
        return new Promise(function (resolve, reject) {
            var opt = {
                gameID: bizId, // 不同游戏不一样，需要咨询内部重构
                type: item.tag ? item.tag : "iTag", // 查询类型（一级分类：iType，二级分类：iSubType，关键字：iKeyword，推荐位：iTarget;标签：iTag；不传该参数时，查询全部分类的内容，但最多只返回240条内容）
                id: item.id, //类型id，可多个，英文逗号分隔，在gicp建完频道就能看到
                newsType: "news", //news | video 图文新闻或者视频新闻
                pure: true,
                source: source, //数据上报用的，表明本页面用于pc或者移动；在gicp建，常见的移动官网是web_m ，PC官网是 web_pc
                detailURL: "/2019" + (type === "pc" ? "" : "/m") + "/newsdetail.html", // 新闻的详情页，会在后面加上?newsid=XXX
                callback: function callback(res) {
                    var ret = (0, _utils.handleResponse)(res);

                    if (ret.failed) {
                        console.log("\u8BF7\u6C42\u6807\u7B7Eid: " + item.id + "\u5931\u8D25");
                        resolve({
                            title: item.title,
                            list: []
                        });
                        // reject({
                        //     msg: ret.msg,
                        //     id: item.id
                        // });
                    } else {
                        // 格式化每条新闻的字段
                        var list = ret.map(function (item) {
                            if (formateFn && typeof formateFn === 'function') {
                                return formateFn.call(null, { item: item, type: type });
                            }
                            return (0, _utils.formatV4NewsData)({ item: item, type: type });
                        });

                        resolve({
                            title: item.title,
                            list: list
                        });
                    }
                }
            };
            if (pageSize) {
                opt.pageSize = pageSize; // 每一页文章条数
            }
            if (item.page) {
                opt.page = item.page;
            }

            fillNews.list(opt);
        });
    });

    return Promise.all(promises);
}

/**
 * 获取v4标签新闻类数据
 * @param {Object}
 */
function getV4TagNewsData(_ref3) {
    var bizId = _ref3.bizId,
        source = _ref3.source,
        id = _ref3.id;

    return new Promise(function (resolve, reject) {
        var objName = (0, _utils.getRandomScriptObjName)();
        var url = getV4TagNewsApiUrl({
            bizId: bizId,
            id: id,
            source: source,
            objName: objName
        });
        $.getScript(url, function () {
            var res = window[objName];
            if (!res) {
                return reject(new Error("\u8BF7\u6C42" + url + "\u5931\u8D25"));
            }

            return resolve(res);
        });
    });
}

/**
 * 取新闻轮播图的数据
 * @param {string} type
 */
function getNewsCarouselData(type) {
    return getV4TagNewsData({
        bizId: _index2.default.gicpBizId,
        source: type === "pc" ? "web_pc" : "web_m",
        id: _index2.default.newsCarousel[type]
    }).then(function (res) {
        var ret = (0, _utils.handleResponse)(res);
        if (ret.failed) {
            return Promise.reject(new Error("\u8BF7\u6C42\u65B0\u95FB\u8F6E\u64AD\u56FE\u6570\u636E\u5931\u8D25, msg: " + ret.msg));
        } else {
            var list = ret.map(_utils.formatV4RedirectData);
            return Promise.resolve(list);
        }
    });
}

/**
 * 取合作伙伴数据
 * @param {string} type 
 */
function getPartnersData(type) {
    return getV4NewsTabsData({
        bizId: _index2.default.gicpBizId,
        tabs: _index2.default.partners[type],
        source: type === "pc" ? "web_pc" : "web_m",
        pageSize: 100,
        type: type,
        formateFn: function formateFn(_ref4) {
            var item = _ref4.item;

            return (0, _utils.formatV4RedirectData)(item);
        }
    }).then(function (list) {
        var displayLogo1 = list[3];
        var displayLogo2 = list[4];
        if (displayLogo1.title === displayLogo2.title) {
            var merge = displayLogo1.list.concat(displayLogo2.list);
            displayLogo1.list = merge;
            list.splice(4, 1);
        }
        return list;
    });
}

/**
 * 获取四大文创数据
 * @param {string} type pc or m
 */
function getCCIData(type) {
    return getV4TagNewsData({
        bizId: _index2.default.gicpBizId,
        source: type === "pc" ? "web_pc" : "web_m",
        id: _index2.default.cci[type]
    }).then(function (res) {
        var ret = (0, _utils.handleResponse)(res);
        if (ret.failed) {
            return Promise.reject(new Error("\u8BF7\u6C42\u56DB\u5927\u6587\u521B\u6570\u636E\u5931\u8D25, msg: " + ret.msg));
        } else {
            var list = ret.map(_utils.formatV4RedirectData);
            return Promise.resolve(list);
        }
    });
}

/**
 * 获获取广告位数据
 * @param {string} type pc or m
 */
function getAdsData(type) {
    return getV4TagNewsData({
        bizId: _index2.default.gicpBizId,
        source: type === "pc" ? "web_pc" : "web_m",
        id: _index2.default.ads[type]
    }).then(function (res) {
        var ret = (0, _utils.handleResponse)(res);
        if (ret.failed) {
            return Promise.reject(new Error("\u8BF7\u6C42\u5E7F\u544A\u4F4D\u6570\u636E\u5931\u8D25, msg: " + ret.msg));
        } else {
            var list = ret.map(_utils.formatV4RedirectData);
            return Promise.resolve(list);
        }
    });
}

/**
 * 从资料库获取map相关的数据
 */
function getMapData() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: mapZlkUrl,
            dataType: 'jsonp',
            jsonpCallback: 'mapCallback',
            success: function success(data) {
                resolve(data);
            },
            error: function error(err) {
                reject(err);
            }
        });
    });
}

/***/ }),

/***/ "m989":
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__("+ObC");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', header = $data.header, $escape = $imports.$escape, $each = $imports.$each, tabs = $data.tabs, tab = $data.tab, index = $data.index, item = $data.item, i = $data.i;
    $$out += '<div class="blocks-tabs-living">\r\n    ';
    if (header) {
        $$out += '\r\n    <div class="header">\r\n        <h1 class="title">';
        $$out += $escape(header);
        $$out += '</h1>\r\n    </div>\r\n    ';
    }
    $$out += '\r\n    <ul class="tabs">\r\n        ';
    $each(tabs, function (tab, index) {
        $$out += '\r\n        <li ';
        if (index == 0) {
            $$out += 'class="on"';
        }
        $$out += '>';
        $$out += $escape(tab.title);
        $$out += '</li>\r\n        ';
    });
    $$out += '\r\n    </ul>\r\n    <div class="content-wrapper">\r\n        ';
    $each(tabs, function (tab, index) {
        $$out += '\r\n            <div class="tab-content ';
        if (index == 0) {
            $$out += 'on';
        }
        $$out += '">\r\n                <div class="tab-content-anchor-am-wrapper tab-content-anchor-period-wrapper">\r\n                    <div class="header-am header-period"></div>\r\n                    <div class="carousel-nav nav-prev"></div>\r\n                    <div class="tab-content-anchor-wrapper">\r\n                        <ul class="tab-content-anchor-list swiper-wrapper">\r\n                        ';
        $each(tab.am, function (item, i) {
            $$out += '\r\n                            <li class="swiper-slide">\r\n                                <a class="content-item" href="';
            $$out += $escape(item.url);
            $$out += '">\r\n                                    <img src="';
            $$out += $escape(item.img);
            $$out += '" alt="">\r\n                                    <p class="title">';
            $$out += $escape(item.title);
            $$out += '</p>\r\n                                    <i class="line"></i>\r\n                                    <p class="sub-title">';
            $$out += $escape(item.subTitle);
            $$out += '</p>\r\n                                    <p class="platform">';
            $$out += $escape(item.platform);
            $$out += '</p>\r\n                                </a>  \r\n                            </li>\r\n                        ';
        });
        $$out += '\r\n                        </ul>\r\n                    </div>\r\n                    <div class="carousel-nav nav-next"></div>\r\n                </div>\r\n                <div class="tab-content-anchor-pm-wrapper tab-content-anchor-period-wrapper">\r\n                    <div class="header-pm header-period"></div>\r\n                    <div class="carousel-nav nav-prev"></div>\r\n                    <div class="tab-content-anchor-wrapper">\r\n                        <ul class="tab-content-anchor-list swiper-wrapper">\r\n                        ';
        $each(tab.pm, function (item, i) {
            $$out += '\r\n                            <li class="swiper-slide">\r\n                                <a class="content-item" href="';
            $$out += $escape(item.url);
            $$out += '">\r\n                                    <img src="';
            $$out += $escape(item.img);
            $$out += '" alt="">\r\n                                    <p class="title">';
            $$out += $escape(item.title);
            $$out += '</p>\r\n                                    <i class="line"></i>\r\n                                    <p class="sub-title">';
            $$out += $escape(item.subTitle);
            $$out += '</p>\r\n                                    <p class="platform">';
            $$out += $escape(item.platform);
            $$out += '</p>\r\n                                </a>  \r\n                            </li>\r\n                        ';
        });
        $$out += '\r\n                        </ul>\r\n                    </div>\r\n                    <div class="carousel-nav nav-next"></div>\r\n                </div>\r\n            </div>\r\n        ';
    });
    $$out += '\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),

/***/ "v2ns":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vWas":
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__("+ObC");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, navs = $data.navs, nav = $data.nav, index = $data.index, $escape = $imports.$escape, cur = $data.cur, smoothScroll = $data.smoothScroll;
    $$out += '<div class="blocks-navbar-affix">\r\n    <div class="affix">\r\n        <ul>\r\n            ';
    $each(navs, function (nav, index) {
        $$out += '\r\n            <li>\r\n                <a class="icon-';
        $$out += $escape(nav.key);
        $$out += ' ';
        if (cur == nav.key) {
            $$out += 'on';
        }
        $$out += '" href="';
        if (smoothScroll) {
            $$out += 'javascript:;';
        } else {
            $$out += $escape(nav.mUrl);
        }
        $$out += '" onclick="PTTSendClick(\'nav\',\'';
        $$out += $escape(nav.key);
        $$out += '\',\'';
        $$out += $escape(nav.title);
        $$out += '\');">';
        $$out += $escape(nav.title);
        $$out += '</a>\r\n            </li>\r\n            ';
    });
    $$out += '\r\n        </ul>\r\n    </div>\r\n    <div class="shim"></div>\r\n</div>';
    return $$out;
};

/***/ })

},["8YpU"]);
webpackJsonp([13],{

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
            title: "CJ2019",
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

/***/ "Oktl":
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

/***/ "h2vw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hjVx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("h2vw");

var _index = __webpack_require__("3guR");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("ZM+j");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

init();

function init() {
    _index2.default.navbar.cur = "about";
    (0, _index4.default)(".mod-navbar", {
        data: _index2.default.navbar
    });
}

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

},["hjVx"]);
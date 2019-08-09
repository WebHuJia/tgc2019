webpackJsonp([7],{

/***/ "+sWt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

__webpack_require__("1mBC");

var _swiper = __webpack_require__("gsqX");

var _swiper2 = _interopRequireDefault(_swiper);

__webpack_require__("v2ns");

var _index = __webpack_require__("9Ujw");

var _index2 = _interopRequireDefault(_index);

var _list = __webpack_require__("Ug3a");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import getPageMock from './data/getPageMock';

function render(id, options) {
    var $wrapper = $("" + id);
    var data = options.data,
        hasPagination = options.hasPagination;

    var slideController = void 0;

    // render(data);
    // slideController = initSlides();
    bindEvent();

    function render(data) {
        var html = (0, _index2.default)(data);

        $wrapper.html(html);
    }

    function initSlides() {
        var controller = new _swiper2.default(id + " .swiper-container", {
            on: {
                transitionStart: function transitionStart() {
                    $wrapper.find(".tabs li").eq(this.realIndex).addClass("on").siblings().removeClass("on");
                }
            }
        });

        $wrapper.on("tap", ".tabs li", onTouchTab);

        return controller;
    }

    function onTouchTab(ev) {
        var $el = $(ev.currentTarget);
        var index = $el.index();

        slideController.slideTo(index);
    }

    function bindEvent() {
        if (hasPagination) {
            $wrapper.on("touchend", ".tab-pagination .pagination-btn", paginate);
        }
    }
}

/***/ }),

/***/ "1mBC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ "9Ujw":
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__("+ObC");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', header = $data.header, $escape = $imports.$escape, $each = $imports.$each, tabs = $data.tabs, tab = $data.tab, index = $data.index, item = $data.item, i = $data.i;
    $$out += '<div class="blocks-tabs-news-list">\r\n    ';
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
    $$out += '\r\n    </ul>\r\n    <div class="swiper-container">\r\n        <div class="swiper-wrapper">\r\n            ';
    $each(tabs, function (tab, index) {
        $$out += '\r\n                <ul class="swiper-slide tab-content">\r\n                    ';
        $each(tab.list, function (item, i) {
            $$out += '\r\n                    <li class="';
            if (item.tag) {
                $$out += $escape(item.tag);
            }
            $$out += '">\r\n                        <div class="left-area">\r\n                            <strong>';
            $$out += $escape(tab.title.slice(0, 2));
            $$out += '</strong>\r\n                        </div>\r\n                        <div class="right-area">\r\n                            <a href="';
            $$out += $escape(item.url);
            $$out += '" target="_blank">\r\n                                <h2 class="title">';
            $$out += $escape(item.title);
            $$out += '</h2>\r\n                                <p class="time">';
            $$out += $escape(item.release);
            $$out += '</p>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    ';
        });
        $$out += '\r\n                    ';
        if (tab.moreLink) {
            $$out += '\r\n                        <a class="more-link" target="_blank" href="';
            $$out += $escape(tab.moreLink);
            $$out += '">查看更多</a>\r\n                    ';
        }
        $$out += '\r\n                </ul>\r\n            ';
    });
    $$out += '\r\n        </div>\r\n        <!-- <div class="swiper-pagination"></div>\r\n        <div class="swiper-button-prev"></div>\r\n        <div class="swiper-button-next"></div> -->\r\n    </div>\r\n    <div class="pages">\r\n        <div class="btn-group">\r\n            <a href="javascript:;" class="btn-pagination page-prev">上一页</a>\r\n            <a href="javascript:;" class="btn-pagination page-next">下一页</a>\r\n        </div>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),

/***/ "Oktl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TBuF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector, options) {
    var $container = $(selector);
    var data = options.data;


    init();

    function init() {
        render(data);
    }

    function render(data) {
        var html = (0, _index2.default)(data);
        $container.html(html);
    }
};

__webpack_require__("iFZ+");

var _index = __webpack_require__("f5+t");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "Ug3a":
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__("+ObC");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, list = $data.list, item = $data.item, i = $data.i, $escape = $imports.$escape, title = $data.title, prev = $data.prev, cur = $data.cur, next = $data.next;
    $each(list, function (item, i) {
        $$out += '\r\n<li class="';
        if (item.tag) {
            $$out += $escape(item.tag);
        }
        $$out += '">\r\n    <strong>';
        $$out += $escape(title);
        $$out += '</strong>\r\n    <span>\r\n        <a href="';
        $$out += $escape(item.url);
        $$out += '" target="_blank">';
        $$out += $escape(item.title);
        $$out += '</a>\r\n    </span>\r\n    <em>';
        $$out += $escape(item.release);
        $$out += '</em>\r\n</li>\r\n';
    });
    $$out += '\r\n<div class="tab-pagination">\r\n    ';
    if (prev) {
        $$out += '\r\n    <div class="pagination-btn pagination-prev">上一页</div>\r\n    ';
    }
    $$out += '\r\n    <div class="pagination-pageno">';
    $$out += $escape(cur + 1);
    $$out += '</div>\r\n    ';
    if (next) {
        $$out += '\r\n    <div class="pagination-btn pagination-next">下一页</div>\r\n    ';
    }
    $$out += '\r\n</div> ';
    return $$out;
};

/***/ }),

/***/ "Wehp":
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

/***/ "cUa9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Wehp");

var _utils = __webpack_require__("fdFc");

var _index = __webpack_require__("3guR");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("+sWt");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("ZM+j");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("TBuF");

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

init();
// modules


function init() {
    (0, _index4.default)(".row-news .mod-tabs-news", {
        data: {}
    });

    (0, _index8.default)(".mod-qrcode", {
        data: _index2.default.lpQrcode
    });

    (0, _utils.hideElsForEmbedingLittleProgram)();
    fillNewsData().then(function () {
        _index2.default.navbar.cur = "news";
        (0, _index6.default)(".mod-navbar", {
            data: _index2.default.navbar
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function fillNewsData() {
    var promises = _index2.default.newsTabList.m.map(function (item, index) {
        return new Promise(function (resolve) {
            var opt = {
                gameID: _index2.default.gicpBizId, // 不同游戏不一样，需要咨询内部重构
                type: item.tag ? item.tag : "iTag", // 查询类型（一级分类：iType，二级分类：iSubType，关键字：iKeyword，推荐位：iTarget;标签：iTag；不传该参数时，查询全部分类的内容，但最多只返回240条内容）
                id: item.id, //类型id，可多个，英文逗号分隔，在gicp建完频道就能看到
                newsType: "news", //news | video 图文新闻或者视频新闻
                pager: {
                    wrap: ".mod-tabs-news .tab-content:nth-child(" + (index + 1) + ") .pager",
                    type: "laypage", // laypage | click | scroll 默认是laypage分页 | 点击加载更多 | 滚动加载更多
                    // scrollDistance:10, // type为scroll时候，wrap元素的顶部距离屏幕底部的触发距离,默认为0
                    // scrollContainer:window, // type为scroll时候，检测哪个元素滚动，默认是window
                    // 以下的选项都只用于laypage分页
                    groups: 0 // 连续分页数量，0表示不显示
                    // skip:true, // 开启到第X页功能
                },
                pageSize: 5, // 每一页文章条数
                // pageSize: 5, // 每一页文章条数
                // noFadeIn:true, // 不使用淡入动画，不填写这一项则默认有动画
                source: "web_m", //数据上报用的，表明本页面用于pc或者移动；在gicp建，常见的移动官网是web_m ，PC官网是 web_pc
                detailURL: "/2019/m/newsdetail.html", // 新闻的详情页，会在后面加上?newsid=XXX
                tpl: "<li> <div class=\"left-area\"> <strong>" + item.title.slice(0, 2) + "</strong> </div> <div class=\"right-area\"> <a href=\"{url}\" target=\"_blank\"> <h2 class=\"title\">{sTitle}</h2> <p class=\"time\">{sIdxTime}</p> </a> </div> </li>", // 模板字符串。新闻id{iNewsId} 标题{sTitle} 摘要{sDesc} 发布时间{sIdxTime} 作者{sAuthor} 详情地址{url} 封面图1{sCoverMap.One} 封面图2{sCoverMap.Two} 封面图3{sCoverMap.Three} 视频在gicp系统的id，不是vid{iVideoId}
                wrap: ".mod-tabs-news .tab-content:nth-child(" + (index + 1) + ") .tab-content-inner", //填充进去的容器
                callback: function callback(result) {
                    // 填充完的回调
                    console.log(result);
                    resolve();
                }
            };
            fillNews.list(opt);
        });
    });

    return Promise.all(promises);
}

/***/ }),

/***/ "f5+t":
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__("+ObC");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, img = $data.img;
    $$out += '<div class="blocks-lp-qrcode">\r\n    <img src="';
    $$out += $escape(img);
    $$out += '" alt="">\r\n    <div class="text">\r\n        <p>TGC小程序</p>\r\n        <p>参与互动</p>\r\n    </div>\r\n</div>';
    return $$out;
};

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

/***/ "iFZ+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

},["cUa9"]);
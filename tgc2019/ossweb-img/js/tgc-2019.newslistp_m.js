webpackJsonp([12],{

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
            title: "首页",
            key: "home",
            url: "/2019/index.html",
            mUrl: "/2019/m/index.html"
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
        }, {
            title: "正在直播",
            key: "living",
            // url: "/2019/living.html",
            // mUrl: "/2019/m/living.html"
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

/***/ "79mv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("cMXq");

var _index = __webpack_require__("3guR");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("+sWt");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Navbar from "../../modules/blocks-navbar-affix/m/index";
// import Qrcode from "../../modules/blocks-lp-qrcode/m/index";

init();
// modules


function init() {
    (0, _index4.default)(".row-news .mod-tabs-news", {
        data: {}
    });

    // Qrcode(".mod-qrcode", {
    //     data: data.lpQrcode
    // });

    fillNewsData();
}

function fillNewsData() {
    _index2.default.newsTabList.m.map(function (item, index) {
        var opt = {
            gameID: _index2.default.gicpBizId, // 不同游戏不一样，需要咨询内部重构
            type: "iTag", // 查询类型（一级分类：iType，二级分类：iSubType，关键字：iKeyword，推荐位：iTarget;标签：iTag；不传该参数时，查询全部分类的内容，但最多只返回240条内容）
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
            // pageSize: 1, // 每一页文章条数
            // noFadeIn:true, // 不使用淡入动画，不填写这一项则默认有动画
            source: "web_m", //数据上报用的，表明本页面用于pc或者移动；在gicp建，常见的移动官网是web_m ，PC官网是 web_pc
            detailURL: "/m/newsdetail.html", // 新闻的详情页，会在后面加上?newsid=XXX
            tpl: "<li> <div class=\"left-area\"> <strong>" + item.title.slice(0, 2) + "</strong> </div> <div class=\"right-area\"> <a href=\"{url}\" target=\"_blank\"> <h2 class=\"title\">{sTitle}</h2> <p class=\"time\">{sIdxTime}</p> </a> </div> </li>", // 模板字符串。新闻id{iNewsId} 标题{sTitle} 摘要{sDesc} 发布时间{sIdxTime} 作者{sAuthor} 详情地址{url} 封面图1{sCoverMap.One} 封面图2{sCoverMap.Two} 封面图3{sCoverMap.Three} 视频在gicp系统的id，不是vid{iVideoId}
            wrap: ".mod-tabs-news .tab-content:nth-child(" + (index + 1) + ") .tab-content-inner", //填充进去的容器
            callback: function callback(result) {
                // 填充完的回调
                console.log(result);
            }
        };
        fillNews.list(opt);
    });
}

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

/***/ "ZmHP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "//game.gtimg.cn/images/game/act/a20181206tgc/img/logo.23b8028.jpg";

/***/ }),

/***/ "cK//":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "//game.gtimg.cn/images/game/act/a20181206tgc/img/qr-lg.0bf507d.jpg";

/***/ }),

/***/ "cMXq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v2ns":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["79mv"]);
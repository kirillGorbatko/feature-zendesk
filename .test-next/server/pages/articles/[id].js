"use strict";
(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 2944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3650);
/* harmony import */ var _custom_head_custom_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4256);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4554);
/* harmony import */ var _src_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__]);
_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Article({ article , breadcrumbs , sectionArticles  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_head_custom_head__WEBPACK_IMPORTED_MODULE_2__/* .CustomHead */ .u, {
                title: article?.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__/* .GradientSection */ .NP, {
                variant: "tomato",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__/* .ArticleSection */ .F7, {
                    title: article?.name,
                    breadCrumbs: breadcrumbs,
                    sectionsArticles: sectionArticles,
                    body: article?.body
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);
const createBreadcrumbs = (items)=>{
    const breadcrumbs = items.map(({ name , url  })=>{
        return {
            name,
            url
        };
    });
    return breadcrumbs;
};
const preparedArticles = (items, activeArticleId)=>{
    const updatedArticles = items.map(({ id , name , url  })=>({
            id,
            name,
            url,
            isActive: activeArticleId === id
        }));
    return updatedArticles;
};
const getStaticPaths = async (context)=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};
const getStaticProps = async (context)=>{
    const paramsId = context?.params?.id;
    const articleId = (0,_src_shared_utils__WEBPACK_IMPORTED_MODULE_4__/* .getIdFromSlug */ .OR)(paramsId);
    const article = await _src_api__WEBPACK_IMPORTED_MODULE_3__/* .ARTICLES_API.getArticle */ .go.getArticle(articleId);
    const sectionId = article?.section_id;
    let section = null;
    let sectionArticles = null;
    let category;
    if (sectionId) {
        section = await _src_api__WEBPACK_IMPORTED_MODULE_3__/* .SECTIONS_API.getSection */ .nc.getSection(sectionId);
        sectionArticles = await _src_api__WEBPACK_IMPORTED_MODULE_3__/* .ARTICLES_API.getAllContainerArticle */ .go.getAllContainerArticle(sectionId, "sections");
        const categoryId = section?.category_id;
        if (categoryId) {
            category = await _src_api__WEBPACK_IMPORTED_MODULE_3__/* .CATEGORIES_API.getCategory */ .rp.getCategory(categoryId);
        }
    }
    const prepareSectionArticles = sectionArticles ? preparedArticles(sectionArticles, articleId) : null;
    const helpPage = {
        name: "Help",
        url: "/"
    };
    const breadcrumbs = category && section ? createBreadcrumbs([
        helpPage,
        category,
        section
    ]) : null;
    return {
        props: {
            article: article || null,
            breadcrumbs,
            sectionArticles: prepareSectionArticles
        },
        revalidate: 60
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 5650:
/***/ ((module) => {

module.exports = require("@researchgate/react-intersection-observer");

/***/ }),

/***/ 1169:
/***/ ((module) => {

module.exports = require("class-variance-authority");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 626:
/***/ ((module) => {

module.exports = import("js-yaml");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [274,6,939,236,554], () => (__webpack_exec__(2944)));
module.exports = __webpack_exports__;

})();
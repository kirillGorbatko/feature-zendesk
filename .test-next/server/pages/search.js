"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 7895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* binding */ Search),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3650);
/* harmony import */ var _custom_head_custom_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4256);
/* harmony import */ var _src_components_search_wrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6353);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_api_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4953);
/* harmony import */ var _src_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6583);
/* harmony import */ var _src_shared_utils_prepare_data_containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__, _src_components_search_wrap__WEBPACK_IMPORTED_MODULE_3__]);
([_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__, _src_components_search_wrap__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Search({ searchResults =[] , userQueryByUrl =null , nextPageIndexInitial =null , errorMessage =null , hostUrl  }) {
    const { 0: searchResultsData , 1: setSearchResultsData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(searchResults);
    const { 0: loadingStatus , 1: setLoadingStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(errorMessage ? "rejected" : "idle");
    const { 0: isLoadingMore , 1: setIsLoadingMore  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: userQuery , 1: setUserQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(userQueryByUrl);
    const { 0: nextPageIndex , 1: setNextPageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(nextPageIndexInitial);
    if (errorMessage) {
        console.error(errorMessage);
    }
    const handleLoadMore = async (e)=>{
        // FIXME: add correct types
        e.preventDefault();
        if (loadingStatus === "pending" || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            console.log(userQuery);
            const response = await (0,_src_api_search__WEBPACK_IMPORTED_MODULE_5__/* .connectToSearchAPI */ .f)({
                query: encodeURIComponent(userQuery),
                pageIndex: nextPageIndex,
                hostUrl
            });
            const { searchResults: newSearchResults , nextPageIndex: newNextPageIndex ,  } = response;
            setSearchResultsData([
                ...searchResultsData,
                ...newSearchResults
            ]);
            setIsLoadingMore(false);
            setNextPageIndex(newNextPageIndex);
        } catch (error) {
            setIsLoadingMore(false);
            console.log(error.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_head_custom_head__WEBPACK_IMPORTED_MODULE_2__/* .CustomHead */ .u, {
                title: `Results for: “${userQuery}”`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__/* .GradientSection */ .NP, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_search_wrap__WEBPACK_IMPORTED_MODULE_3__/* .SearchWrap */ .H, {
                        mobAlign: "left",
                        initialQuery: userQuery,
                        setSearchResultsData: setSearchResultsData,
                        setUserQuery: setUserQuery,
                        setLoadingStatus: setLoadingStatus,
                        setNextPageIndex: setNextPageIndex,
                        resultsCount: searchResultsData.length,
                        isSearchResults: true,
                        hostUrl: hostUrl
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__/* .SearchResult */ .lt, {
                        links: (0,_src_shared_utils_prepare_data_containers__WEBPACK_IMPORTED_MODULE_7__/* .prepareDataContainers */ .P)(searchResultsData, "articles"),
                        query: userQuery,
                        loadingStatus: loadingStatus,
                        isLoadingMore: isLoadingMore,
                        handleLoadMore: handleLoadMore,
                        nextPageIndex: nextPageIndex
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    let hostUrl = null;
    try {
        const requestReferer = context.req?.url;
        if (requestReferer) {
            // const hostUrlData = new URL(requestReferer);
            hostUrl = context.req?.headers?.host || null;
            const query = new _src_shared_utils__WEBPACK_IMPORTED_MODULE_6__/* .FormatURL */ .aE(requestReferer);
            query.getEndpointsAfterQuery();
            query.removeQueryEndpointKey();
            query.removeCharsAfterAmpersand();
            query.removeAmpersand();
            if (query.url?.length) {
                // check query not empty
                const { searchResults , userQuery , nextPageIndex , errorMessage  } = await (0,_src_api_search__WEBPACK_IMPORTED_MODULE_5__/* .connectToSearchAPI */ .f)({
                    query: query.url,
                    hostUrl
                });
                return {
                    props: {
                        hostUrl,
                        searchResults: searchResults || [],
                        userQueryByUrl: userQuery || null,
                        nextPageIndexInitial: nextPageIndex || null,
                        errorMessage: errorMessage || null
                    }
                };
            }
        }
    } catch (error) {
        return {
            props: {
                hostUrl,
                searchResults: [],
                userQueryByUrl: null,
                nextPageIndexInitial: null,
                errorMessage: error.message
            }
        };
    }
    return {
        props: {
            hostUrl,
            searchResults: [],
            userQueryByUrl: null,
            nextPageIndexInitial: null,
            errorMessage: "Can't get page url in api/search:getServerSideProps"
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [274,6,939,236,353], () => (__webpack_exec__(7895)));
module.exports = __webpack_exports__;

})();
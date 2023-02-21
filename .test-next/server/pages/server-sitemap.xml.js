"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 3077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Site),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _src_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4279);
/* harmony import */ var _src_shared_utils_prepare_data_containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6236);
/* harmony import */ var _src_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7855);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_1__]);
next_sitemap__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getServerSideProps = async (ctx)=>{
    const postTypes = [
        "articles",
        "categories"
    ];
    let sitemapData = [];
    const getNextPagePosts = async (fullUrl, resArray, key)=>{
        const response = await (0,_src_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .apiRequestHandler */ .uZ)().get({
            fullUrl
        });
        if (!response[key]?.length) return;
        if (response.next_page) {
            return await getNextPagePosts(response.next_page, [
                ...resArray,
                ...response[key]
            ], key);
        } else {
            return [
                ...resArray,
                ...response[key]
            ];
        }
    };
    const getPostsData = async (postType, resolve, reject)=>{
        try {
            const response = await (0,_src_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .apiRequestHandler */ .uZ)().get({
                url: postType
            });
            let posts = response[postType];
            const currentDate = new Date().toISOString();
            if (response && response.next_page && posts?.length) {
                posts = [
                    ...posts,
                    ...await getNextPagePosts(response.next_page, [], postType), 
                ];
            }
            const preparedUrls = (0,_src_shared_utils_prepare_data_containers__WEBPACK_IMPORTED_MODULE_2__/* .prepareDataContainers */ .P)(posts, postType).map(({ url: postUrl  })=>{
                return {
                    loc: `${_src_shared_constants__WEBPACK_IMPORTED_MODULE_3__/* .HOST_URL */ .LS}${postUrl}`,
                    lastmod: currentDate
                };
            });
            sitemapData = [
                ...sitemapData,
                ...preparedUrls
            ];
        } catch (err) {
            console.log(err);
        }
        resolve();
    };
    const getDataPromises = postTypes.map((postType)=>{
        // FIXME: add proper type
        return new Promise((resolve, reject)=>{
            getPostsData(postType, resolve, reject);
        });
    });
    await Promise.all(getDataPromises);
    return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_1__.getServerSideSitemap)(ctx, sitemapData);
};
function Site() {
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [236], () => (__webpack_exec__(3077)));
module.exports = __webpack_exports__;

})();
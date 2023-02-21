"use strict";
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 4953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ connectToSearchAPI)
/* harmony export */ });
/* unused harmony export searchArticlesByPage */
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7855);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6583);


const searchArticlesByPage = async (props)=>{
    const url = `articles/search.json?query=${props.query}`;
    try {
        const response = await apiRequestHandler().get({
            url
        });
        return {
            success: true,
            response
        };
    } catch (error) {
        console.error("getSearchResultsByPage:", error);
        return {
            success: false
        };
    }
};
const connectToSearchAPI = async ({ query , pageIndex =1 , hostUrl  })=>{
    try {
        if (!hostUrl) {
            throw new Error("Wrong hostUrl provided");
        }
        const response = await fetch(`${_shared_constants__WEBPACK_IMPORTED_MODULE_0__/* .HOST_PROTOCOL */ .sv}://${hostUrl}/api/search?query=${query}&page=${pageIndex}&per_page=25`);
        return response.json();
    } catch (error) {
        console.error("connectSearchAPI:", error);
        return {
            errorMessage: `connectSearchAPI: ${error}`
        };
    }
};


/***/ }),

/***/ 6353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _search_wrap__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _search_wrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_search_wrap__WEBPACK_IMPORTED_MODULE_0__]);
_search_wrap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3650);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__]);
_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SearchWrap(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { setLoadingStatus , setSearchResultsData , setUserQuery , setNextPageIndex , hostUrl ,  } = props;
    // { query }: SearchWrapProps
    const handleSubmit = async (e)=>{
        // FIXME: Change type
        e.preventDefault();
        const userQuery = e?.target?.query?.value;
        if (!userQuery) return;
        if (!userQuery?.replace(/\s/g, "").length) {
            e.target.query.value = "";
            return;
        }
        const encodedQuery = encodeURIComponent(userQuery);
        router.push(`/search?query=${encodedQuery}`);
        if (router.route === "/search") {
            try {
                setLoadingStatus("pending");
                const response = await (0,_api_search__WEBPACK_IMPORTED_MODULE_3__/* .connectToSearchAPI */ .f)({
                    query: encodeURIComponent(userQuery),
                    hostUrl
                });
                const { searchResults , nextPageIndex , errorMessage  } = response;
                if (errorMessage) {
                    throw new Error(errorMessage);
                }
                setSearchResultsData(searchResults || []);
                setUserQuery(userQuery);
                setNextPageIndex(nextPageIndex);
                setLoadingStatus("fullfilled");
            } catch (error) {
                setLoadingStatus("rejected");
                console.log(error.message);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featurefm_design_system__WEBPACK_IMPORTED_MODULE_1__/* .SearchHero */ .Tu, {
        ...props,
        handleSubmit: handleSubmit
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchWrap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
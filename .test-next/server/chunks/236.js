"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 7855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T5": () => (/* reexport */ API_URL),
  "fO": () => (/* reexport */ DATA_CONTAINERS_TYPE),
  "sv": () => (/* reexport */ HOST_PROTOCOL),
  "LS": () => (/* reexport */ HOST_URL)
});

;// CONCATENATED MODULE: ./src/shared/constants/api-url.ts
const API_URL = process.env.API_URL;
const HOST_PROTOCOL = process.env.HOST_PROTOCOL || "https";
const HOST_URL = process.env.HOST_URL || "https://feature-zendesk.vercel.app/";

;// CONCATENATED MODULE: ./src/shared/constants/data-containers-type.ts
const DATA_CONTAINERS_TYPE = {
    categories: "categories",
    sections: "sections",
    articles: "articles"
};

;// CONCATENATED MODULE: ./src/shared/constants/index.ts




/***/ }),

/***/ 6583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aE": () => (/* reexport */ FormatURL),
  "uZ": () => (/* reexport */ apiRequestHandler),
  "aG": () => (/* reexport */ getContentByType),
  "OR": () => (/* reexport */ getIdFromSlug),
  "KX": () => (/* reexport */ getSlugFromUrl)
});

// EXTERNAL MODULE: ./src/shared/constants/index.ts + 2 modules
var constants = __webpack_require__(7855);
;// CONCATENATED MODULE: ./src/shared/utils/api-request-handler.ts

const createHeaders = ()=>{
    const ACCOUNT_EMAIL = "support@feature.fm";
    const EMAIL_AND_API = `${ACCOUNT_EMAIL}:${process.env.API_KEY}`;
    const TOKEN = Buffer.from(EMAIL_AND_API).toString("base64");
    // console.log(TOKEN);
    const headers = new Headers({
        Authorization: `Basic ${TOKEN}`,
        "Content-Type": "application/json"
    });
    return headers;
};
const createUrl = (url)=>{
    return `${constants/* API_URL */.T5}${url}`;
};
const apiRequestHandler = ()=>{
    const get = async ({ url , fullUrl  })=>{
        try {
            const response = await fetch(fullUrl || createUrl(url), {
                headers: createHeaders()
            });
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`HTTP error ${response.statusText}, status = ${response.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    };
    return {
        get
    };
};

;// CONCATENATED MODULE: ./src/shared/utils/get-content-by-type.ts

const getContent = async ({ page , query  })=>{
    try {
        const preparedQuery = `${query}?page=${page}`;
        const response = await apiRequestHandler().get({
            url: preparedQuery
        });
        return {
            response
        };
    } catch (error) {
        console.error(error);
    }
};
const getContentByType = async ({ type , query , startPage , endPage  })=>{
    let currentPage = startPage;
    let preparedEndPage = endPage || currentPage;
    const finalArr = [];
    while(currentPage <= preparedEndPage){
        const { response  } = await getContent({
            page: currentPage,
            query
        });
        if (response && response[type]) {
            finalArr.push(...response[type]);
            preparedEndPage = response?.page_count;
        }
        currentPage++;
    }
    return finalArr;
};

;// CONCATENATED MODULE: ./src/shared/utils/get-id-from-slug.ts
const getIdFromSlug = (str)=>{
    return parseInt(str.replace(/\D/, ""));
};

;// CONCATENATED MODULE: ./src/shared/utils/get-slug-from-url.ts
const getSlugFromUrl = (url)=>{
    return /[^/]*$/.exec(url)[0];
};

;// CONCATENATED MODULE: ./src/shared/utils/format-url.ts
class FormatURL {
    constructor(url){
        this.url = url;
        this.queryEndpointKey = "query=";
    }
    updateUrl(url) {
        this.url = url;
    }
    getEndpointsAfterQuery() {
        const regExp = new RegExp(this.queryEndpointKey.concat(".+"), "g");
        const [firstMatch] = this.url.match(regExp) || [
            ""
        ];
        this.updateUrl(firstMatch);
    }
    removeQueryEndpointKey() {
        this.updateUrl(this.url.replace(new RegExp(this.queryEndpointKey, "g"), ""));
    }
    decodeUrl() {
        this.updateUrl(decodeURIComponent(this.url));
    }
    removeAmpersand() {
        this.updateUrl(this.url.replace(/&/g, ""));
    }
    removeCharsAfterAmpersand() {
        this.updateUrl(this.url.replace(/&.+/g, ""));
    }
    addSpaces() {
        this.updateUrl(this.url.replace(/\+/g, " "));
    }
}

;// CONCATENATED MODULE: ./src/shared/utils/index.ts







/***/ }),

/***/ 6236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ prepareDataContainers),
/* harmony export */   "i": () => (/* binding */ prepareSingleDataContainer)
/* harmony export */ });
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);

const prepareSingleDataContainer = (item, type)=>{
    const slug = item?.html_url ? (0,_shared_utils__WEBPACK_IMPORTED_MODULE_0__/* .getSlugFromUrl */ .KX)(item?.html_url) : "";
    const updatedUrl = `/${type}/${slug}`;
    return {
        ...item,
        slug,
        url: updatedUrl
    };
};
const prepareDataContainers = (items, type)=>{
    return items.map((singleItem)=>prepareSingleDataContainer(singleItem, type));
};


/***/ })

};
;
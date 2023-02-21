"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 2567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/shared/constants/api-url.ts
const API_URL = process.env.API_URL;
const api_url_HOST_PROTOCOL = process.env.HOST_PROTOCOL || "https";
const HOST_URL = process.env.HOST_URL || "https://feature-zendesk.vercel.app/";

;// CONCATENATED MODULE: ./src/shared/constants/data-containers-type.ts
const DATA_CONTAINERS_TYPE = {
    categories: "categories",
    sections: "sections",
    articles: "articles"
};

;// CONCATENATED MODULE: ./src/shared/constants/index.ts



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
    return `${API_URL}${url}`;
};
const api_request_handler_apiRequestHandler = ()=>{
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






;// CONCATENATED MODULE: ./src/api/search/index.ts


const searchArticlesByPage = async (props)=>{
    const url = `articles/search.json?query=${props.query}`;
    try {
        const response = await api_request_handler_apiRequestHandler().get({
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
        const response = await fetch(`${HOST_PROTOCOL}://${hostUrl}/api/search?query=${query}&page=${pageIndex}&per_page=25`);
        return response.json();
    } catch (error) {
        console.error("connectSearchAPI:", error);
        return {
            errorMessage: `connectSearchAPI: ${error}`
        };
    }
};

;// CONCATENATED MODULE: ./pages/api/search.ts


async function handler(req, res) {
    const fullURL = req.url || "";
    const serverQuery = new FormatURL(fullURL);
    serverQuery.getEndpointsAfterQuery();
    if (serverQuery.url) {
        serverQuery.removeQueryEndpointKey();
        if (!serverQuery.url.includes("sort_by")) {
            serverQuery.url = serverQuery.url.concat("&sort_by=title");
        }
        const userQuery = new FormatURL(serverQuery.url);
        userQuery.decodeUrl();
        userQuery.addSpaces();
        userQuery.removeCharsAfterAmpersand();
        userQuery.removeAmpersand();
        try {
            const searchQuery = await searchArticlesByPage({
                query: serverQuery.url
            });
            const searchResponse = searchQuery?.response;
            if (!searchResponse || searchResponse?.error) {
                throw new Error(`An error occurred while fetch: ${serverQuery.url} ${searchResponse?.error} ${searchResponse?.description}`);
            }
            res.status(200).json({
                userQuery: userQuery.url,
                searchResults: searchResponse.results || [],
                nextPageIndex: searchResponse.next_page && searchResponse.page ? searchResponse.page + 1 : null
            });
        } catch (e) {
            res.status(400).json({
                userQuery: userQuery.url,
                searchResults: [],
                nextPageIndex: null,
                errorMessage: e.message
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2567));
module.exports = __webpack_exports__;

})();
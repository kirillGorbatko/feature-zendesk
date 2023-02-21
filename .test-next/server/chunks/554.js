"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "go": () => (/* reexport */ ARTICLES_API),
  "rp": () => (/* reexport */ CATEGORIES_API),
  "nc": () => (/* reexport */ SECTIONS_API)
});

// EXTERNAL MODULE: ./src/shared/constants/index.ts + 2 modules
var constants = __webpack_require__(7855);
// EXTERNAL MODULE: ./src/shared/utils/index.ts + 5 modules
var utils = __webpack_require__(6583);
// EXTERNAL MODULE: ./src/shared/utils/prepare-data-containers.ts
var prepare_data_containers = __webpack_require__(6236);
;// CONCATENATED MODULE: ./src/api/categories/index.ts



const BASE_URL = "/categories";
const getAllCategories = async ()=>{
    const allCetegories = await (0,utils/* getContentByType */.aG)({
        query: BASE_URL,
        startPage: 1,
        type: constants/* DATA_CONTAINERS_TYPE.categories */.fO.categories
    });
    return allCetegories ? (0,prepare_data_containers/* prepareDataContainers */.P)(allCetegories, constants/* DATA_CONTAINERS_TYPE.categories */.fO.categories) : [];
};
const getCategory = async (id)=>{
    const query = `${BASE_URL}/${id}`;
    const response = await (0,utils/* apiRequestHandler */.uZ)().get({
        url: query
    });
    return response ? (0,prepare_data_containers/* prepareSingleDataContainer */.i)(response.category, constants/* DATA_CONTAINERS_TYPE.categories */.fO.categories) : null;
};
const CATEGORIES_API = {
    getCategory,
    getAllCategories
};

;// CONCATENATED MODULE: ./src/api/sections/index.ts



const getCategorySections = async (id)=>{
    const query = `categories/${id}/sections`;
    const sections = await (0,utils/* getContentByType */.aG)({
        query,
        startPage: 1,
        type: constants/* DATA_CONTAINERS_TYPE.sections */.fO.sections
    });
    return sections ? (0,prepare_data_containers/* prepareDataContainers */.P)(sections, constants/* DATA_CONTAINERS_TYPE.sections */.fO.sections) : [];
};
const getSection = async (id)=>{
    const query = `sections/${id}`;
    const response = await (0,utils/* apiRequestHandler */.uZ)().get({
        url: query
    });
    return response ? (0,prepare_data_containers/* prepareSingleDataContainer */.i)(response.section, constants/* DATA_CONTAINERS_TYPE.sections */.fO.sections) : null;
};
const SECTIONS_API = {
    getCategorySections,
    getSection
};

;// CONCATENATED MODULE: ./src/api/articles/index.ts



const getAllContainerArticle = async (id, containerType)=>{
    const query = containerType === "categories" ? `categories/${id}/articles` : `sections/${id}/articles`;
    const articles = await (0,utils/* getContentByType */.aG)({
        query,
        startPage: 1,
        type: constants/* DATA_CONTAINERS_TYPE.articles */.fO.articles
    });
    return articles ? (0,prepare_data_containers/* prepareDataContainers */.P)(articles, constants/* DATA_CONTAINERS_TYPE.articles */.fO.articles) : [];
};
const getArticle = async (id)=>{
    const query = `articles/${id}`;
    const response = await (0,utils/* apiRequestHandler */.uZ)().get({
        url: query
    });
    return response ? (0,prepare_data_containers/* prepareSingleDataContainer */.i)(response.article, constants/* DATA_CONTAINERS_TYPE.articles */.fO.articles) : null;
};
const getArticlesByPage = async ({ startPage , endPage ,  })=>{
    const query = "/articles";
    const articles = await (0,utils/* getContentByType */.aG)({
        query,
        startPage,
        endPage,
        type: constants/* DATA_CONTAINERS_TYPE.articles */.fO.articles
    });
    return articles ? (0,prepare_data_containers/* prepareDataContainers */.P)(articles, constants/* DATA_CONTAINERS_TYPE.articles */.fO.articles) : [];
};
const ARTICLES_API = {
    getAllContainerArticle,
    getArticle,
    getArticlesByPage
};

;// CONCATENATED MODULE: ./src/api/index.ts






/***/ })

};
;
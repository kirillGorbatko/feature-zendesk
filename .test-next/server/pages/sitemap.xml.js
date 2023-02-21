"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 8030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/sitemap.xml.tsx

const Sitemap = ()=>{
    // component should not return layout
    return null;
};
const HOST_URL = "http://localhost:3000"; // http://localhost:4200/sitemap.xml
const IGNORE_FILES = [
    "styles.css",
    "_app.tsx",
    "_document.tsx",
    "404.tsx",
    "sitemap.xml.tsx", 
];
const staticFileNames = external_fs_namespaceObject.readdirSync("apps/zendesk/pages");
const filteredFileNames = [
    ...staticFileNames
].filter((fileName)=>!IGNORE_FILES.includes(fileName));
const formattedPaths = filteredFileNames.map((fileName)=>`${HOST_URL}/${fileName.split(".").shift()}`);
const sitemapXML = formattedPaths.length && `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${formattedPaths.map((url)=>`<url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`).join("")}
  </urlset>`;
const getServerSideProps = async ({ res  })=>{
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXML || "");
    res.end();
    return {
        props: {}
    };
};
/* harmony default export */ const sitemap_xml = (Sitemap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8030));
module.exports = __webpack_exports__;

})();
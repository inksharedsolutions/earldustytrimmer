const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\404.js"))),
  "component---src-pages-about-the-author-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\about-the-author.js"))),
  "component---src-pages-about-the-book-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\about-the-book.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\page-2.js"))),
  "component---src-pages-privacy-policy-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\privacy-policy.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\terms-and-conditions.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\Users\\Bruce\\Desktop\\New folder\\earldustytrimmer\\src\\pages\\using-typescript.tsx")))
}


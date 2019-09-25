const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/README.md"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/src/index.mdx"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/src/components/Alert.mdx"))),
  "component---src-components-button-mdx": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/src/components/Button.mdx"))),
  "component---src-components-item-title-mdx": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/src/components/ItemTitle.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/src/pages/404.js")))
}


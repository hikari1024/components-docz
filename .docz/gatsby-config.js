const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: ['Getting Started', 'Components', 'UI组件'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/liepin/Documents/GitHub/docz-app-typescript',
          templates:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/package.json',
          docz: '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz',
          cache:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/.cache',
          app: '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app',
          appPublic:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/public',
          appNodeModules:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/node_modules',
          appPackageJson:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/package.json',
          appYarnLock:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/gatsby-config.js',
          gatsbyBrowser:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/gatsby-browser.js',
          gatsbyNode:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/gatsby-node.js',
          gatsbySSR:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/gatsby-ssr.js',
          importsJs:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app/imports.js',
          rootJs:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app/root.jsx',
          indexJs:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app/index.jsx',
          indexHtml:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app/index.html',
          db:
            '/Users/liepin/Documents/GitHub/docz-app-typescript/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)

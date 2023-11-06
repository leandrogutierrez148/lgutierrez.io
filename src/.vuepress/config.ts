import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import {
  sidebarEn,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Leandro Gutierrez',
      description: 'Vue-powered',
    },
  },

  // configure default theme
  theme: defaultTheme({
    logo: '/images/logo.svg',
    logoDark: '/images/logo-white.svg',
    repo: 'vuepress/vuepress-next',
    docsDir: 'src',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        // navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
  }),
  // use plugins
  plugins: [
    docsearchPlugin({
      appId: 'L73R8NPI',
      apiKey: 'a8fedeea7d11327849b2d271cec89a',
      indexName: 'lgtuierrez.io',
      searchParameters: {
      },
    }),
  ],
  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
    },
  },
})
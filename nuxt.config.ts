import siteMeta from './site';
// // https://nuxt.com/docs/api/configuration/nuxt-config
const { title, description, url, defaultLocale, identity, twitter, trailingSlash, titleSeparator } = siteMeta;

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'nuxt-og-image',
    '@nuxtjs/critters',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],

  site: {
    url,
    name: title,
    description,
    defaultLocale,
    // https://nuxtseo.com/docs/schema-org/guides/setup-identity
    identity,
    twitter,
    trailingSlash,
    titleSeparator
  },

  sitemap: {
    // https://nuxtseo.com/docs/sitemap/getting-started/troubleshooting
    // Open {{site.url}}/sitemap.xml
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      {
        label: 'Change Frequency',
        select: 'sitemap:changefreq',
        width: '12.5%'
      },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' }
    ]
    // To turn off xls file when viewing sitemap.xml
    // xsl: false,
  },

  ogImage: {
    defaults: {
      extension: 'jpeg'
    }
    // OG images and nuxtseo features can be previewed with nuxt-devtools during development. OG images can also be viewed using URL in this form - `/__og-image__/image/<path>/og.<extension>. For eg, {{site.url}}/__og-image__/image/og.png
    // fonts: ['Inter:400', 'Inter:700'],
    //
    // defaults: { width: 1200, height: 600, emojis: 'noto', renderer: 'satori', component: 'NuxtSeo', cacheMaxAgeSeconds: 60 * 60 * 24 * 3 },
    //
    // disable at a global level
    // runtimeCacheStorage: false,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false // agar kamu bisa pakai <NavBar /> langsung
    }
  ]
});

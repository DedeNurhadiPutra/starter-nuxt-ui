import { useHead, useSeoMeta } from '@unhead/vue';
import { defineWebSite, defineWebPage } from '@unhead/schema-org';
import siteMeta from '@/site';
import type { Link, Noscript } from '@unhead/schema';
import type { PageMeta } from '~/types/seo';

export const useHeadAndMeta = (pageMeta: PageMeta) => {
  const { title: siteTitle, description: siteDescription, url: siteUrl, ogImageUrl: siteOgImageUrl, generator: siteGenerator, author, twitter, titleSeparator } = siteMeta;

  const link: Link[] = [
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
    {
      rel: 'icon',
      // type: 'image/x-icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ];
  const noscript: Noscript[] = [];

  const canonicalUrl = pageMeta.canonicalUrl || siteUrl;

  let canonicalUrlHref: string;
  if (canonicalUrl instanceof URL) {
    canonicalUrlHref = canonicalUrl.href; // If it's a URL, get the href
  } else {
    canonicalUrlHref = canonicalUrl; // If it's a string, use it directly
  }

  if (canonicalUrlHref) {
    // Canonical URL
    link.push({ rel: 'canonical', href: canonicalUrlHref });
  }

  const title = pageMeta.title ? `${pageMeta.title} ${titleSeparator} ${siteTitle}` : siteTitle;

  // Manage head with useHead
  useHead({
    title, // title is either defined statically within the astro page or dynamically by adding it to the page's frontmatter, and it is resolved here.

    // Other unused params - titleTemplate, templateParams
    titleTemplate: null,

    // Instead of setting other meta here, useSeoMeta is used.
    meta: [
      {
        name: 'twitter:url',
        content: canonicalUrlHref
      }
    ],

    // useScript can also be used to load scripts
    link,
    noscript,
    htmlAttrs: { lang: 'en-US' },
    bodyAttrs: {},
    style: []
  });

  const description = pageMeta.description || siteDescription;
  const generator = pageMeta.generator || siteGenerator;
  const keywords = pageMeta.tags?.toString();

  let siteOgImage: string = siteUrl;

  try {
    siteOgImage = new URL(siteOgImageUrl, siteUrl).href;
  } catch (err) {
    console.log(err);
  }

  const ogImage = pageMeta.ogImage || siteOgImage;

  // if (ogImage.src) {
  //   // If pageMeta.ogImage was imported within the app, Vite returns it as an object with src, width, height etc. So, replace src with url
  //   ogImage.url = ogImage.src;
  //   delete ogImage.src;
  // }

  // Manage head meta with useSeoMeta
  useSeoMeta({
    title,
    description,
    author,
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    generator,
    keywords,

    // // Open Graph / Facebook / LinkedIn / Discord
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: ogImage,
    ogImageAlt: title,
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    ogUrl: canonicalUrlHref,
    ogSiteName: title,
    // // Other values - og: locale, og: type

    // // Twitter (X)
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: title,
    twitterSite: twitter,
    twitterCreator: '@techakayy'
  });

  // Manage schema-org with useSchemaOrg
  // https://unhead.unjs.io/schema-org/getting-started/setup#_3-add-site-schemaorg
  // https://nuxtseo.com/learn/mastering-meta/schema-org#reactivity-with-useschemaorg
  defineWebSite({
    name: 'Bahana Link'
    // url: 'https://example.com'
  });

  defineWebPage({
    // name: 'My Page',
    // description: 'Page description here'
  });
};

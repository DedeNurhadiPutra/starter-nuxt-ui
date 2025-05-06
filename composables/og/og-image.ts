import siteMeta from '@/site';
import { useOptimizeImage } from './optimize-image';

export const useOgImage = () => {
  const { title, logo, description, author, twitter } = siteMeta;

  const fromBg = '#000000'; // '#000000'; // '#1E1E1E'; // '#ffffff';
  const toBg = '#000000'; // '#000000'; // '#ffffff'; // '#ffffff';

  const ogImageOptions = {
    component: 'OgCard',
    title,
    // description: '', // use page description instead
    summary: description,
    fromBg,
    toBg,
    // image: '~/assets/images/hero1.jpg',
    logo,
    author,
    twitter
  };

  const route = useRoute();
  const ogImage = computed(() => route.meta.ogImage as string);

  const { optimizeImage } = useOptimizeImage();
  const theOgImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      ogImage.value,
      /* options */
      {
        modifiers: {
          width: 1200,
          height: 600,
          fit: 'fill' // can be cover, contain, fill, inside, outside
        }

        // placeholder: false, // placeholder image before the actual image is fully loaded.
      }
    )
  };

  const theOgImage = theOgImageOptimized.src;

  defineOgImageComponent('OgCard', {
    image: theOgImage,
    ...ogImageOptions
  });

  return {
    theOgImage,
    ogImageOptions
  };
};

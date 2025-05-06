<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHeadAndMeta } from '~/composables/seo/head-and-meta';
import { useOgImage } from '~/composables/og/og-image';
import type { PageMeta } from '~/types/seo';
import { useColorMode } from '@vueuse/core';
import Header from '~/components/shared/Header.vue';
import Footer from '~/components/shared/Footer.vue';

const route = useRoute();

const pageMeta = computed<PageMeta>(() => {
  const meta = route.meta ?? {};
  return {
    title: meta.title as string | undefined,
    description: meta.description as string | undefined,
    canonicalUrl: (meta.canonicalUrl as string | URL) ?? route.fullPath,
    generator: meta.generator as string | undefined,
    tags: meta.tags as string[] | undefined,
    ogImage: meta.ogImage as PageMeta['ogImage']
  };
});

useHeadAndMeta(pageMeta.value);
useOgImage();
const mode = useColorMode({
  emitAuto: false,
  selector: 'html', // pastikan ini yang di-target Tailwind
  storageKey: 'nuxt-color-mode', // pakai kunci custom
  modes: {
    light: 'light',
    dark: 'dark'
  }
});

mode.value = 'light'; // paksa jadi light
</script>

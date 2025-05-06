<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'HOME',
      to: '/getting-started'
    },
    {
      label: 'Tentang Kami',
      to: '/composables'
    },
    {
      label: 'Publikasi',
      to: '/components'
    },
    {
      label: 'Produk dan Layanan',
      to: '/components'
    },
    {
      label: 'Informasi',
      to: '/components'
    },
    {
      label: 'RITEL/INSTITUSI',
      to: '/components',
      active: true
    }
  ]
]);
</script>

<template>
  <UNavigationMenu color="primary" variant="link" :items="items" class="w-full md:w-auto justify-center uppercase" />
</template>

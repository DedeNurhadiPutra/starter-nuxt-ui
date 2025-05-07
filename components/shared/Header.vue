<template>
  <div class="fixed w-full px-4 md:px-36">
    <!-- Logo & Search -->
    <div class="w-full flex flex-col md:flex-row items-center justify-between mb-2">
      <NuxtImg src="bahana-logo-color.svg" alt="Logo" class="w-40 md:w-56" />
      <UInput icon="i-lucide-search" size="md" variant="outline" placeholder="Search..." class="w-full max-w-md" />
    </div>

    <!-- Navigation Menu -->
    <UNavigationMenu v-model="active" color="primary" variant="link" :items="items" class="w-full justify-center uppercase cursor-pointer" />
  </div>
</template>

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
      to: '/components'
    }
  ]
]);

const active = ref();

defineShortcuts({
  1: () => {
    active.value = '0';
  },
  2: () => {
    active.value = '1';
  },
  3: () => {
    active.value = '2';
  }
});
</script>

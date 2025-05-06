import { defineStore } from 'pinia';

export const useSiteStore = defineStore('site', () => {
  const currentPage = ref('home');
  return { currentPage };
});

<template>
  <div class="flex items-center justify-center py-6 h-screen">
    <!-- <DarkModeSwitch /> -->
  </div>

  <!-- <Hero />
    <WhyBahana />
    <ProductShowcase />
    <NewsSection /> -->
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'New Arrivals, Big Savings!',
  navOrder: 1,
  type: 'primary',
  icon: 'i-mdi-home'
  // ogImage: 'images/ogImage.png', // Uncomment if needed
});

// import Hero from '~/components/home/Hero.vue'
// import WhyBahana from '~/components/home/WhyBahana.vue'
// import ProductShowcase from '~/components/home/ProductShowcase.vue'
// import NewsSection from '~/components/home/NewsSection.vue'
// import DarkModeSwitch from '~/components/base/DarkModeSwitch.vue'
</script>

<style scoped></style>

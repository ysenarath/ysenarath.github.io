<template>
  <div class="app">
    <header-section v-bind:activeItem="'Projects'"></header-section>
    <div class="container page-container">Projects</div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from "./sections/HeaderSection.vue";
import FooterSection from "./sections/FooterSection.vue";

export default {
  components: {
    HeaderSection,
    FooterSection
  }
};
</script>

<style>
</style>
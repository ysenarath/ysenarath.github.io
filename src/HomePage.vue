<template>
  <div class="app">
    <header-section v-bind:activeItem="'Home'"></header-section>
    <div class="container page-container">
      <profile-card></profile-card>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from "./sections/HeaderSection.vue";
import FooterSection from "./sections/FooterSection.vue";
import ProfileCard from "./components/ProfileCard.vue";

export default {
  components: {
    HeaderSection,
    FooterSection,
    ProfileCard
  }
};
</script>

<style>
</style>
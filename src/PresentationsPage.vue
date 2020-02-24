<template>
    <div class="app">
        <header-section v-bind:activeItem="'Presentations'"></header-section>
        <div class="container page-container">
            <div class="d-flex justify-content-center">
                <iframe src="https://www.slideshare.net/YasasSenarath/slideshelf" width="760px" height="570px"
                        frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:none;"
                        allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
            </div>
        </div>
        <footer-section></footer-section>
    </div>
</template>

<script>
    import HeaderSection from "./sections/HeaderSection.vue";
    import FooterSection from "./sections/FooterSection.vue";

    export default {
        components: {
            HeaderSection,
            FooterSection,
        },
        data: function () {
            return {
                presentations: []
            }
        }
    };
</script>

<style>
</style>
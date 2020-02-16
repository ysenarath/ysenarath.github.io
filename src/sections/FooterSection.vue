<template>
    <footer class="footer fixed-bottom">
        <div class="container">
            <div class="d-flex">
                <div class="mr-auto">
                    <span class="text-muted">Yasas Senarath © 2020</span>
                </div>
                <div style="width: 200px;">
                    <social-buttons></social-buttons>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import SocialButtons from "../components/SocialButtons.vue";

    export default {
        components: {
            SocialButtons
        }
    };
</script>

<style scoped>
    .footer {
        background: #ffffffed;
        height: 30px;
    }
</style>
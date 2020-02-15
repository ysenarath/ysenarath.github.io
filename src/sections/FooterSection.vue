<template>
    <footer class="footer fixed-bottom">
        <div class="container">
            <div class="row">
                <span class="text-muted">Yasas Senarath ©</span>
                <div class="mx-auto" style="width: 200px;">
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
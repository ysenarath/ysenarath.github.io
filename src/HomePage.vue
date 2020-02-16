<template>
    <div class="app">
        <header-section v-bind:activeItem="'Home'"></header-section>
        <div class="container page-container">
            <div class="jumbotron">
                <div class="row">
                    <div class="col col-auto">
                        <img class="profile-avatar align-middle" src="static/profile.jpg" itemprop="image"
                             alt="Avatar"/>
                    </div>
                    <div class="col">
                        <h1 class="display-5 ml-5">Hello, I'm</h1>
                        <h1 class="display-3" style="text-align: center;">Yasas Senarath</h1>
                        <p class="lead" style="text-align: center;">Researcher · Doctoral Student · AI for Social Good ·
                            <a class="lead" href="/static/resume.pdf" target="_blank" role="button">
                                <font-awesome-icon :icon="['fas', 'download']" fixed-width/>
                                Resumé
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="lead">
                    <br>Yasas is a graduate student at George Mason University. He is a member of the
                    Humanitarian, Semantics & Informatics Lab (Human-Info-Lab). Prof. Hemant Purohit,
                    the head of Human-Info-Lab advices Yasas on his current research activities.
                    <br/><br/>He completed his Bachelor's Degree in Computer Science and Engineering at
                    the University of Moratuwa in 2018. He is also a former member at DataSEARCH, a
                    multi-disciplinary research centre at the University of Moratuwa. His project at
                    DataSEARCH was related to Social Media Analytics and Opinion Mining.
                    <br/><br/>His research interests lie in the area of Natural Language Processing and
                    Artificial Intelligence. In his current research, he is aiming to provide
                    solutions to problems in Natural and Societal Crises by analyzing social media content.
                </p>
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
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

    h1 {
        font-family: 'Quicksand', sans-serif;
    }

    p {
        margin-bottom: 0;
    }

    .jumbotron {
        margin-bottom: 0;
        margin-top: 0;
        padding: 2rem;
    }

    p.lead {
        padding: 1rem;
    }

    .profile-avatar {
        height: 200px;
        width: 200px;
    }
</style>
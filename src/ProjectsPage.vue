<template>
    <div class="app">
        <header-section v-bind:activeItem="'Projects'"></header-section>
        <div class="container page-container">
            <div class="card-columns">
                <!--            <div class="row row-cols-1"  >-->
                <!--                <div class="col mb-4">-->
                <div class="card text-center h-100" v-for="item in projects">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text"><small class="text-muted">{{ item.period }}</small></p>
                        <p class="card-text">{{ item.description }}</p>
                    </div>
                </div>
                <!--                </div>-->
                <!--                </div>-->
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
            FooterSection
        },
        data: function () {
            return {
                projects: [
                    {
                        title: 'Hate Speech Identification',
                        period: 'Jul 2019 – Present',
                        description: 'The goal of this research project is to identify and improve techniques on detecting hate speech in social media text such as tweets. There has been lot of work around this subject and we try to improve on the existing ideas.',
                        type: 'research',
                    },
                    {
                        title: 'Affect Level Opinion Mining of Twitter Streams',
                        period: 'Jan 2018 – Jun 2019',
                        description: 'In this research our goal was to identify the emotions expressed by people on social media such as Twitter.',
                        type: 'research',
                    },
                    {
                        title: 'DengAI: Predicting Disease Spread',
                        period: 'Oct 2017 – Dec 2017',
                        description: 'Competition (ended on December 2017) where the challenge is to predict the number of dengue cases each week (in San Juan, Puerto Rico and Iquitos, Peru) based on environmental variables describing changes in temperature, precipitation, vegetation, and more. Data mining and machine learning knowledge was applied in the development of the prediction model. Currently ranked as first out of 1831 participants.',
                        type: 'research',
                    },
                    {
                        title: 'Aspect Extraction from Consumer Reviews',
                        period: 'Jan 2017 – Aug 2017',
                        description: 'A research project related to Aspect Based Sentiment Analysis (ABSA). Our goal was to explore novel techniques with deep learning and machine learning to detect aspects from customer reviews.',
                        type: 'research',
                    },
                    {
                        title: 'EMOSYS: Environmental Monitoring System',
                        period: 'Oct 2015 – Jan 2016',
                        description: 'Simulated Environmental monitoring system for Colombo District. Group project of four members completed the application with comprehensive database documentation. Used technologies - PHP, MySQL, Symfony Framework.',
                        type: 'product',
                    },
                    {
                        title: 'Information Management System for Panadura Cooperative Socity',
                        period: 'Apr 2015 – Aug 2015',
                        description: 'Cooperative Society supermarkets (Co-op City) required an information management system to manage their sales and inventory. We developed a solution based on the requirement of Panadura Mega Co-op city, using Java which contains of subsystems; inventory management system, point of sales system, ledger management system and a customer management system. We followed Rational Unified Process (RUP) as the development process and carried out all the phases by ourselves. This project was carried out as the semester project of Object Oriented Software Development module in third semester at the university. The project won the best project title from 25 project presented at the end of the module.',
                        type: 'product',
                    },
                    {
                        title: 'Tank Game',
                        period: 'Nov 2014 – Mar 2015',
                        description: 'Project of the programming challenge II module, semester 4. Designed an intelligent game client that played against other bots through a game server. Programmed using C# and Mono game framework.',
                        type: 'product',
                    },
                    {
                        title: 'Eficiente',
                        period: 'Nov 2014 – Mar 2015',
                        description: 'An Arduino based project to design an automation system to conserve electrical energy and to remote control electrical appliances like bulbs and fans. The system detects absence of people in room and automatically shuts down power to electrical devices connected. The sensors automatically detect entrance of people to room and light up bulbs depending on the time of the day. In order enhance the capabilities of the system an Android based application was developed to control connected appliances manually via a Bluetooth enabled Android smartphone. Developed as semester project for semester 2, CS 1962: Engineering Skill Development module. Received an ‘A’ grade at final project evaluation.',
                        type: 'product',
                    },
                ]
            }
        }
    };
</script>

<style>
</style>
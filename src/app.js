import Vue from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./HomePage.vue";
import ProjectsPage from "./ProjectsPage.vue";
import ResearchPage from "./ResearchPage.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const PageNotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': HomePage,
  '/projects.html': ProjectsPage,
  '/research.html': ResearchPage,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: '/' + window.location.pathname.split('/').pop()
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || PageNotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
});
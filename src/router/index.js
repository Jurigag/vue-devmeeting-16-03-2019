import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Vote from "@/components/Vote";
import Score from "@/components/Score";
import Settings from "@/components/Settings";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

import {
  createRouter,
  createWebHistory
} from 'vue-router';
import userLoggedin from '../utils/userLoggedin';


import Login from '../views/Login.vue';
import Search from '../views/Search.vue';
import SearchResult from '../views/SearchResult.vue';
import MovieDetail from '../views/MovieDetail.vue';


const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Search,
    name: "Search",
  },
  {
    path: '/search/:movie',
    component: SearchResult,
    name: 'SearchResponse',
  },
  {
    path: '/movie/:id',
    component: MovieDetail,
    name: 'movie',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.name == "Login")) {
    if (userLoggedin()) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
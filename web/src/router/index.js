import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/web/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/web/news.vue')
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: () => import(/* webpackChunkName: "newsDetail" */ '../views/web/newsDetail.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/web/product.vue')
  },
  {
    path: '/job',
    name: 'job',
    component: () => import(/* webpackChunkName: "job" */ '../views/web/job.vue')
  },
  {
    path: '/job/:id',
    name: 'jobDetail',
    component: () => import(/* webpackChunkName: "jobDetail" */ '../views/web/jobDetail.vue')
  },
  // {
  //   path: '/customer',
  //   name: 'customer',
  //   component: customer
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/web/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/web/about.vue')
  },
  {
    path: '/certification',
    name: 'certification',
    component: () => import(/* webpackChunkName: "about" */ '../views/web/certification.vue')
  },
  {
    path: '/examination',
    name: 'examination',
    component: () => import(/* webpackChunkName: "about" */ '../views/web/examination.vue')
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import('../views/web/authentication.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/web/contact.vue')
  },
  {
    path: '/contract',
    name: 'contract',
    component: () => import('../views/web/contract.vue')
  },
  {
    path: '/collaboration',
    name: 'collaboration',
    component: () => import('../views/web/collaboration.vue')
  },
  {
    path: '/abroad',
    name: 'abroad',
    component: () => import('../views/web/abroad.vue')
  },
  {
    path: '/tv-show',
    name: 'tvshow',
    component: () => import('../views/web/tvShow.vue')
  },
  {
    path: '/contest',
    name: 'contest',
    component: () => import('../views/web/contest.vue')
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: signup
  // },
  {
    path: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 网站统计
  /* eslint-disable */
  if (_hmt) {
    if (to.path) {
      _hmt.push(['_trackPageview', to.fullPath])
    }
  }
  next()
  /* eslint-enable */
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router

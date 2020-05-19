export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')  ,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),

    //路由独享守卫
    beforeEnter(to,from,next){
      console.log('beforeEnter to ==>',to);
      console.log('beforeEnter from ==>',from);
      console.log('beforeEnter this ==>',this);
      console.log('beforeEnter next ==>',next);

      next()
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  }

]
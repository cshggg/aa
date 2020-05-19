import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//全局导航守卫
router.beforeEach((to,from,next)=>{
  console.log('beforeEach to ==>',to);
  console.log('beforeEach from ==>',from);
  console.log('beforeEach next ==>',next);

  next()
})

router.afterEach((to,from)=>{
  console.log('afterEach to ==>',to);
  console.log('afterEach from ==>',from);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

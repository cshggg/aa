<template>
  <div class="home">
     <button @click="goAbout()">跳转到about组件</button>
     <button @click="goIndex()">跳转到index组件</button>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'Home',

  computed:{

     ...mapState({
       lg: 'login'
    })
  },

   

  methods: {

    goAbout(){
      this.$router.push({name:'About',query:{lg:this.lg}}).catch(err => {})
    },
    goIndex(){
      this.$router.push({name:'Index'})
    },

  }
}
</script>

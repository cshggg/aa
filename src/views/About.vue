<template>
  <div class="about">
    这个是about组件
    <button @click="baocun()">保存 {{click}}</button>
  </div>
</template>

<script>
  export default {
    name:'About',

    data(){
      return {
        click: false,
      }
    },

    beforeRouteEnter(to,from,next){
      console.log('beforeRouteEnter to ==>',to)

      if(to.query.lg == 0){
        console.log('您还没有登录,请先登录!')
        next('/login')
      }else{
        next()
      }
    },

    beforeRouteLeave(to,from,next){
      console.log('beftoreRouteLeave this ==>',this)
      console.log('this.click ==>',this.click)

      if(this.click){
        next()
      }else{
        console.log('你还没有保存,请先进行保存')
      }
    },

   methods:{
     baocun(){
       this.click = true
     }
   }


  }
</script>

<style lang="less" scoped>

</style>

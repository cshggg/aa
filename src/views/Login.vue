<template>
    <div class="login">
        这是Login组件
        <button @click="goAbout()">登录</button>
    </div>
</template>

<script>
    export default {
        name:'Login',

        methods:{
            goAbout(){
                this.$router.push({name: 'About',query: {lg:1}})
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
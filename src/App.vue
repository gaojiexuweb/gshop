<template>
  <div id="app">
    <!-- 路由跳转显示 -->
      <router-view></router-view>  
    <!-- 子组件 -->
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
//引入子组件
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
  export default {
      components:{
        FooterGuide
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
    width 100%
    height 100%
    background #f5f5f5
</style>

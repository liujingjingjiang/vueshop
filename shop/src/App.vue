
<template>
    <div id="app">
        <keep-alive>
            <router-view  />
        </keep-alive>

          <!-- 控制组件的显示和隐藏 -->
          <FooterGuide v-show="!$route.meta.showFooter"/>

    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { mapActions } from 'vuex'
    export default {
       
        name: 'App',
        components: {
           FooterGuide 
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        mounted()  {
            // //  异步获取 address
            // this.$store.dispatch('getAddress')
            // //  异步获取登陆用户信息
            // this.$store.dispatch('getUserInfo')
            this.getAddress()
            this.getUserInfo()
        },
        computed: {
            
        },
        watch: {
            
        },
        created() {
            
        },
        methods: {
            ...mapActions(['getAddress','getUserInfo'])
            
}

            
        }
    
</script>

<style lang="stylus" rel="stylesheet/stylus">
    
</style>

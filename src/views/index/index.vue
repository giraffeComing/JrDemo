<template>
  <!--每个单文件组件内的根只能有一个-->
  <div class="index_wrap">
    <!--页头视图组件-->
    <v-header></v-header>
    <!--内容区视图组件-->
    <v-contain></v-contain>
    <!--页脚视图组件-->
    <v-footer></v-footer>
  </div>
</template>

<script>
//  导入组件
    import VHeader from '../header';
    import VFooter from '../footer';
    import VContain from '../contain'
    export default {
        name: 'index',
//        组件注册
        components:{
            VHeader,
            VFooter,
            VContain,
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  .index_wrap{
    display: flex;
    flex-flow: column;
    height: 100%;
  }

</style>

<template>
    <div class="com-contain">
        <div class="com-menu">
            <ul>
                <!--home前面不要忘记'/'-->
                <li><router-link :to="{ path: '/home/list_demo1' }">进度条和步骤条</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo3' }">列表</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo2' }">选项卡</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo4' }">echarts</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo5' }">svg</router-link></li>
            </ul>
        </div>
        <div class="com-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contain',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .com-contain{
        flex: 1;
        font-size: 18px;
        overflow: hidden;
        display: flex;
        flex-flow: row;
        .com-menu{
            /*float: left;*/
            border: 1px solid red;
            li{
                list-style: none;
                line-height: 40px;
            }
            a{
                text-decoration: none;
                display: block;
                padding: 0 10px;
                color: #5e5e5e ;
                &.router-link-active{
                    background: #ccc;
                    color: #000 !important;
                }
            }
        }
        .com-view{
            flex: 1;
            overflow: auto;
        }
    }
</style>

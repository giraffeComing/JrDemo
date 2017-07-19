<template>
    <div class="com-contain">
        <div class="com-menu">
            <ul>
                <!--home前面不要忘记'/'-->
                <li><router-link :to="{ path: '/home/list_demo1' }">Bar</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo2' }">Tab</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo3' }">List</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo4' }">Echarts</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo5' }">More->ES6</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo6' }">V-model</router-link></li>
                <li><router-link :to="{ path: '/home/list_demo7' }">props&emit&bus</router-link></li>
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
        display: flex;
        flex-flow: row;
        margin: 5px 5px;
        flex: 1;
        font-size: 16px;
        overflow: hidden;
        .com-menu{
            /*float: left;*/
            font-family: "Microsoft YaHei";
            margin-right: 5px;
            border: 1px solid #cdcdcd;
            padding: 10px 0;
            border-radius:10px;
            width: 160px;
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
                    background: #d5d5d5;
                    color: #5e5e5e !important;
                }
            }
        }
        .com-view{
            flex: 1;
            overflow: auto;
        }
    }
</style>

<template>
    <div class="com-contain">
        <div class="com-menu">
            <ul>
                <li v-for="(item,index) in listData" @click="showEffect($event,index)">
                    <router-link :to="{ path: item.path }">
                        {{item.name}}
                        <span v-show="item.show" class="issue-point"></span>
                        <transition name="fade">
                            <div v-show="index==idx" class="circle"></div>
                        </transition>
                    </router-link>
                </li>
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
        methods:{
            showEffect:function(e,i){
//                150这个数值写的太不灵活了，取的是圆的半径
                e.target.lastChild.style.left=e.offsetX-150+'px';
                e.target.lastChild.style.top=e.offsetY-150+'px';
                this.idx=i;
            },
        },
        data () {
            return {
                idx:0,
                listData:[
                    {
                        path: '/home/list_demo1',
                        name: 'Bar',
                        show: false,
                    },
                    {
                        path: '/home/list_demo2',
                        name: 'Tab',
                        show: false,
                    },
                    {
                        path: '/home/list_demo3',
                        name: 'List',
                        show: false,
                    },
                    {
                        path: '/home/list_demo4',
                        name: 'Echarts',
                        show: false,
                    },
                    {
                        path: '/home/list_demo5',
                        name: 'More->ES6',
                        show: false,
                    },
                    {
                        path: '/home/list_demo6',
                        name: 'V-model',
                        show: false,
                    },
                    {
                        path: '/home/list_demo7',
                        name: 'props&emit&bus',
                        show: false,
                    },
                    {
                        path: '/home/list_demo8',
                        name: 'Array Caveats',
                        show: false,
                    },
                    {
                        path: '/home/list_demo9',
                        name: 'Transitions Six',
                        show: false,
                    },
                    {
                        path: '/home/list_demo10',
                        name: 'Vuex',
                        show: false,
                    },
                    {
                        path: '/home/list_demo11',
                        name: 'directive',
                        show: true,
                    }
                ]
            }
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
                position: relative;
                list-style: none;
                line-height: 40px;
                overflow: hidden;
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
    .issue-point{
        position: absolute;
        right: 2px;
        top: 15px;
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: rgba(34, 172, 56,.8);
    }
    //点击圆形实现的样式
    .fade-enter-active, .fade-leave-active {
        transition: transform .5s ease-in-out;
        opacity: 0.4;
        width: 300px;
        height: 300px;
        background: #000;
        border: 80px solid #444;
        box-shadow:0 0 0 80px #000;
        transform: scale(0.4);
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: scale(0.2);
    }
    .circle{
        position: absolute;
        border-radius: 200px;
        box-sizing: border-box;
        pointer-events: none;
    }

</style>

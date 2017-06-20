<template>
    <div>
        <!--过渡动画-->
        <transition appear mode="out-in">
            <div>
                <ul>
                    <!--循环li并绑定点击事件，事件绑定用@，属性绑定用:-->
                    <li
                            v-for="(item,index) in tabs"
                            @click="toggle(index,item.tabView)"
                            :class="{active:now===index}">
                        {{item.tabContent}}
                    </li>
                </ul>
                <!--动态组件-->
                <div class="tab-contain">
                    <!--过渡效果-->
                    <transition appear mode="out-in">
                        <component :is="currentView"></component>
                    </transition>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import VTabChild01 from '../listDemo02/child01'
    import VTabChild02 from '../listDemo02/child02'
    import VTabChild03 from '../listDemo02/child03'
    export default {
        name: '',
        components: {
            VTabChild01,
            VTabChild02,
            VTabChild03
        },
        methods:{
            toggle:function(i,v){
                //使用data中定义的变量的时候不要忘了前面的this
                this.currentView=v;
                this.now=i;
            }
        },
        data () {
            return {
                //变量now与索引比较，控制class切换
                now:0,
                //变量currentView控制动态组件切换
                currentView:'VTabChild01',
                //选项卡数据结构
                tabs:[
                    {
                        tabContent:'tab01',
                        tabView:'VTabChild01'
                    },
                    {
                        tabContent:'tab02',
                        tabView:'VTabChild02'
                    },
                    {
                        tabContent:'tab03',
                        tabView:'VTabChild03'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    ul{
        list-style: none;
        overflow: hidden;
        margin: 20px;
        li{
            float: left;
            margin-right: 20px;
            cursor: pointer;
            padding-bottom: 2px;
        }
    }
    .active{
        color: red;
        border-bottom: 1px solid red;
    }
    .tab-contain{
        margin-left: 20px;
        width: 500px;
        height: 200px;
        border: 1px solid gray;
        padding: 5px;
    }
</style>

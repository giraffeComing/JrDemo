<template>
    <div class="com-layout">
        <div class="com-list-wrap">
            <div class="com-list-r" :style="activeLayout?currentStyleR:''">
                <!--改变i的值即可改变布局-->
                <div class="com-four-col" :style="{height:Math.floor(item.array.length/i)*336+'px'}">
                    <!--通用产品展示模块-->
                    <transition-group
                            name="flip-list"
                            v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-on:leave="leave"
                            tag="div">
                        <v-com-list-block v-for="(list,key) in item.array" :key="key" :idx="key"
                                          :wid="294"
                                          :hig="335"
                                          :opts="list" :pos="{left:key%i*(294+1),top:Math.floor(key/i)*(335+1)}"></v-com-list-block>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Mock from "mockjs";
    import VComListBlock from '../listDemo03/commonListBlock';
    export default{
        name: 'ComFourLayout',
        components:{
            VComListBlock,
        },
        data(){
            return {
                scroll:0,
                documentHeight:0,
//                触发瀑布流ajax请求的埋点
                loadMoreOffsetTop:0,
                activeLayout:false,
//                瀑布流列表逐个过渡依赖的变量
                idx:1,
//                左侧布局宽
                currentStyleL:{
                    width:289+'px',
                },
//                右侧布局宽
                currentStyleR:{
                    width:890+'px'
                },
//                控制列数
                i:4,
//                模拟数据
                item:Mock.mock({
                    "array|12": [
                        {
                            "sale|0-100": 100,
                            "activeHeart|1-2": true,
                            "src":Mock.mock("@image('240x240', '#fff')"),
                            "src2":Mock.mock("@image('240x240', '#eee')"),
                            "href":"http://www.soufeel.com/",
                            "name":"Fingers with Hearts",
                            "sku":"soufeel",
                            "price|1-100.2": 1,
                            "priceOld|1-100.2": 1,
                            "tagType|1-3": 1,
                            "tags":["Free Shipping","Presale - Ships On 15th"],
//                            商品数量的字段
                            "number":0,
                        }
                    ]
                })
            }
        },
        mounted() {
            //监听滚动事件
            window.addEventListener('scroll', this.documentScroll)
        },
        methods:{
//            模拟获取瀑布流数据,真实环境下这里的数据应该是ajax获取而来的
            getData:function () {
                let newData=Mock.mock({
                    "array|8": [
                        {
                            "sale|0-100": 100,
                            "activeHeart|1-2": true,
                            "src":Mock.mock("@image('240x240', '#fff')"),
                            "src2":Mock.mock("@image('240x240', '#eee')"),
                            "href":"http://www.soufeel.com/",
                            "name":"Fingers with Hearts",
                            "sku":"soufeel",
                            "price|1-100.1-6": 1,
                            "priceOld|1-100.1-6": 1,
                            "tagType|1-3": 1,
                            "tags":["Free Shipping","Presale - Ships On 15th"],
                        }
                    ]
                })
                this.item.array=this.item.array.concat(newData.array)

            },
//            获取距离页面顶部的距离
            getTop:function(obj) {
                let iTop = 0;
                while(obj) {
                    iTop += obj.offsetTop;
                    obj = obj.offsetParent;
                }
                return iTop;
            },

            //滚动时候执行的方法
            documentScroll:function() {
//                滚动距离
                this.scroll = document.body.scrollTop;
//                页面高度
                this.documentHeight=document.documentElement.clientHeight;
//                临界点距离顶部的高度
                this.loadMoreOffsetTop=this.getTop(this.$refs.loadMore)

                if(this.loadMoreOffsetTop < this.documentHeight + this.scroll){
                    //数据获取，先用模拟数据，真实环境下用ajax数据
                    this.idx=1;
                    //真实环境的时候控制一下请求频率
                    this.getData()
                }

            },
            //三四列转变的方法
            layoutActive:function(){
                //激活布局改变
                this.activeLayout=!this.activeLayout;
                this.i=this.activeLayout?3:4;
            },

            //列表渐进过渡
            beforeEnter: function (el) {
                el.style.opacity = 0;
                el.style.transform = 'rotate(-30deg) translateX(100px) translateY(100px)';
                el.style.transformOrigin = '50% top';
            },
            //列表渐进过渡
            enter: function (el, done) {
                var delay = (this.idx++) * 200;
                setTimeout(function () {
                    el.style.opacity = 1;
                    el.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)';
                }, delay)
            },
            //列表渐进过渡
            leave: function (el, done) {
                var delay = (this.idx++) * 200;
                setTimeout(function () {
                    el.style.opacity = 0;
                    el.style.transform = 'rotate(-30deg) translateX(100px) translateY(100px)';
                }, delay)
            }

        }
    }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
    .com-layout{
        background: #ddd;
        padding: 40px 0;
        .com-list-t{
            width: 1180px;
            height: 55px;
            padding: 40px 0;
            margin: 0 auto;
            border: 1px solid red;
            overflow: hidden;
            position: relative;
            .com-control{
                float: left;
                height: 55px;
                background: #fff;
                width: 200px;
                text-align: center;
                line-height: 55px;
                color: #333;
            }
            .com-home{
                height: 55px;
                width: 100px;
                float: left;
                border: 1px solid red;
                position: absolute;
                left: 50%;
                top:50%;
                margin-left: -50px;
                margin-top: -28px;
            }
            .com-select{
                height: 55px;
                width: 200px;
                float: right;
                background: #0ff;
            }
        }
        .com-list-wrap{
            overflow-x: hidden;
            width: 1180px;
            margin: 0 auto;
        }
        .com-list-l{
            float: left;
            height: 200px;
            width: 0px;
            background: #fff;
            transition: width .5s ease-in-out;
        }
        .com-list-r{
            float: right;
            width: 1180px;
            transition: width .5s ease-in-out;
            overflow: hidden;
            .com-four-col{
                width: 1180px;
                position: relative;
                .com-list-block{
                    position: absolute;
                    transition: all .5s;
                }
            }
        }
        .load-more{
            width: 100%;
            height: 2px;
            background: red;
        }
    }
</style>
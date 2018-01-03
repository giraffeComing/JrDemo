<template>
    <div class="vue-directive">
        <div class="des">
            <p>①、自定义指令：需对元素直接进行 DOM 操作时，就可以考虑使用自定义指令。</p>
            <p>②、遇到第三方插件与 Vue.js 集成的问题，就可以尝试使用自定义指令实现。</p>
            <p style="margin-left: 2rem">如 Echarts ,前面的 Echarts 栗子用的是 ref 获取当前 DOM，十分不优雅;用自定义指令可以直接操作当前DOM</p>
            <p>③、稍微难理解一点的是修饰符，修饰符的值只有true和false两种，加了默认都是true，不加就都是false,如开关或者阻止冒泡等布尔型的情况</p>
            <p>④、以点击事件为例：业务逻辑内的点击事件适合用v-on，插件内的点击事件适合绑定在指令中</p>
        </div>
        <!--绑定一个点击改变颜色的自定义指令-->
        <div class="directives-demo1" v-changeColor = "{'bgcolor' : '#6bc69c','color' : '#fff'}">点我个试试</div>
        <!--绑定一个初始化的时候插入子节点的指令，带修饰符-->
        <div class="directives-demo2" v-appendChild.click></div>
        <!--使用echarts的时候要给容器事先定义好宽高，class中定义宽高无效-->
        <div class="directives-demo3" v-echarts style="width: 400px;height: 200px"></div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: '',
        components: { },
        methods:{ },
        data () {
            return {

            }
        },
//        组件内定义局部指令
        directives : {
//            demo指令仅用于说明指令内各钩子函数的使用时机
            demo:{
//                 做绑定的准备工作
//                 比如添加事件监听器，或是其他只需要执行一次的复杂操作
                bind: function (el,binding) {
//                        注意expression是以纯字符串的形式原样输出，不管是运算还是json都会变成纯字符串了，取值要用value
//                        console.log(binding.expression);
//                        console.log(binding.value);
                },
//                 当被绑定的元素插入到 DOM 中时
                inserted :function (el,binding,vnode) {

                },
//                 做清理工作
//                 比如移除在 bind() 中添加的事件监听器
                unbind: function () {

                },
//                所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
//                 根据获得的新值执行对应的更新
//                 对于初始值也会被调用一次
                update: function (newValue, oldValue) {

                },
//                指令所在组件的 VNode 及其子 VNode 全部更新后调用
                componentUpdated :function () {

                }
            },
//            一个点击改变颜色的指令，直接操作 DOM
            changeColor : {
                bind: function (el,binding) {
                    el.onclick = function () {
                        el.style.color = '#fff';
                        el.style.background = binding.value.bgcolor;
                        el.style.transition = 'all 1s';
                    }
                },
                inserted :function (el,binding,vnode) {
                    console.log(el);
                    console.log(binding);
                    console.log(vnode);
                    binding.modifiers.a = false;
                    console.log(binding.modifiers.a);
                },
                unbind: function () {

                },
                update: function (newValue, oldValue) {

                },
                componentUpdated :function () {

                }
            },
//            一个插入DOM的指令
            appendChild : {
                bind : function (el,binding) {
//                    定义一个列表类
                    function List(dom,listData,title) {
                        this.contain = dom;
                        this.listData = listData;
                        this.title = title;
                    }
                    List.prototype = {
                        init : function () {
                            this.appendTitle();
                            this.appendList();
                        },
//                        创建列表头
                        appendTitle : function () {
                            let p = document.createElement('p');
                            p.innerHTML= this.title;
                            this.contain.appendChild(p);
                        },
//                        创建列表
                        appendList : function () {
                            let Ul = document.createElement('ul');
//                            重构数组
                            this.listData = this.listData.map(function (item) {
                                return '<li>'+item+'</li>'
                            });
//                            数组拼成字符串，并塞进创建出来的 ul 中
                            Ul.innerHTML = this.listData.join('');
                            this.contain.appendChild(Ul);
                        }
                    };

                    let list = new List(el,['listDataOne','listDataTwo','listDataThree','listDataFour'],'js创建出来的列表');
                    list.init();

                    function bindAlertHi() {
                        el.onclick = function () {
                            alert('hi');
//                            移除绑定事件
                            el.onclick = null;
                        };
                    }
//                    有click修饰符的时候才会绑定点击事件，没有click修饰符不会报错
                    binding.modifiers.click ? bindAlertHi() : '';

                }
            },
//            引入echarts插件指令
            echarts : {
                bind : function (el) {
//                    这里面完全就是按照正常组件的使用方式进行使用，指令提供原生DOM和组件封装
                    let myChart = echarts.init(el);
                    let option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                        },
                        series: [
                            {
                                name:'访问来源',
                                type:'pie',
                                radius: ['50%', '70%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data:[
                                    {value:335, name:'直接访问'},
                                    {value:310, name:'邮件营销'},
                                    {value:234, name:'联盟广告'},
                                    {value:135, name:'视频广告'},
                                    {value:1548, name:'搜索引擎'}
                                ]
                            }
                        ]
                    };
                    myChart.setOption(option);

                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .vue-directive {
        padding-left: 10px;
        .des{
            line-height: 28px;
            overflow: hidden;
            p{
                float: left;
                border-bottom: 1px solid #6bc69c;
                clear: both;
            }
        }
        .directives-demo1{
            float: left;
            width: 200px;
            height: 200px;
            line-height: 200px;
            border: 1px solid #6bc69c;
            margin-top: 14px;
            cursor: pointer;
            text-align: center;
        }
        .directives-demo2{
            float: left;
            width: 200px;
            height: 200px;
            margin-left: 15px;
            border: 1px solid #6bc69c;
            margin-top: 14px;
            p{
                padding: 10px;
            }
            ul{
                /*padding-top: 20px;*/
                margin: 0 10px;
            }
            li{
                list-style: none;
                line-height: 28px;
            }
        }
        .directives-demo3{
            float: left;
            width: 200px;
            height: 200px;
            margin-left: 15px;
            border: 1px solid #6bc69c;
            margin-top: 14px;
        }
    }
</style>

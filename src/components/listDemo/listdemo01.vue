<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <div class="wrap-border">
                    <h4>环形进度</h4>
                    <!--环形进度条-->
                    <div style="float: left" v-for="item in circleProgress.array">
                        <v-circle-progress
                                :parentValue="item.value"
                                :radius="item.radius"
                                :borderWidth="item.borderWidth"
                                :borderColor="item.borderColor"></v-circle-progress>
                    </div>
                    <div style="float: left">
                        <pre>{{formatCircleProgress}}</pre>
                    </div>
                </div>
                <div class="wrap-border">
                    <h4>步骤条</h4>
                    <!-- 步骤条 -->
                    <v-steps>
                        <v-step :key="index" v-for="(item,index) in bar" :inStep=item.instep :index="index" :itemLength="bar.length" :stepTitle=item.title :active="item.active"></v-step>
                    </v-steps>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Mock from "mockjs";

    import VSteps from '../listDemo01/Steps'
    import VStep from '../listDemo01/Step'
    import VCircleProgress from '../listDemo01/CircleProgress'

    export default {
        name: 'readonlyView',

        components: {
            VStep,
            VSteps,
            VCircleProgress,
        },
        computed:{
            formatCircleProgress(){
                return JSON.stringify(this.circleProgress.array, null, 4)
            }
        },
        data() {
            return {
                aa:'',
//                mock数据，使用的时候要注意circleProgress.array才行
                circleProgress:Mock.mock({
                    "array|6": [
                        {
                            "value|0.1": 1,
                            "radius|20-80": 40,
                            "borderWidth|1-10":2,
                            "borderColor|1": [
                                "#77d4ff",
                                "#15d755",
                                "#ffa54e",
                                "#fd4d77",
                                "#d56fe8",
                                "#898ef7"
                            ]
                        }
                    ]
                }),

                //svg进度条,radius圆半径，value进度(0~1)，borderWidth边框宽度,borderColor边框颜色
//                circleProgress:[
//                    {
//                        value: 0.8,
//                        radius: 40,
//                        borderWidth: 2,
//                        borderColor: '#77d4ff'
//                    },
//                    {
//                        value: 0.4,
//                        radius: 40,
//                        borderWidth: 4,
//                        borderColor: '#15d755'
//                    },
//                    {
//                        value: 0.8,
//                        radius: 40,
//                        borderWidth: 6,
//                        borderColor: '#ffa54e'
//                    },
//                    {
//                        value: 0.3,
//                        radius: 60,
//                        borderWidth: 4,
//                        borderColor: '#fd4d77'
//                    },
//                    {
//                        value: 0.6,
//                        radius: 60,
//                        borderWidth: 6,
//                        borderColor: '#d56fe8'
//                    },
//                    {
//                        value: 0.9,
//                        radius: 60,
//                        borderWidth: 8,
//                        borderColor: '#898ef7'
//                    }
//
//                ],
                //步骤条
                bar: [{
                    instep: true,
                    title: "已受理",
                    active: false
                }, {
                    instep: true,
                    title: "已处理",
                    active: false
                }, {
                    instep: true,
                    title: "已确认",
                    active: true
                }, {
                    instep: false,
                    title: "进行中",
                    active: false
                }, {
                    instep: false,
                    title: "待完成",
                    active: false
                }]
            };
        }

    }
</script>
<style lang=scss rel="stylesheet/scss">
    .v-enter {
        opacity: 0;
        transform: translateY(-.5rem);
    }

    .v-enter-active {
        transition: all .5s;
    }

    .v-leave-active {
        opacity: 0;
        transition: all .5s;
        transform: translateY(-.5rem);
    }
    .wrap-border{
        h4{
            text-align: center;
            font-size: 16px;
            color: #aaa;
            line-height: 40px;
        }
        overflow: hidden;
        border: 1px solid #cdcdcd;
        padding: 0 20px 20px 20px;
        border-radius:10px;
        margin-bottom: 10px;
    }
</style>

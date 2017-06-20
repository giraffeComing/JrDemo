<template>
    <div class="view-home">
        <div style="float: left" v-for="echart in echarts">
            <e-charts :opts="echart.value" :echartSize="echart.size"></e-charts>
        </div>
    </div>
</template>
<script>
    import ECharts from '../listDemo04/Echarts'
    export default {
        name: 'homeView',
        components: {
            ECharts
        },
        data(){
            return{
                echarts:[
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{
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
                            ],
                            color: ['#00a497','#f09199','#89c3eb','#a59aca','#f7b977','#2ca9e1','#e95295','#f5e56b','#c7dc68','#cc7eb1']
                        }
                    },
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{
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
                                    radius: '55%',
                                    avoidLabelOverlap: false,
                                    data:[
                                        {value:335, name:'直接访问'},
                                        {value:310, name:'邮件营销'},
                                        {value:234, name:'联盟广告'},
                                        {value:135, name:'视频广告'},
                                        {value:1548, name:'搜索引擎'}
                                    ]
                                }
                            ],
                            color: ['#00a497','#f09199','#89c3eb','#a59aca','#f7b977','#2ca9e1','#e95295','#f5e56b','#c7dc68','#cc7eb1']
                        }
                    },
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{
                            color: ['#f09199'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                    axisTick: {
                                        alignWithLabel: true
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            series : [
                                {
                                    name:'直接访问',
                                    type:'bar',
                                    barWidth: '60%',
                                    data:[10, 52, 200, 334, 390, 330, 220]
                                }
                            ]
                        }
                    },
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{
                            color: ['#f7b977','#2ca9e1','#e95295','#f5e56b','#c7dc68','#cc7eb1','#00a497','#f09199','#89c3eb','#a59aca'],
                            title: {
                                text: '',
                                subtext: ''
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ['2011年', '2012年']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01]
                            },
                            yAxis: {
                                type: 'category',
                                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
                            },
                            series: [
                                {
                                    name: '2011年',
                                    type: 'bar',
                                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                                },
                                {
                                    name: '2012年',
                                    type: 'bar',
                                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                                }
                            ]
                        }
                    },
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{
                            title: {
                                text: ''
                            },
                            tooltip : {
                                trigger: 'axis'
                            },
                            legend: {
                                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    boundaryGap : false,
                                    data : ['周一','周二','周三','周四','周五','周六','周日']
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            series : [
                                {
                                    name:'邮件营销',
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {normal: {}},
                                    data:[120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name:'联盟广告',
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {normal: {}},
                                    data:[220, 182, 191, 234, 290, 330, 310]
                                },
                                {
                                    name:'视频广告',
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {normal: {}},
                                    data:[150, 232, 201, 154, 190, 330, 410]
                                },
                                {
                                    name:'直接访问',
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {normal: {}},
                                    data:[320, 332, 301, 334, 390, 330, 320]
                                },
                                {
                                    name:'搜索引擎',
                                    type:'line',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top'
                                        }
                                    },
                                    areaStyle: {normal: {}},
                                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                                }
                            ],
                            color: ['#00a497','#f09199','#89c3eb','#a59aca','#f7b977','#2ca9e1','#e95295','#f5e56b','#c7dc68','#cc7eb1']
                        }
                    },
                    {
                        size: {
                            width: '500px',
                            height: '400px'
                        },
                        value:{title: {
                            text: '',
                            left: 'center'
                        },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b} : {c}'
                            },
                            legend: {
                                left: 'left',
                                data: ['2的指数', '3的指数']
                            },
                            xAxis: {
                                type: 'category',
                                name: 'x',
                                splitLine: {show: false},
                                data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'log',
                                name: 'y'
                            },
                            series: [
                                {
                                    name: '3的指数',
                                    type: 'line',
                                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                                },
                                {
                                    name: '2的指数',
                                    type: 'line',
                                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                                },
                                {
                                    name: '1/2的指数',
                                    type: 'line',
                                    data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
                                }
                            ],
                            color: ['#00a497','#f09199','#89c3eb','#a59aca','#f7b977','#2ca9e1','#e95295','#f5e56b','#c7dc68','#cc7eb1']
                        }
                    }
                ]

            }
        }
    }
</script>
<style lang=scss rel="stylesheet/scss">
    .view-home{
        overflow: hidden;
    }
</style>


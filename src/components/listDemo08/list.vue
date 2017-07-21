<template>
    <ul class="listdemo08-list">
        <li v-for="(item,index) in listData" :class="{more:index == listData.length-1}" v-html="item"></li>
    </ul>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                listData:[
                    '1、先点击button1，1视图更新；后点击button2，2视图未更新',
                    '2、先点击button2，2视图不更新；后点击button1，1、2视图都会更新',
                    '3、先点击button1，1视图更新；后点击button2，2视图未更新；再点击button1,2视图更新',
                    '<span class="exp">解释</span>：不管什么时候点击button2，通过索引改变数组的行为都是成功的，数组确实已经改变了，可是不会同步到视图上，此时视图上任何的重新渲染都会使得arr2的改变更新到视图上',
                    '<span class="exp">More</span>：<a href="https://cn.vuejs.org/v2/guide/list.html#注意事项" target="_blank">Vue Official Issue Solve</a>'
                ]
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .listdemo08-list{
        width: 807px;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        margin: 0px 0 10px 0;
        li{
            padding: 5px 10px;
            font-size: 14px;
            list-style: none;
            line-height: 28px;
            border-bottom: 1px dashed #ccc;
            &.more{
                border-bottom: none;
            }
            a{
                text-decoration: none;
                color: rgb(34, 172, 56)
            }
            .exp{
                font-weight: bold;
            }
        }
    }
</style>

<template>
    <table>
        <tr>
            <td>id</td>
            <td>日期</td>
            <td>姓名</td>
            <td>地址</td>
            <td>操作</td>
        </tr>
        <tr v-for="(item,index) in opts">
            <td>{{item.id}}</td>
            <td>{{item.date}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td><button class="del-btn" @click="deleteTr(index,item)">删除</button></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
            opts:''
        },
        data () {
            return {

            }
        },
        mounted(){
//            修改props时候调用
//            this.changeProps()
        },
        methods:{
            changeProps:function () {
                this.opts[0].id="$1"
            },
            deleteTr:function (i,item) {
                //触发绑定在组件上的自定义事件
                this.$emit('deleteEvent',i)

                bus.$emit('postDataToDialog',item)

            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    table{
        width: 800px;
        margin: 0 auto;
        border: 1px solid #d0d0d0;
        border-radius: 4px;
        tr{
            line-height: 38px;
            border-bottom: 1px solid red !important;
            &:first-child{ font-weight: bold}
            &:nth-child(even){background:#F4F4F4;}
        }
        td{
            padding: 0 20px;
        }
    }
    .del-btn{
        padding: 2px 10px;
        border: none;
        background: #89d6ab;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        transition: all .5s;
        &:hover{
            background: #2da060;
        }
    }
</style>
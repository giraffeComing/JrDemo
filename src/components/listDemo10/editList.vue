<template>
    <div class="dia-mask" :style="maskStyle">
        <div class="dia-wrap">
            <div class="close" @click="hideMask">
                <i class="fa fa-close"></i>
            </div>
            <table class="dia-table" cellspacing="0" cellpadding="0"  border="0">
                <tr class="table-head">
                    <td>内容</td>
                    <td>类型</td>
                    <td>id</td>
                    <td>操作</td>
                </tr>
                <tr v-for="list in todolist">
                    <td>{{list.item}}</td>

                    <td v-if="list.type==1">未完成</td>
                    <td v-else-if="list.type==2">已完成</td>
                    <td v-else="list.type==3">已取消</td>

                    <td>{{list.id}}</td>
                    <td class="operation"><input type="button" @click="deleteevent(list.id)" class="del-btn" value="删除"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: '',
        components: {},
        data () {
            return {
                maskStyle:'',
            }
        },
        mounted(){
            this.maskStyle='height:'+this.$parent.$parent.$parent.$el.clientHeight+'px';

        },
        computed:{
            todolist: function () {
                return this.$store.state.modules_A.todoListData
            }
        },
        methods:{
            hideMask:function () {
//                触发自定义事件的时候不要忘了引号
                this.$emit('hideDia')
            },
            ...mapActions([
                'deleteevent'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .dia-mask{
        position: fixed;
        width: 100%;
        left: 0;
        top:0;
        background: rgba(0,0,0,0.2);
        z-index: 999;
        display: block;
    }
    .dia-wrap{
        position: relative;
        z-index: 1000;
        width: 600px;
        background: #fff;
        border-radius: 5px;
        margin: 100px auto 0;
        padding: 20px 0;
        h3{
            border-bottom: 1px solid #e9e9e9;
            height: 40px;
        }
        .dia-des{
            text-align: center;
            line-height: 100px;
            border-bottom: 1px solid #e9e9e9;
        }
        .btns{
            text-align: right;
            padding: 0 20px;
            height: 80px;
            line-height: 80px;
            button{
                width: 60px;
                height: 26px;
                border: none;
                color: #fff;
                &.btn-cancel{
                    background: #5bace4;
                }
                &.btn-confirm{
                    background: #ee4d4d;
                }
            }
        }
    }
    .dia-table{
        margin: 0 auto;
        width: 96%;
        border-collapse:collapse;
        .table-head{
            font-weight: bold;
            border-bottom: 1px solid #ccc;
        }
        tr{
            line-height: 40px;
            border-bottom: 1px dashed #ccc;
            &:last-child{
                border-bottom: none;
            }
        }
        td{
            padding: 0 10px;
        }
        .operation{
            width: 40px;
        }
        .del-btn{
            margin: 4px 4px 0 0;
            border: 1px solid rgb(34, 172, 56);
            background: none;
            border-radius: 2px;
            width: 60px;
            height: 22px;
            color: rgb(34, 172, 56);
            transition: all ease-in-out .3s;
            cursor: pointer;
            &:hover{
                background: rgb(34, 172, 56);
                color: #fff;
            }
        }
    }
    .close{
        position: absolute;
        right: -14px;
        top: -14px;
        background: #eee;
        cursor: pointer;
        font-size: 18px;
        width: 28px;
        height: 28px;
        border: 2px solid #8f8f8f;
        border-radius: 100px;
        line-height: 28px;
        text-align: center;
        transition: all ease-in-out .5s;
        &:hover{
            border: 2px solid rgb(34, 172, 56);
            transform: rotate(180deg);
        }
    }
</style>

<template>
    <div class="dia-mask" :style="maskStyle">
        <div class="dia-wrap">
            <h3></h3>
            <p class="dia-des">{{detail}}</p>
            <div class="btns">
                <button class="btn-cancel" @click="cancelDel">取消</button>
                <button class="btn-confirm" @click="confirmDel">确认</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                detail:'真的要删除本条数据么？',
                maskStyle:'',
            }
        },
        mounted(){
            this.maskStyle='height:'+this.$parent.$parent.$parent.$el.clientHeight+'px';
//            挂载完之后就开始监听事件，一旦该事件发生了就执行里面的方法
            bus.$on('postDataToDialog',(item)=>{
                let str='';
                for(let i in item){
                    str+=item[i]+' '
                }
                this.detail=str
            })
        },
        methods:{
            cancelDel:function(){
                this.$emit('hiddenMask')
            },
            confirmDel:function () {
                this.$emit('del')
            },
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
        z-index: 1000;
        width: 400px;
        background: #fff;
        border-radius: 5px;
        margin: 100px auto 0;
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
</style>

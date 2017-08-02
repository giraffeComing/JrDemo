<template>
    <div class="additem">
        <input type="text" class="ipt" placeholder="待办事项" v-model="iptVal">
        <input @click="submit(iptVal)" type="button" class="btn" value="提交">
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: '',
        components: {},
        data () {
            return {
                iptVal:''
            }
        },
        methods:{
            submit:function (item) {
                if(this.iptVal){
                    this.iptVal='';
                    this.addevent(item)
                }
            },
//            使用了mapActions就不用this.$store.dispatch('addevent')这么复杂的触发actions了
            ...mapActions([
                'addevent'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .additem{
        display: flex;
        height: 40px;
        line-height: 40px;
        .ipt{
            flex: 3;
            margin-right: 10px;
            padding: 0 10px;
            border: 1px solid #22ac38;
            border-radius: 4px;
            outline: none;
            color: #5e5e5e;
        }
        .btn{
            flex: 1;
            border: 1px solid #22ac38;
            background: none;
            border-radius: 2px;
            color: #22ac38;
            transition: all ease-in-out .3s;
            cursor: pointer;
            outline: none;
            &:hover{
                background: #22ac38;
                color: #fff;
            }

        }
    }
</style>

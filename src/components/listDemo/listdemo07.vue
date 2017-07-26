<template>
    <div class="listdemo07">
        <transition appear mode="out-in">
        <div>
            <!--子组件的自定义事件deleteEvent，演示v-on与$emit-->
            <v-table :opts="tableData" @deleteEvent="show"></v-table>
            <!--pre用于演示props被修改-->
            <!--<pre>-->
            <!--{{tableData}}-->
            <!--</pre>-->
            <transition name="a">
                <v-dialog v-show="showDialog" @hiddenMask="hide" @del="deleteData"></v-dialog>
            </transition>
        </div>
        </transition>
    </div>
</template>

<script>
    import VTable from '../listDemo07/table.vue'
    import VDialog from '../listDemo07/dialog'
    export default {
        name: '',
        components: {
            VTable,
            VDialog,
        },
        methods:{
            show:function (id) {
//                show的第一个参数就是$emit自定义事件时候带过来的值
                this.showDialog=true;
                this.deletIndex=id
            },
            hide:function () {
                this.showDialog=false
            },
            deleteData:function () {
                this.showDialog=false;
                this.tableData.splice(this.deletIndex,1)
            }
        },
        data () {
            return {
                deletIndex:-1,
                showDialog:false,
                tableData:[
                    {
                        id:1,
                        date:'2017-07-19',
                        name:'王小二',
                        address:'北京市海淀区后厂村'
                    },
                    {
                        id:2,
                        date:'2017-07-19',
                        name:'王小二',
                        address:'北京市海淀区后厂村'
                    },
                    {
                        id:3,
                        date:'2017-07-19',
                        name:'王小二',
                        address:'北京市海淀区后厂村'
                    },
                    {
                        id:4,
                        date:'2017-07-19',
                        name:'王小二',
                        address:'北京市海淀区后厂村'
                    },
                    {
                        id:5,
                        date:'2017-07-19',
                        name:'王小二',
                        address:'北京市海淀区后厂村'
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .listdemo07{
        display: flex;
        justify-content: center;
        >div{
            margin-left: -160px;
        }
    }
    .a-enter-active, .a-leave-active {
        transition: opacity .5s
    }
    .a-enter, .a-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>

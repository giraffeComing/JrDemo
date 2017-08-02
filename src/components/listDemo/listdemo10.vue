<template>
    <div class="vuex-demo">
        <div>
            <v-add-list></v-add-list>
            <v-todo-list></v-todo-list>
            <transition name="a">
                <v-edit v-show="showMask" @hideDia="hide"></v-edit>
            </transition>
            <div class="code">
                <pre v-if="toDoList.length!==0"> {{toDoList}} </pre>
            </div>
            <input type="button" value="编辑" v-if="toDoList.length!==0" class="edit-btn" @click="edit">
        </div>
    </div>
</template>

<script>
    import VTodoList from '../listDemo10/todoList'
    import VAddList from '../listDemo10/addItem'
    import VEdit from '../listDemo10/editList'
    export default {
        name: '',
        components: {
            VTodoList,
            VAddList,
            VEdit
        },
        data () {
            return {
                showMask: false
            }
        },
        methods:{
            edit:function () {
                this.showMask=true
            },
            hide:function () {
                this.showMask=false
            }
        },
        computed:{
            toDoList:function () {
//                取出state中的数据如果有模块名，记得要点上模块名
                return this.$store.state.modules_A.todoListData
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .vuex-demo{
        display: flex;
        position: relative;
        justify-content: center;
        >div{
            width: 600px;
            margin-left: -160px;
        }
        .code{
            position: fixed;
            right: 200px;
            top: 80px;
        }
        .edit-btn{
            float: right;
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
    .a-enter-active, .a-leave-active {
        transition: opacity .5s
    }
    .a-enter, .a-leave-to {
        opacity: 0
    }
</style>

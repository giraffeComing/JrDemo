<template>
    <div class="vuex-demo">
        <div>
            <v-add-list></v-add-list>
            <v-todo-list></v-todo-list>
            <div class="code">
                <pre> {{toDoList}} </pre>
            </div>
        </div>
    </div>
</template>

<script>
    import VTodoList from '../listDemo10/todoList'
    import VAddList from '../listDemo10/addItem'
    export default {
        name: '',
        components: {
            VTodoList,
            VAddList
        },
        data () {
            return {}
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
    }
</style>

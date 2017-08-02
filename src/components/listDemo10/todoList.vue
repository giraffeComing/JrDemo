<template>
    <div class="todo-list">
        <div class="todo-title">未完成</div>
        <ul class="todo-ul">
            <li v-for="list in getToDo">
                {{list.item}}
                <input type="button" class="btn-done" @click="doneevent(list.id)" value="完成">
                <input type="button" class="btn-cancel" @click="cancelevent(list.id)" value="取消">
            </li>
        </ul>
        <div class="todo-title">已完成</div>
        <ul class="todo-ul">
            <li v-for="list in getDone">
                {{list.item}}
            </li>
        </ul>
        <div class="todo-title">已取消</div>
        <ul class="todo-ul">
            <li v-for="list in getCancel">
                {{list.item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    export default {
        name: '',
        components: {},
        data () {
            return {

            }
        },
        methods:{
            ...mapActions([
                'addevent',
                'doneevent',
                'cancelevent'
            ])
        },
        computed:{
            ...mapGetters([
                'getToDo',
                'getDone',
                'getCancel'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .todo-list{
        margin-top: 20px;
        .todo-title{
            height: 32px;
            line-height: 32px;
            background: #3ad853;
            color: #fff;
            padding: 0 10px;
        }
        .todo-ul{
            margin: 5px 0;
            li{
                padding: 0 20px;
                color: #666;
                list-style: none;
                line-height: 32px;
                border-bottom: 1px solid #ccc;
                &:last-child{
                    border-bottom: none;
                    border-bottom: none;
                }
            }
        }
        .btn-done,.btn-cancel{
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
        .btn-cancel{

        }
    }
</style>

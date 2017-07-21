<template>
    <div class="listdemo08">
        <transition appear mode="out-in">
            <div>
                <!--列表组件-->
                <v-list></v-list>
                <!--视图一组件-->
                <v-child :opts="arr1" class="arr1">
                    <div class="tag" v-html="tagData.tag1"></div>
                    <button @click="changArr1">{{tagData.btn1}}</button>
                </v-child>
                <!--视图二组件-->
                <v-child :opts="arr2" class="arr2">
                    <div class="tag" v-html="tagData.tag2"></div>
                    <button @click="changArr2">{{tagData.btn2}}</button>
                </v-child>
            </div>
        </transition>
    </div>
</template>

<script>
    import VList from '../listDemo08/list'
    import VChild from '../listDemo08/childComponent'
    export default {
        name: '',
        components: {
            VList,
            VChild
        },
        data () {
            return {
                tagData:{
                    tag1:"通过数组splice方法改变数组最后一项<br/>this.arr1.splice(this.arr1.length-1,1,'(╯°Д°)╯︵┻━┻');",
                    btn1:"button1",
                    tag2:"通过数组索引值改变数组最后一项<br/>this.arr2[this.arr2.length-1]='(╯°Д°)╯︵┻━┻';",
                    btn2:"button2"
                },
                arr1:[
                    '(◕ᴗ◕✿)',
                    '⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄',
                    '(｀・ω・´)',
                    'o(*￣▽￣*)ブ',
                    '（づ￣3￣）づ╭❤～'
                ],
                arr2:[
                    '(◕ᴗ◕✿)',
                    '⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄',
                    '(｀・ω・´)',
                    'o(*￣▽￣*)ブ',
                    '（づ￣3￣）づ╭❤～'
                ]
            }
        },
//              Vue.js 不能检测到下面数组变化：
//              1.直接用索引设置元素，如 vm.items[indexOfItem] = newValue；
//              2.修改数据的长度，如 vm.items.length = newLength。
//              3、通过索引值去改数组，数组确实会变，但是视图不会更新；
//              4、要使用splice方法改变数组中的指定项内容才能同步到视图上的改变
        methods:{
            changArr1:function () {
                this.arr1.splice(this.arr1.length-1,1,'(╯°Д°)╯︵┻━┻');
            },
            changArr2:function () {
                this.arr2[this.arr2.length-1]='(╯°Д°)╯︵┻━┻';
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .listdemo08{
        display: flex;
        justify-content: center;
        >div{
            margin-left: -160px;
        }
    }
    button{
        float: right;
        margin: 4px 4px 0 0;
        border: 1px solid rgb(34, 172, 56);
        background: none;
        border-radius: 2px;
        width: 60px;
        height: 22px;
        color: rgb(34, 172, 56);
        transition: all .5s;
        cursor: pointer;
        &:hover{
            background: rgb(34, 172, 56);
            color: #fff;
        }
    }
    .arr1{
        &:after{
            content: '1';
        }
    }
    .arr2{
        &:after{
            content: '2';
        }
    }
</style>

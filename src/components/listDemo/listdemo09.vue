<template>
    <div>
        <button @click="showHeart">showbtn</button>
        <button @click="hideHeart">hidebtn</button>
        <!--<transition name="a">-->
            <!--<div class="shape" v-if="ifShow"></div>-->
        <!--</transition>-->
        <transition  v-on:before-enter="beforeEnter"
                     v-on:enter="enter"
                     v-on:after-enter="afterEnter"
                     v-on:enter-cancelled="enterCancelled"
                     v-on:before-leave="beforeLeave"
                     v-on:leave="leave"
                     v-on:after-leave="afterLeave"
                     v-on:leave-cancelled="leaveCancelled">
            <div class="shape" v-if="ifShow"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                ifShow:false
            }
        },
        created:function () {

        },
        methods:{
            showHeart:function () {
                this.ifShow=true
            },
            hideHeart:function () {
                this.ifShow=false
            },
            beforeEnter: function (el) {

//                进入时候的初始状态在beforeEnter中定义
                el.style.background='red'
                el.style.transition='all 1s'
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter: function (el, done) {

//                进入时候的过渡状态在enter中定义
                setTimeout(()=>{
                    el.style.background='green'
                },1000)
                done()
            },
            afterEnter: function (el) {

            },
            enterCancelled: function (el) {
                // ...
            },
            // --------
            // 离开时
            // --------
            beforeLeave: function (el) {
//                离开时候的初始状态在beforeLeave中定义
//                注意opacity要设置成1！！！！！！要不立刻就透明了就看不到效果了！！！！
                el.style.background='blue';
//                el.style.transition='10s';
                el.style.opacity='1'
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            leave: function (el, done) {
//                离开时候的终止状态在leave中定义
                setTimeout(()=>{
                    el.style.opacity='0'
                    el.style.background='yellow';
                    el.style.transition='all 4s'

                    setTimeout(()=>{
                        done()
                    },4000)
                },2000)

            },
            afterLeave: function (el) {
                // ...
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function (el) {
                // ...
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .shape{
        width: 100px;
        height: 100px;
        background: rgba(34, 172, 56, 1);
        border: 10px solid red;
    }
    /*6种过渡状态*/
    .a-enter{
        opacity: 0;
        background: red;
        transform: scale(0.2);
    }
    .a-enter-to{
        opacity: 1;
        /*background: rgba(34, 172, 56, 1);*/
    }
    .a-enter-active{
        transition: all 3s;
    }
    /*为啥leave的时候不是从蓝色开始过渡的呢？leave好像没有生效*/
    /*大概知道了，
    leave-to的状态部分从元素显示之后达到的本身的状态值开始，
    比如背景色，
    不能任性地越变，比如translateX也不能越变，*/
    .a-leave{
        opacity: 1;
        background: blue;
        transform: rotate(0deg);
        /*border: 20px solid black;*/
    }
    .a-leave-to{
        opacity: 0;
        transform: rotate(-180deg) translateX(-200px);
        border-radius: 100px;
        background: orange;
        border: 10px solid black;
    }
    .a-leave-active{
        transition: all 3s;
    }
    /*❤形状样式*/
    .heart {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        margin: 30px 60px;
        transform: rotate(45deg);
        /*background: rgba(34, 172, 56, 1);*/
        &:before, &:after {
            position: absolute;
            display: block;
            content: '';
            width: 80px;
            height: 80px;
            border-radius: 100%;
            /*background: rgba(34, 172, 56, 1);*/
        }
        &:before {
            left: -50%;
            top: 0;
        }
        &:after {
            right: 0;
            top: -50%;
        }
    }

</style>

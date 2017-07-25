<template>
    <div>
        <button @click="showHeart">showbtn</button>
        <button @click="hideHeart">hidebtn</button>
        <transition name="a">
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
        methods:{
            showHeart:function () {
                this.ifShow=true
            },
            hideHeart:function () {
                this.ifShow=false
            }
        }
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
        background: red !important;
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

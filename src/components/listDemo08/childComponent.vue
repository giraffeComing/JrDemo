<template>
    <div class="child-block">
        <slot></slot>
        <ul>
            <li v-for="item in opts">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            opts:''
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .child-block{
        float: left;
        width: 400px;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        margin-right: 5px;
        position: relative;
        .tag{
            border-bottom: 1px dashed #cdcdcd;
            font-size: 14px;
            padding: 5px 10px;
        }
        &:after{
            font-size: 200px;
            line-height: 220px;
            position: absolute;
            left: 140px;
            top:0;
            z-index: -1;
            color: #eee;
            opacity: 0.6;
            font-style: italic;
        }
    }
    ul{
        padding: 5px 10px;
    }
    li{
        line-height: 32px;
        list-style: none;
        color: rgb(34, 172, 56);
    }
</style>

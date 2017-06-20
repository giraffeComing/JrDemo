<template>
    <div class="com-footer">
        footer
    </div>
</template>

<script>
    export default {
        name: 'footer',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @keyframes bg-color-animation {
        from{
            background: #fff;
        }
        to{
            background: #d5d5d5;
        }
    }
    .com-footer{
        height: 80px;
        font-size: 32px;
        line-height: 80px;
        text-align: center;
        animation: bg-color-animation 7s linear;
        animation-fill-mode: forwards;
    }
</style>

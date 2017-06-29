<template>
    <div class="v-model">
        <mycounter v-model="num"></mycounter>
        这是在父组件里的数据：{{num}}
    </div>
</template>

<script>
    import mycounter from "../listDemo06/mycounter"
    export default {
        name: '',
        components: {
            mycounter
        },
        data () {
            return {
                num: 11,
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .v-model{
        position: absolute;
        left: 50%;
        margin-left: -120px;
        width: 240px;
        padding: 100px;
        border: 1px solid #ccc;
    }
</style>

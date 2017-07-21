<template>
    <div class="listdemo06">
        <transition appear mode="out-in">
        <div class="v-model">
            <mycounter v-model="num"></mycounter>
            这是在父组件里的数据：{{num}}
        </div>
        </transition>
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
    .listdemo06{
        display: flex;
        justify-content: center;
        >div{
            margin-left: -160px;
        }
    }
    .v-model{
        width: 240px;
        padding: 100px;
        border-radius: 5px;
        border: 1px solid #cdcdcd;
    }
</style>

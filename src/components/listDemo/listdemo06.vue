<template>
    <transition appear mode="out-in">
        <div>
            <div class="listdemo06">
                <div class="v-model">
                    <mycounter v-model="num"></mycounter>
                    这是在父组件里的数据：{{num}}
                </div>
            </div>
            <div class="rate-stars">
                我是父组件，我只关心结果是几星：{{starVal}}
                <!--组件的扩展点：-->
                <!--1、不固定星数-->
                <!--2、颜色升级-->
                <!--3、其他形状-->
                <v-rate-star v-model="starVal"></v-rate-star>
            </div>
        </div>
    </transition>
</template>

<script>
//    计数器组件
    import mycounter from "../listDemo06/mycounter";
    import VRateStar from "../listDemo06/rateStar";
    export default {
        name: '',
        components: {
            mycounter,
            VRateStar
        },
        data () {
            return {
                num: 11,
                starVal: 2,
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
    .rate-stars{
        text-align: center;
        margin: 50px 0 0 -160px;
        line-height: 36px;
    }
</style>

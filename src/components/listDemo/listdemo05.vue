<template>
    <div>
        <transition appear mode="out-in">
            <ul>
                <li>111</li>
                <li>222</li>
            </ul>

        </transition>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                tabs:[
                    {
                        tabContent:'tab01',
                        tabView:''
                    },
                    {
                        tabContent:'tab02'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>

<template>
    <div>
        {{aa}}
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        mounted(){
            this.$store.commit('increment')
            this.$store.commit('incrementNum')
            console.log(this.$store.state)
            console.log(this.$store.getters)
        },
        methods:{
            showHeart:function () {
                this.ifShow=true
            },
            hideHeart:function () {
                this.ifShow=false
            }
        },
        computed:{
            aa:function () {
                return this.$store.getters
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>

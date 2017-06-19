<template>
    <div>
        111
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        mounted() {
            this.axios.get('http://localhost:8080/static/test.json').then(response => {
                console.log('success')
            }, response => {
                console.log('error')
            })
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>

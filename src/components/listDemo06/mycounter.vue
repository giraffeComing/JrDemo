<template>
    <div>
        <h1>这是在子组件里的数据：{{value}}</h1>
        <div class="btns">
            <button @click="plus">+</button>
            <button @click="minu">-</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            value: Number
        },
        data: function() {
            return {
                val: this.value
            }
        },
        methods: {
            plus() {
                this.val = this.val + 1
                this.$emit('input', this.val)
            },
            minu() {
                if(this.val>0){
                    this.val = this.val-1
                    this.$emit('input', this.val)
                }
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

    h1{
        font-size: 18px;
        font-weight: normal;
    }
    .btns{
        margin: 10px 0;
        button{
            width: 100px;
            height: 40px;
            background: orange;
            border: none;
            font-size: 36px;
        }
    }
</style>

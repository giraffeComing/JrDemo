<template>
    <div class="stars" @mouseleave="outStar">
        <div>
            <div
                    v-for="(n,index) in 5"
                    class="star fa"
                    :class="{'fa-star-o':noActive[index],'fa-star':!noActive[index]}"
                    @mouseenter="hover(index)"
                    @click="clickStar(index)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
//            v-model依赖的value属性
            value:0,
        },
        created(){
//            遍历数组初始化赋值
            this.forEachArray(this.val-1)
        },
        data () {
            return {
                noActive:[true,true,true,true,true],
                val: this.value
            }
        },
        methods:{
            hover:function (idx) {
//                鼠标移入颜色切换逻辑
                this.forEachArray(idx)
            },
            outStar:function () {
                if(this.val==0){
                    this.noActive=[true,true,true,true,true]
                }
                else {
                    this.forEachArray(this.val-1)
                }
            },
            clickStar:function (idx) {
                this.val=idx+1;
//                v-model依赖的input事件
                this.$emit('input',this.val)
            },
            forEachArray:function (idx) {
                this.noActive.forEach((e,i)=>{
                    if(i<=idx){
                        this.noActive.splice(i,1,false)
                    }
                    else {
                        this.noActive.splice(i,1,true)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .stars{
        width: 155px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .star{
        width: 26px;
        height: 26px;
        color: orange;
        float: left;
        padding-right: 5px;
        font-size: 26px;
        cursor: pointer;
    }
</style>

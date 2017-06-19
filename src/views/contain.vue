<template>
    <div class="com-contain">
        <div class="com-menu">
            <ul>
                <!--home前面要带'/'-->
                <li><router-link :to="{ path: '/home/list1' }">列表</router-link></li>
                <li><router-link :to="{ path: '/home/list2' }">选项卡</router-link></li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
        <div class="com-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contain',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .com-contain{
        flex: 1;
        background: #0ff;
        font-size: 32px;
        .com-menu{

        }
    }
</style>

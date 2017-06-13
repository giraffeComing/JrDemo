<template>
    <div class="common-swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in dataVal"><a :href="item.href"><img :src="item.imgSrc"/></a></div>
            </div>
            <!--分页及按钮-->
            <div class="swiper-pagination"></div>
            <!--<div class="swiper-button-next"><i class="fa fa-angle-right"></i></div>-->
            <!--<div class="swiper-button-prev"><i class="fa fa-angle-left"></i></div>-->
        </div>
    </div>
</template>
<script>
    //引入swiper
    import swiper from 'swiper';
    import swipercss from 'swiper/dist/css/swiper.css';
    export default{
        name: 'Swiper',
        props:{
            //swiper的配置项
            opts:{},
            //swiper的数据
            dataVal:{
                type:Array
            },
        },
        data(){
            return {

            }
        },
        mounted(){
            //挂在完成之后初始化swiper
            var commonSwiper = new Swiper('.swiper-container', this.opts);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .common-swiper{
        .swiper-container {
            width: 100%;
            height: 200px;
            .swiper-button-next{
                width: 50px;
                height: 50px;
                border-radius: 25px;
                background: rgba(0,0,0,0.2);
                transform: scale(0);
                transition: all ease-in-out .3s !important;
                text-align: center;
                i{
                    font-size: 28px;
                    color: #fff;
                    padding-top: 11px;
                }
            }
            .swiper-button-prev{
                width: 50px;
                height: 50px;
                border-radius: 25px;
                background: rgba(0,0,0,0.2);
                transform: scale(0);
                transition: all ease-in-out .3s !important;
                text-align: center;
                i{
                    font-size: 28px;
                    color: #fff;
                    padding-top: 11px;
                }
            }
            /*.swiper-button-next{*/
                /*&:hover{*/
                    /*background: rgba(0,0,0,0.8);*/
                /*}*/
            /*}*/
            /*.swiper-button-prev{*/
                /*&:hover{*/
                    /*background: rgba(0,0,0,0.8);*/
                /*}*/
            /*}*/
            /*&:hover{*/
                /*.swiper-button-next{*/
                    /*transform: scale(1);*/
                /*}*/
                /*.swiper-button-prev{*/
                    /*transform: scale(1);*/
                /*}*/
            /*}*/
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            a{ display: block}
            img{
                width: 100%;
                height: 500px;
            }
        }
        .swiper-wrapper{
            transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
        }
        .swiper-pagination{
            transition: all .6s ease-in-out !important;
            &:hover{
                transform: scale(2);
            }
        }
        .swiper-pagination-bullet-active{
            background: #333 !important;
        }
    }
</style>
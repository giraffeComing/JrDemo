<template>
    <div class="com-list-block" :style="{ width: wid+ 'px', height: hig + 'px',top: pos.top+ 'px', left:pos.left + 'px' }">
        <!--心形 active-->
        <i class="heart" :class="{active:opts.activeHeart}"></i>
        <!--打折标签-->
        <div class="sale-tag" v-if="opts.sale">{{opts.sale}}% OFF</div>
        <!--图片组-->
        <div class="img-group">
            <!--这里即便只有一张图也要传两遍！！！不然会影响显隐的逻辑控制-->
            <a :href="opts.href" class="img-up"><img :src="opts.src"></a>
            <a :href="opts.href" class="img-down"><img :src="opts.src2"></a>
        </div>
        <!--品名-->
        <p class="product-name">{{opts.name}}</p>
        <!--新老价钱-->
        <p class="price"><span class="price-new">${{opts.price}}</span><span class="price-old">${{opts.priceOld}}</span></p>
        <!--标签组green-tag\orange-tag\red-tag-->
        <div class="tag-group" v-if="opts.tagType==1">
            <div class="green-tag">{{opts.tags[0]}}</div>
            <div class="green-tag">{{opts.tags[1]}}</div>
        </div>
        <div class="tag-group" v-else-if="opts.tagType==2">
            <div class="red-tag">{{opts.tags[0]}}</div>
            <div class="red-tag">{{opts.tags[1]}}</div>
        </div>
        <div class="tag-group" v-else>
            <div class="orange-tag">{{opts.tags[0]}}</div>
            <div class="orange-tag">{{opts.tags[1]}}</div>
        </div>
        <!--按钮-->
        <button class="add-cart-btn">Add To Cart</button>
    </div>
</template>
<script>
    import Mock from "mockjs";
    export default{
        name: 'ComListBlock',
        methods:{

        },
        props:{
            wid:{
                type: Number,
                default: 292
            },
            hig:{
                type: Number,
                default: 370
            },
            opts:{
            },
            pos:{
            }
        },
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .com-list-block{
        /*width: 292px;*/
        /*height: 370px;*/
        float: left;
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-right: 1px;
        /*心*/
        .heart {
            display: inline-block;
            position: absolute;
            right: 5px;
            top: 10px;
            width: 12px;
            height: 12px;
            margin: 0 6px;
            transform: rotate(45deg);
            background: #ccc;
            transition: all .3s;
            cursor: pointer;
            opacity: 0;
            z-index: 3;
            &:before, &:after {
                position: absolute;
                display: block;
                content: '';
                width: 12px;
                height: 12px;
                border-radius: 100%;
                background: #ccc;
                transition: background-color .3s;
            }
            &:before {
                left: -50%;
                top: 0;
            }
            &:after {
                right: 0;
                top: -50%;
            }
            &:hover{
                background: red;
                &:before, &:after {
                    background: red;
                }
                /*控制一下逻辑，心形hover的时候保证图片的上下位置*/
                &~.img-group{
                    a{
                        &.img-up{ opacity: 0}
                        &.img-down{ opacity: 1}
                    }
                }
            }
            /*激活的时候加上这个class*/
            &.active{
                background: red;
                &:before, &:after {
                    background: red;
                }
            }
        }
        //鼠标移入块内触发的动画组
        &:hover{
            .add-cart-btn{
                /*bottom: 0;*/
                /*opacity: 1;*/
                display: block;
                animation: flipInX .5s;
            }
            .heart{ opacity: 1}
            .product-name{ opacity: 0}
        }
        .add-cart-btn{
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: #fff;
            text-align: center;
            background: #20c3b6;
            border: none;
            position: absolute;
            display: none;
            bottom: 0;
            /*<!--bottom: -50px;-->*/
            /*<!--opacity: 0.3;-->*/
            /*<!--transition: opacity .3s ease-in-out,bottom .3s ease-in-out;-->*/
            cursor: pointer;
            z-index: 1;
            transition: background .3s;
            &:hover{
                background: #09b1a4;
            }
        }
        .price{
            text-align: center;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
            font-weight: 600;
            position: absolute;
            bottom: 50px;
            width: 100%;
            .price-new{
                color: #000;
            }
            .price-old{
                text-decoration:line-through;
                color: #999;
                margin-left: 6px;
            }
        }
        .product-name{
            font-size: 12px;
            font-style: italic;
            letter-spacing: 1px;
            color: #888;
            text-align: center;
            position: absolute;
            width: 100%;
            bottom: 76px;
            opacity: 1;
            transition: opacity .5s;
        }
        .tag-group{
            width: 100%;
            height: 48px;
            position: absolute;
            bottom: 0;
            font-size: 12px;
            text-align: center;
            font-family: 'OpenSans-Semibold';
            .green-tag,.orange-tag,.red-tag{
                display: inline-block;
                height: 16px;
                padding: 0 5px;
                clear: both;
                margin-bottom: 5px;
            }
            .green-tag{
                border: 1px solid #48d46f;
                color: #48d46f;
            }
            .orange-tag{
                border: 1px solid #ff7e00;
                color: #ff7e00;
            }
            .red-tag{
                border: 1px solid #f4354a;
                color: #f4354a;
            }
        }
        /*图片切换的交互适合放在外面*/
        &:hover{
            .img-group{
                a{
                    &.img-up{ opacity: 0}
                    &.img-down{ opacity: 1}
                }
            }
        }
        .img-group{
            width: 100%;
            height: 240px;
            /*&:hover{*/
            /*a{*/
            /*&.img-up{ opacity: 0}*/
            /*&.img-down{ opacity: 1}*/
            /*}*/
            /*}*/
            a{
                width: 100%;
                height: 240px;
                display: block;
                position: absolute;
                left: 0;
                opacity: 1;
                /*background: url("../../../assets/imgs/loading.gif") no-repeat center top;*/
                transition: opacity .3s;
                img{
                    width: 100%;
                    height: 240px !important;
                }
                &.img-up{
                    z-index: 2;
                    opacity: 1;
                }
                &.img-down{
                    z-index: 1;
                    opacity: 0;
                }
            }

        }
        .sale-tag{
            width: 100%;
            position: absolute;
            top: 18px;
            left: -40%;
            text-align: center;
            height: 16px;
            background: #f4354a;
            color: #fff;
            transform:rotate(-45deg);
            z-index: 3;
            font-size: 12px;
        }

    }
</style>
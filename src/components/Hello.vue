<template>
  <div class="hello">
    <!--轮播 调用轮播的时候传入相应的轮播配置和数据-->
    <v-swiper :opts="swiperOpts" :dataVal="imgs"></v-swiper>
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
      <!--<br>-->
      <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import VSwiper from "./swiper";
  //mock数据
  import Mock from "mockjs"
export default {
  name: 'hello',
    components:{
        VSwiper
    },
  data () {
    return {
        swiperOpts:{
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            speed:200,
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
        },
        imgs:[
            {
                "imgSrc":Mock.mock("@image('500x200', '#d9dded', '#FFF', 'jpg', '')"),
                "href":"http://www.soufeel.com/",
            },
            {
                "imgSrc":Mock.mock("@image('500x200', '#d3e0df', '#FFF', 'jpg', '')"),
                "href":"http://www.soufeel.com/",
            },
            {
                "imgSrc":Mock.mock("@image('500x200', '#d3cccc', '#FFF', 'jpg', '')"),
                "href":"http://www.soufeel.com/",
            }
        ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

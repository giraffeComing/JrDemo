import Vue from 'vue'
import Router from 'vue-router'
// 404组件
import Error from '@/components/404'

// 菜单组件
import VListDemo01 from '../components/listDemo/listdemo01'
import VListDemo02 from '../components/listDemo/listdemo02'
import VListDemo03 from '../components/listDemo/listdemo03'
import VListDemo04 from '../components/listDemo/listdemo04'
import VListDemo05 from '../components/listDemo/listdemo05'
import VListDemo06 from '../components/listDemo/listdemo06'
import VListDemo07 from '../components/listDemo/listdemo07'

//首页
import VIndex from '../views/index/index'


Vue.use(Router)


// 路由配置
const routes = [
    //路由重定向
    { path: '/', redirect: '/home'},
    {
        path: '/home',
        component: VIndex,
        // name: 'VIndex',
        children: [
            // 子路由的重定向
            { path: '/', redirect: 'list_demo1' },
            {
                path: 'list_demo1',
                component: VListDemo01,
                name: 'VListDemo01'
            },
            {
                path: 'list_demo2',
                component: VListDemo02,
                name: 'VListDemo02'
            },
            {
                path: 'list_demo3',
                component: VListDemo03,
                name: 'VListDemo03'
            },
            {
                path: 'list_demo4',
                component: VListDemo04,
                name: 'VListDemo04'
            },
            {
                path: 'list_demo5',
                component: VListDemo05,
                name: 'VListDemo05'
            },
            {
                path: 'list_demo6',
                component: VListDemo06,
                name: 'VListDemo06'
            },
            {
                path: 'list_demo7',
                component: VListDemo07,
                name: 'VListDemo07'
            },
        ]

    },
    //404页面
    { path: '*', component: Error, name: 'Error' },
]

//初始化路由
export default new Router({
    routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rate from '@/components/rate'
import User from '@/components/user'
import Detail from '@/components/detail'
import Error from '@/components/404'

//首页
import VIndex from '../views/index/index'


Vue.use(Router)


// // 路由配置
const routes = [
    //路由的重定向
    { path: '/', redirect: '/home'},
    {
        path: '/home',
        component: VIndex,
        name: 'VIndex',
        children: [
            // { path: '/', redirect: 'index/index' },
            {
                path: 'list1',
                component: Rate,
                name: 'Rate'
            },
            {
                path: 'list2',
                component: User,
                name: 'User'
            },
            // {
            //     path: 'home/list3',
            //     component: Detail,
            //     name: 'Detail'
            // },

        ]

    },
    // { path: '/rate', component: Rate, name: 'Rate' },
    // { path: '/user', component: User, name: 'User' },
    // { path: '/detail', component: Detail, name: 'Detail' },
    { path: '*', component: Error, name: 'Error' },
]


export default new Router({
    routes
})



// import FrameLayout from '../components/layout/Frame'
// import LoginView from '../views/LoginView'
// import View404 from '../views/View404'
// import TestView from '../views/TestView'
//
//
// // 路由配置
// const routes = [
//     { path: '/', redirect: '/home/index/index' },
//     { path: '/home', component: FrameLayout, children: require('./module.home.js').routes },
//     { path: '/login', component: LoginView, name: 'loginView' },
//     { path: '/test', component: TestView, name: 'testView' },
//     { path: '*', component: View404, name: 'view404' },
// ];
//
// // 初始化路由
// export default new VueRouter({
//     // mode: 'history',
//     routes,
// });
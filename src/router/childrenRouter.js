/**
 * Created by zhangwei36 on 2017/6/19.
 */
import Rate from '@/components/rate'
import User from '@/components/user'
import Detail from '@/components/detail'
export var routes = [
    // { path: '/', redirect: 'index/index' },
    {
        path: 'home/list1',
        component: Rate,
        name: 'Rate'
    },
    {
        path: 'home/list2',
        component: User,
        name: 'User'
    },
    {
        path: 'home/list3',
        component: Detail,
        name: 'Detail'
    },

]

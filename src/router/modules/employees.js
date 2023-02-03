// 导出员工的路由
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/employees', // 路由地址
  name: 'employees ',
  component: Layout,
  children: [{
    path: '', // 这里不需要写  代表二级默认的路由
    component: () => import('@/views/employees'),
    meta: {
      title: '员工管理',
      icon: 'people'
      // 这里是在左侧菜单栏上显示的数据
    }
  },
  {
    path: 'detail/:id', // query传参 动态路由传参
    component: () => import('@/views/employees/detail'),
    hidden: true, // 不在左侧菜单显示
    meta: {
      title: '员工详情' // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
    }
  }
  ]
}

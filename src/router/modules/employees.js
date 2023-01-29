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
  }]
}

// 导出员工的路由
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/permission', // 路由地址
  name: 'permission ',
  component: Layout,
  children: [{
    path: '', // 这里不需要写  代表二级默认的路由
    component: () => import('@/views/permission'),
    meta: {
      title: '权限管理',
      icon: 'lock'
      // 这里是在左侧菜单栏上显示的数据
    }
  }]
}

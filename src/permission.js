// 路由守卫
import router from '@/router'
import store from './store' // 引入store实例
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 不需要导出
// 前置守卫
// next是钩子函数  不执行就会卡死
// next（） 放过
// next（false） 禁止
// next（指定地址） 指定跳转
const WhiteList = ['/login', '/404'] // 白名单
// 前置守卫
router.beforeEach(async(to, from, next) => {
  nprogress.start()// 开启进度条
  if (store.getters.token) {
    //   如果有token
    if (to.path === '/login') {
      next('/')// 跳到主页
    } else {
      // 只要放过 就进行获取用户信息
      // 如果当前储存中 有用户的id 就放行  如果没有 就进行获取
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')// 等待获取之后在进行跳转
      }
      next()
    }
  } else {
    if (WhiteList.indexOf(to.path) > -1) {
      //
      next()
    } else {
      next('/login')
    }
  }
  nprogress.done()// 解决进度条不关闭的情况  手动关闭
})
// 后置守卫
router.afterEach(() => {
  nprogress.done()
})

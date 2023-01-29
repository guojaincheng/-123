import request from '@/utils/request'

// 登录
export function login(data) {
  // 返回了promise对象
  return request({
    url: '/sys/login',
    method: 'post',
    data // body参数体位于data
  })
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {

}

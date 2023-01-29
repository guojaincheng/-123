import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 设置一个独一的
const timeKey = 'hrsaas-timestamp-key'// 设置一个独一无二的时间戳
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 读取时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}

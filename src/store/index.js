// 封装sessionStorage函数 给其他模块运用
// key value    value必须为字符串
const KEY = 'hm-username'
export default {
  // 设置、存储user对象数据
  setUser (user) {
    const localUser = this.getUser()
    const newUser = { ...localUser, ...user }
    window.sessionStorage.setItem(KEY, JSON.stringify(newUser))
  },
  // 获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  clearUser () {
    window.sessionStorage.removeItem(KEY)
  }
}

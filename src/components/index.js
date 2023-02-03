import PageTools from '@/components/PageTools'
import UploadExcel from './UploadExcel'
// 负责全局自定义组件
export default {
  install(Vue) {
    // 组件注册全局
    Vue.component('PageTools', PageTools) // 注册工具栏组件
    Vue.component('UploadExcel', UploadExcel) // 注册导入excel组件
  }
}

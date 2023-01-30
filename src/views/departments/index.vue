<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 实现页面的基本布局 -->
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <!-- 缺少treeNode -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <!--放置一个属性   这里的props和我们之前学习的父传子 的props没关系-->
        <el-tree :data="departs" :props="delf" default-expand-all="true">
          <!-- 说明el-tree里面的这个内容 就是插槽内容 => 填坑内容  => 有多少个节点循环多少次 -->
          <!-- scope-scope 是 tree组件传给每个节点的插槽的内容的数据 -->
          <!-- 顺序一定是 执行slot-scope的赋值 才去执行 props的传值 -->
          <tree-tools slot-scope="{ data }" :tree-node="data" @addDepts="addDepts" @delDepts="getDepartments" />
        </el-tree>
      </el-card>
    </div>
    <!-- 放置弹出框样式 进行观察 -->
    <AddDept :show-dialog="showDialog" :tree-node="node" />
  </div>
</template>
<script>
// 引入组件
import TreeTools from './components/tuee-tools.vue'
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils/index'
import AddDept from './components/add-dept'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TreeTools, AddDept
  },
  data() {
    return {
      // 注册组件
      company: { // 头部数据
        name: '',
        manager: ''
      },
      delf: {
        label: 'name',
        children: 'children'
      },
      departs: [],
      // 树形结构数据
      showDialog: false,
      // 默认不显示
      node: null
      // 添加到那个部门
    }
  },
  created() {
    this.getDepartments()// 调用自己的方法
  },
  methods: {
    async getDepartments() { // 常用的数据方法 需要单独封装
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      // 这里定义一个空串  因为 它是根 所有的子节点的数据pid 都是 ""
      this.departs = transListToTreeData(result.depts, '')
    },
    // 监听数据  是否显示弹出
    addDepts(node) {
      this.showDialog = true // 显示弹层
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    }
  }
}

</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>

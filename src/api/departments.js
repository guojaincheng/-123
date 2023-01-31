import request from '@/utils/request'

// 分装获取组织架构的axios
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}
// 删除部门
export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'DELETE'
    //   delete 删除业务
    //   put    修改业务
    //   git    获取业务
    //   pust   增加或修改业务
  })
}
// 新增部门
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}
// 获取部门详情
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}
// 编辑部门
export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}

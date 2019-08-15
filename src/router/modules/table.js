/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: { title: 'Table', icon: 'table' },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/table/index'),
      meta: { title: 'Sample Table', icon: 'table' }
    },
    {
      path: 'table1',
      name: 'Table1',
      component: () => import('@/views/table/table1'),
      meta: { title: 'Sample Table1', icon: 'table' }
    },
    {
      path: 'table2',
      name: 'Table2',
      component: () => import('@/views/table/table2'),
      meta: { title: 'Sample Table2', icon: 'table' }
    },
    {
      path: 'dynamic-table',
      name: 'DynamicTable',
      component: () => import('@/views/table/dynamic-table/index'),
      meta: { title: 'Dynamic Table', icon: 'table' }
    },
    {
      path: 'complex-table',
      name: 'ComplexTable',
      component: () => import('@/views/table/complex-table'),
      meta: { title: 'Complex Table', icon: 'table' }
    },
    {
      path: 'drag-table',
      name: 'DragTable',
      component: () => import('@/views/table/drag-table'),
      meta: { title: 'Drag Table', icon: 'table' }
    },
    {
      path: 'inline-edit-table1',
      name: 'InlineEditTable1',
      component: () => import('@/views/table/inline-edit-table1'),
      meta: { title: 'InlineEdit Table1', icon: 'table' }
    },
    {
      path: 'inline-edit-table2',
      name: 'InlineEditTable2',
      component: () => import('@/views/table/inline-edit-table2'),
      meta: { title: 'InlineEdit Table12', icon: 'table' }
    }
  ]
}
export default tableRouter

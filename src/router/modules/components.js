import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Components',
  meta: {
    title: 'Components',
    icon: 'nested'
  },
  children: [
    {
      path: 'drag',
      component: () => import('@/views/components/drag/index'), // Parent router-view
      name: 'Drag',
      meta: { title: 'Drag' },
      children: [
        {
          path: 'drag-1',
          component: () => import('@/views/components/drag/drag-1'),
          name: 'Drag-1',
          meta: { title: 'Drag-1' }
        },
        {
          path: 'drag-2',
          component: () => import('@/views/components/drag/drag-2'),
          name: 'Drag-2',
          meta: { title: 'Drag-2' }
        },
        {
          path: 'drag-3',
          component: () => import('@/views/components/drag/drag-3'),
          name: 'Drag-3',
          meta: { title: 'Drag-3' }
        },
        {
          path: 'drag-4',
          component: () => import('@/views/components/drag/drag-4'),
          name: 'Drag-4',
          meta: { title: 'Drag-4' }
        },
        {
          path: 'drag-5',
          component: () => import('@/views/components/drag/drag-5'),
          name: 'Drag-5',
          meta: { title: 'Drag-5' }
        },
        {
          path: 'drag-6',
          component: () => import('@/views/components/drag/drag-6'),
          name: 'Drag-6',
          meta: { title: 'Drag-6' }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import('@/views/components/menu2/index'),
      meta: { title: 'menu2' }
    }
  ]
}

export default componentsRouter

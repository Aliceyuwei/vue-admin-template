import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Permission',
        component: () => import('@/views/permission/index'),
        meta: { title: 'Permission', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/components',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'components',
  //       name: 'Components',
  //       component: () => import('@/views/components/index'),
  //       meta: { title: 'Components', icon: 'form' }
  //     }
  //   ]
  // },
  //
  {
    path: '/components',
    component: Layout,
    // redirect: '/nested/menu1',
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
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/components/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
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
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'tab',
        name: 'Tab',
        component: () => import('@/views/tab/index'),
        meta: { title: 'Tab', icon: 'form' }
      }
    ]
  },

  {
    path: '/chart',
    component: Layout,
    children: [
      {
        path: 'chart',
        name: 'Chart',
        component: () => import('@/views/chart/index'),
        meta: { title: 'Chart', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/error-page',
    component: Layout,
    // redirect: '/table/complex-table',
    name: 'ErrorPage',
    meta: { title: 'Error Page', icon: 'table' },
    children: [
      {
        path: '401',
        name: '401',
        component: () => import('@/views/error-page/401'),
        meta: { title: '401', icon: 'table' }
      },
      {
        path: '404',
        name: '404',
        component: () => import('@/views/error-page/404'),
        meta: { title: '404', icon: 'table' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


/* Router Modules */
import chartsRouter from './modules/charts'



export const constantRoutes = [
 
  {
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true
  },
  chartsRouter

]


const createRouter = () => new Router({

  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

/**动态路由 */
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

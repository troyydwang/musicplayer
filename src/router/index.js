import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/pages/index"
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import Listcate from "@/pages/listcate"
import Search from "@/pages/search"
import Ucenter from "@/pages/ucenter"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "artists",
          component: Artists
        },
        {
          path: "listcate",
          component: Listcate
        },
        {
          path: "ucenter",
          component: Ucenter
        },
        {
          path: "search",
          component: Search
        }
      ]
    }
  ]
})

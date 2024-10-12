import { createRouter, createWebHistory } from 'vue-router'
import welcome from "@/views/welcome/welcome.vue";
import index from "@/views/index/index.vue";
import main from "@/views/index/main.vue";
import ai from "@/views/index/ai.vue";
import oj from "@/views/index/oj.vue";
import github from "@/views/index/github.vue";
import monitor from "@/views/index/monitor.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/',
      name: 'index',
      redirect:'main',
      component: index,
      children:[
        {
          path: 'main',
          name: 'main',
          component: main,
        },
        {
          path: 'ai',
          name: 'ai',
          component: ai,
        },
        {
          path: 'oj',
          name: 'oj',
          component: oj,
        },
        {
          path: 'monitor',
          name: 'monitor',
          component: monitor,
        },
        {
          path: 'github',
          name: 'github',
          component: github,
        },
      ]
    }
  ]
})

export default router

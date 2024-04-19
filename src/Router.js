import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Gallery",
      component: () => import("./components/GalleryFilter.vue"),
    },
    {
      path: "/agent/:id",
      name: "agent-detail",
      component: () => import("./components/AgentDetail.vue")
    }
  ]
})

    export default router
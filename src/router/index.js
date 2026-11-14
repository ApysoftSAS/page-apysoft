import HomeView from '../views/home/HomeView.vue'
import { posts } from '../data/posts'

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/productos/dokapys', name: 'dokapys', component: () => import('../views/products/Dokapys.vue') },
  { path: '/blog', name: 'blog', component: () => import('../views/blog/BlogList.vue') },
  ...posts.map((post) => ({ path: `/blog/${post.slug}`, component: post.component, props: post.props })),
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
  return { top: 0 }
}

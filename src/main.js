import { markRaw } from 'vue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import createPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

// vite-ssg genera un HTML estático por ruta en el build y lo hidrata en el navegador.
export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, router, isClient }) => {
  const pinia = createPinia()
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
  if (isClient) {
    pinia.use(createPersistedState)
    import('bootstrap/dist/js/bootstrap.bundle') // toca document: solo en el navegador
  }
  app.use(pinia)
})

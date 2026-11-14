import { useRoute, useRouter } from 'vue-router'

// Va a una sección del inicio: desplaza si ya estamos en "/", si no navega a "/#id".
export function useSectionNav() {
  const route = useRoute()
  const router = useRouter()
  return (id) => {
    const el = route.path === '/' && document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    } else {
      router.push({ path: '/', hash: `#${id}` })
    }
  }
}

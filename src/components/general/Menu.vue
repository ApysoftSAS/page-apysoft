<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60;
};

const closeMenuOnEscape = (event) => {
  if (event.key === 'Escape') {
    menuOpen.value = false;
  }
};

const scrollTo = (id) => {
  menuOpen.value = false;
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="['site-nav', { 'scrolled': isScrolled, 'menu-open': menuOpen }]"
    role="banner"
    @keydown="closeMenuOnEscape"
  >
    <div class="nav-container">
      <!-- Logo -->
      <a href="#" class="nav-logo" @click.prevent="scrollTo('hero')" aria-label="Apysoft SAS - Inicio">
        <img src="/images/desk/logo/logo.png" alt="Logo Apysoft SAS" class="logo-img">
        <span class="logo-text">Apysoft</span>
      </a>

      <!-- Links Desktop -->
      <nav class="nav-links" aria-label="Navegación principal">
        <a href="#our-service" class="nav-link" @click.prevent="scrollTo('our-service')">Servicios</a>
        <a href="#why-apysoft" class="nav-link" @click.prevent="scrollTo('why-apysoft')">¿Por qué nosotros?</a>
        <a href="#about-us" class="nav-link" @click.prevent="scrollTo('about-us')">Nosotros</a>
        <a href="#contact-us" class="nav-cta" @click.prevent="scrollTo('contact-us')">Contáctanos</a>
      </nav>

      <!-- Hamburger -->
      <button
        class="nav-hamburger"
        type="button"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        aria-controls="mobile-navigation"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Menú Móvil -->
    <nav id="mobile-navigation" class="nav-mobile" :class="{ open: menuOpen }" aria-label="Menú móvil">
      <a href="#our-service"  @click.prevent="scrollTo('our-service')">Servicios</a>
      <a href="#why-apysoft" @click.prevent="scrollTo('why-apysoft')">¿Por qué nosotros?</a>
      <a href="#about-us"    @click.prevent="scrollTo('about-us')">Nosotros</a>
      <a href="#contact-us"  @click.prevent="scrollTo('contact-us')" class="mobile-cta">Contáctanos</a>
    </nav>
  </header>
</template>

<style scoped>
/* ---------- NAVBAR ---------- */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background var(--transition-base), box-shadow var(--transition-base), backdrop-filter var(--transition-base);
  background: transparent;
}

.site-nav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
}

/* --- Logo --- */
.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-white);
  transition: opacity var(--transition-fast);
}

.site-nav.scrolled .nav-logo { color: var(--color-brand); }

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: var(--text-lg);
  font-weight: 800;
  letter-spacing: -0.02em;
}

/* --- Links Desktop --- */
.nav-links {
  display: none;
  align-items: center;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .nav-links { display: flex; }
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  padding-bottom: 2px;
  transition: color var(--transition-fast);
}

.site-nav.scrolled .nav-link { color: var(--color-text-muted); }

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
  transition: width var(--transition-base);
}

.nav-link:hover { color: var(--color-accent); }
.nav-link:hover::after { width: 100%; }
.site-nav.scrolled .nav-link:hover { color: var(--color-accent); }

.nav-cta {
  padding: var(--space-2) var(--space-6);
  background: var(--color-accent);
  color: var(--color-white) !important;
  font-size: var(--text-sm);
  font-weight: 700;
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
}

.nav-cta:hover {
  background: var(--color-accent-dark);
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
  transform: translateY(-1px);
}

/* --- Hamburger --- */
.nav-hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

@media (min-width: 768px) {
  .nav-hamburger { display: none; }
}

.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.site-nav.scrolled .nav-hamburger span { background: var(--color-brand); }

.site-nav.menu-open .nav-hamburger span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.site-nav.menu-open .nav-hamburger span:nth-child(2) { opacity: 0; }
.site-nav.menu-open .nav-hamburger span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* --- Menú Móvil --- */
.nav-mobile {
  display: none;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-6);
  background: var(--color-white);
  box-shadow: var(--shadow-lg);
  border-top: 1px solid var(--color-border);
}

.nav-mobile.open { display: flex; }

.nav-mobile a {
  padding: var(--space-4) 0;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}

.nav-mobile a:hover { color: var(--color-accent); }
.nav-mobile a:last-child { border-bottom: none; }

.mobile-cta {
  margin-top: var(--space-4);
  text-align: center;
  background: var(--color-accent);
  color: var(--color-white) !important;
  border-radius: var(--radius-full);
  border-bottom: none !important;
  padding: var(--space-3) var(--space-6) !important;
}
</style>

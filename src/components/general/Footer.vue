<script setup>
import { ref } from 'vue';
const year = ref(new Date().getFullYear());

const links = [
  { label: 'Servicios', id: 'our-service' },
  { label: '¿Por qué Apysoft?', id: 'why-apysoft' },
  { label: 'Nosotros', id: 'about-us' },
  { label: 'Contacto', id: 'contact-us' },
];

const socials = [
  { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://www.instagram.com/apysoft_s.a.s' },
  { label: 'LinkedIn',  icon: 'fab fa-linkedin',  href: 'https://www.linkedin.com/in/apysoft/' },
  { label: 'GitHub',    icon: 'fab fa-github',    href: 'https://github.com/ApysoftSAS' },
  { label: 'Email',     icon: 'fas fa-envelope',  href: 'mailto:apysoft2023@gmail.com' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- Columna 1: Brand -->
          <div class="footer-brand">
            <a href="#hero" class="footer-logo" @click.prevent="scrollTo('hero')" aria-label="Apysoft SAS - Inicio">
              <img src="/images/desk/logo/logo.png" alt="Logo Apysoft SAS" class="footer-logo-img">
              <span class="footer-logo-text">Apysoft</span>
            </a>
            <p class="footer-tagline">
              Desarrollamos software y soluciones digitales según los procesos y objetivos de cada empresa.
            </p>
            <!-- Redes -->
            <div class="footer-socials" aria-label="Redes sociales de Apysoft">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="s.label"
              >
                <i :class="s.icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <!-- Columna 2: Servicios -->
          <div class="footer-col">
            <h3 class="footer-col-title">Servicios</h3>
            <ul class="footer-list" role="list">
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Desarrollo Web</a></li>
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Software a Medida</a></li>
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Consultoría Tecnológica</a></li>
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Transformación Digital</a></li>
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Nube AWS</a></li>
              <li><a href="#our-service" @click.prevent="scrollTo('our-service')">Integraciones</a></li>
            </ul>
          </div>

          <!-- Columna 3: Empresa -->
          <div class="footer-col">
            <h3 class="footer-col-title">Empresa</h3>
            <ul class="footer-list" role="list">
              <li v-for="link in links" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  @click.prevent="scrollTo(link.id)"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Columna 4: Contacto -->
          <div class="footer-col">
            <h3 class="footer-col-title">Contacto</h3>
            <ul class="footer-contact-list" role="list">
              <li>
                <a href="https://wa.me/573204478206" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Apysoft">
                  <i class="fab fa-whatsapp" aria-hidden="true"></i>
                  +57 320 447 8206
                </a>
              </li>
              <li>
                <a href="mailto:apysoft2023@gmail.com" aria-label="Email Apysoft">
                  <i class="fas fa-envelope" aria-hidden="true"></i>
                  apysoft2023@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  Sede principal: Yopal, Casanare · Atención remota internacional
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p class="footer-copy">
            © {{ year }} <strong>Apysoft SAS</strong> · Todos los derechos reservados
          </p>
          <p class="footer-made">
            Hecho con ❤️ en Colombia
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-brand);
  color: rgba(255, 255, 255, 0.8);
}

/* --- Top --- */
.footer-top {
  padding: var(--space-16) 0 var(--space-12);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
}

@media (min-width: 640px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: var(--space-8); }
}

/* --- Brand --- */
.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.footer-logo-img {
  height: 36px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-logo-text {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--color-white);
}

.footer-tagline {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.65;
  margin-bottom: var(--space-6);
}

.footer-socials {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.social-link:hover {
  background: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-2px);
}

/* --- Columnas --- */
.footer-col-title {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-5);
}

.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-list a {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.65);
  transition: color var(--transition-fast), padding-left var(--transition-fast);
}

.footer-list a:hover {
  color: var(--color-accent);
  padding-left: var(--space-2);
}

/* --- Contacto --- */
.footer-contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer-contact-list a,
.footer-contact-list span {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.65);
  transition: color var(--transition-fast);
}

.footer-contact-list a:hover { color: var(--color-accent); }

.footer-contact-list i {
  width: 16px;
  text-align: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

/* --- Bottom --- */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--space-5) 0;
}

.footer-bottom-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: center;
}

@media (min-width: 640px) {
  .footer-bottom-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-copy {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
}

.footer-copy strong { color: rgba(255, 255, 255, 0.8); }

.footer-made {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.4);
}
</style>
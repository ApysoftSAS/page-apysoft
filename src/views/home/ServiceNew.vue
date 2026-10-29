<script setup>
import { onMounted } from 'vue';

const services = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,
    title: 'Desarrollo de sitios web',
    desc: 'Diseño y desarrollo de sitios corporativos, páginas de aterrizaje y portales web según las necesidades de tu empresa.',
    color: '#3B82F6',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    title: 'Software a la medida',
    desc: 'Aplicaciones desarrolladas de acuerdo con los procesos y requerimientos de tu negocio.',
    color: '#FF6B35',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,
    title: 'Consultoría tecnológica',
    desc: 'Revisamos tus necesidades y alternativas tecnológicas para orientar las decisiones de tu empresa.',
    color: '#8B5CF6',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Transformación digital',
    desc: 'Identificamos oportunidades para digitalizar procesos y definimos contigo los pasos a seguir.',
    color: '#10B981',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    title: 'Servicios en la nube AWS',
    desc: 'Alternativas para planear, migrar o gestionar infraestructura en Amazon Web Services, según el alcance del proyecto.',
    color: '#F59E0B',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    title: 'Integración de sistemas',
    desc: 'Revisión e integración de herramientas como ERP, CRM, pasarelas de pago y APIs, de acuerdo con tus requerimientos.',
    color: '#EC4899',
  },
];

onMounted(() => {
  const cards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach(card => observer.observe(card));
});
</script>

<template>
  <section class="services-section section-padding" id="our-service" aria-labelledby="services-heading">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <span class="section-tag">Lo que hacemos</span>
        <h2 id="services-heading" class="section-title">Nuestros servicios</h2>
        <p class="section-subtitle">
          Soluciones y servicios tecnológicos para atender las necesidades y prioridades de tu empresa.
        </p>
      </div>

      <!-- Grid de servicios -->
      <div class="services-grid" role="list">
        <article
          v-for="(service, i) in services"
          :key="i"
          class="service-card"
          role="listitem"
        >
          <div class="card-icon" :style="{ '--card-color': service.color }" v-html="service.icon" aria-hidden="true"></div>
          <h3 class="card-title">{{ service.title }}</h3>
          <p class="card-desc">{{ service.desc }}</p>
          <div class="card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--color-bg);
}

/* --- Header --- */
.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.65;
}

/* --- Grid --- */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .services-grid { grid-template-columns: repeat(3, 1fr); }
}

/* --- Card --- */
.service-card {
  position: relative;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-6);
  cursor: default;
  transition: box-shadow var(--transition-base), transform var(--transition-base), border-color var(--transition-base);
  opacity: 0;
  transform: translateY(24px);
  overflow: hidden;
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow var(--transition-base), border-color var(--transition-base);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-color, var(--color-accent));
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.service-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: transparent;
}

.service-card:hover::before {
  transform: scaleX(1);
}

/* --- Ícono --- */
.card-icon {
  width: 52px;
  height: 52px;
  padding: 12px;
  background: color-mix(in srgb, var(--card-color, var(--color-accent)) 12%, transparent);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-5);
  color: var(--card-color, var(--color-accent));
  transition: background var(--transition-base), transform var(--transition-base);
}

.service-card:hover .card-icon {
  background: color-mix(in srgb, var(--card-color, var(--color-accent)) 18%, transparent);
  transform: scale(1.08);
}

.card-icon :deep(svg) {
  width: 100%;
  height: 100%;
  stroke: var(--card-color, var(--color-accent));
}

/* Fallback para navegadores sin color-mix */
@supports not (color: color-mix(in srgb, red 50%, blue)) {
  .card-icon { background: rgba(255, 107, 53, 0.1); }
}

/* --- Texto --- */
.card-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.card-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-5);
}

/* --- Flecha --- */
.card-arrow {
  color: var(--card-color, var(--color-accent));
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.service-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>
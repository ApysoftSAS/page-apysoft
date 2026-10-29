<script setup>
const reasons = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Acompañamiento cercano',
    desc: 'Conversamos contigo para entender tus procesos, prioridades y objetivos de negocio.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    title: 'Plan de trabajo claro',
    desc: 'Definimos alcance, prioridades y etapas para que puedas evaluar la propuesta antes de avanzar.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    title: 'Propuesta alineada con tus necesidades',
    desc: 'La solución y su alcance se plantean a partir del reto concreto que quieres resolver.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    title: 'Tecnología con propósito',
    desc: 'Conectamos las decisiones técnicas con los objetivos y la operación de tu empresa.',
  },
];
</script>

<template>
  <section class="why-section section-padding" id="why-apysoft" aria-labelledby="why-heading">
    <div class="container">
      <div class="why-grid">
        <!-- Columna izquierda — imagen + badge -->
        <div class="why-visual">
          <div class="why-img-wrapper">
            <img
              src="/images/desk/why-apysoft/v1.jpg"
              alt="Equipo de Apysoft SAS trabajando en un proyecto de software"
              class="why-img"
              loading="lazy"
              width="560"
              height="400"
            >
            <div class="why-badge-float">
              <div class="badge-number">A tu medida</div>
              <div class="badge-text">Software alineado con tu negocio</div>
            </div>
          </div>
        </div>

        <!-- Columna derecha — texto + razones -->
        <div class="why-content">
          <span class="section-tag">¿Por qué elegirnos?</span>
          <h2 id="why-heading" class="section-title why-title">
            Software a la medida para los objetivos de tu negocio
          </h2>
          <p class="why-intro">
            Diseñamos soluciones digitales para responder a necesidades reales de negocio. Empezamos por entender tus procesos y prioridades para plantear una ruta de trabajo clara.
          </p>

          <ul class="why-reasons" role="list">
            <li v-for="(reason, i) in reasons" :key="i" class="reason-item">
              <div class="reason-icon" v-html="reason.icon" aria-hidden="true"></div>
              <div class="reason-text">
                <h3 class="reason-title">{{ reason.title }}</h3>
                <p class="reason-desc">{{ reason.desc }}</p>
              </div>
            </li>
          </ul>
          <a class="btn btn-primary why-cta" href="#contact-us">Conversemos sobre tu proyecto</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  background: var(--color-surface);
}

/* --- Grid 2 columnas --- */
.why-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 1024px) {
  .why-grid { grid-template-columns: 1fr 1fr; gap: var(--space-16); }
}

/* --- Visual / Imagen --- */
.why-visual {
  order: 2;
}

@media (min-width: 1024px) {
  .why-visual { order: 1; }
}

.why-img-wrapper {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: visible;
}

.why-img {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-xl);
}

.why-badge-float {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--color-brand);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.badge-number {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.badge-text {
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.8);
  font-weight: 500;
  margin-top: var(--space-1);
  line-height: 1.3;
}

/* --- Contenido --- */
.why-content {
  order: 1;
}

@media (min-width: 1024px) {
  .why-content { order: 2; }
}

.why-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-5);
}

.why-intro {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.why-cta {
  margin-top: var(--space-8);
}

/* --- Razones --- */
.why-reasons {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.reason-item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.reason-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-accent);
}

.reason-icon :deep(svg) {
  width: 100%;
  height: 100%;
  stroke: var(--color-accent);
}

.reason-title {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.reason-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>

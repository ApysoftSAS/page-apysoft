<script setup>
const values = [
  { icon: '🤝', title: 'Transparencia', desc: 'Conversamos con claridad sobre las necesidades, opciones y alcance de cada proyecto.' },
  { icon: '⚡', title: 'Trabajo por etapas', desc: 'Revisamos prioridades durante el desarrollo para mantener el proyecto alineado con el negocio.' },
  { icon: '🎯', title: 'Enfoque en el negocio', desc: 'Partimos de los procesos y retos de tu empresa para definir cada solución.' },
  { icon: '🇨🇴', title: 'Empresa colombiana', desc: 'Desarrollamos desde Colombia y conocemos el entorno empresarial local.' },
];
</script>

<template>
  <section class="about-section section-padding" id="about-us" aria-labelledby="about-heading">
    <div class="container">
      <div class="about-grid">
        <!-- Texto -->
        <div class="about-content">
          <span class="section-tag">Quiénes somos</span>
          <h2 id="about-heading" class="section-title about-title">
            Tecnología alineada con los objetivos de tu empresa
          </h2>
          <p class="about-text">
            Apysoft SAS es una empresa de desarrollo de software con sede principal en Yopal, Casanare, Colombia. Trabajamos de forma remota con empresas de Colombia y otros países para entender sus procesos y crear soluciones digitales acordes con sus necesidades.
          </p>
          <p class="about-text">
            Cada proyecto comienza por comprender el reto, conversar sobre las alternativas y acordar un alcance que responda a las prioridades del negocio.
          </p>
          <p class="about-text">
            Acompañamos el desarrollo con comunicación directa y revisión de prioridades para mantener el trabajo alineado con lo acordado.
          </p>

          <!-- Valores -->
          <div class="about-values">
            <div v-for="val in values" :key="val.title" class="value-chip">
              <span class="value-emoji" aria-hidden="true">{{ val.icon }}</span>
              <div>
                <div class="value-title">{{ val.title }}</div>
                <div class="value-desc">{{ val.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Imagen -->
        <div class="about-visual">
          <div class="about-img-wrapper">
            <img
              src="/images/desk/about/v1.jpg"
              alt="Equipo de Apysoft SAS — empresa colombiana de desarrollo de software"
              class="about-img"
              loading="lazy"
              width="560"
              height="420"
            >
            <div class="about-tag-float">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Software pensado para empresas
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--color-bg);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
}

@media (min-width: 1024px) {
  .about-grid { grid-template-columns: 1fr 1fr; gap: var(--space-16); }
}

/* --- Contenido --- */
.about-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-6);
}

.about-text {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: var(--space-5);
}

/* --- Valores --- */
.about-values {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.value-chip {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: box-shadow var(--transition-base);
}

.value-chip:hover {
  box-shadow: var(--shadow-md);
}

.value-emoji {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.value-title {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2px;
}

.value-desc {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* --- Imagen --- */
.about-img-wrapper {
  position: relative;
}

.about-img {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-xl);
}

.about-tag-float {
  position: absolute;
  bottom: var(--space-6);
  left: var(--space-4);
  max-width: calc(100% - var(--space-8));
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--color-white);
  color: var(--color-brand);
  font-size: var(--text-xs);
  font-weight: 700;
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  white-space: normal;
}

.about-tag-float svg {
  stroke: var(--color-accent);
  flex-shrink: 0;
}
</style>
